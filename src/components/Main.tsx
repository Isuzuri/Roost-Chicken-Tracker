import { useState, useEffect, useMemo, useRef } from 'react';
import { Chicken, chickens } from '../data/chickens';
import { getBreedingRecipe, breedingRecipes } from '../data/breeding';
import Header from './Header';
import Search from './Search';
import TierList from './TierList';
import Footer from './Footer';
import Statistics from './Statistics';

const STORAGE_KEY = 'roost-chicken-tracker';

function formatId(id: string): string {
  return id
    .replace('c_', '')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

function getCompletedIds(): Record<string, boolean> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveCompletedIds(ids: Record<string, boolean>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

interface MainProps {
  isDark: boolean;
  onThemeChange: (value: boolean) => void;
}

export default function Main({ isDark, onThemeChange }: MainProps) {
  const [completed, setCompleted] = useState<Record<string, boolean>>(getCompletedIds);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const prevActiveKeysRef = useRef<string[]>([]);
  const isInitialized = useRef(false);

  useEffect(() => {
    saveCompletedIds(completed);
  }, [completed]);

  // Создаём виртуальные записи для куриц из breeding-рецептов
  const breedingChickens: Chicken[] = useMemo(() => {
    const result: Chicken[] = [];
    breedingRecipes.forEach((tier) => {
      tier.chickens.forEach((chicken) => {
        const exists = chickens.find((c) => c.id === chicken.output);
        if (!exists) {
          result.push({
            ChickenName: formatId(chicken.output),
            MobOrMonster: 'Mob',
            id: chicken.output,
            itemtexture: chicken.output.replace('c_', ''),
            mobtexture: chicken.output.replace('c_', ''),
            dropitem: chicken.item,
            eggtime: tier.time * 60,
            tier: tier.tier,
            CanGetFireDamage: true,
            CanGetProjectileDamage: true,
            CanGetExplosionDamage: true,
            CanGetFallDamage: false,
            CanGetDrowningDamage: true,
            CanGetFreezingDamage: true,
            CanGetLightningDamage: true,
            CanGetWitherDamage: true,
          });
        }
      });
    });
    return result;
  }, []);

  // Объединяем основной массив с виртуальными записями
  const allChickens = useMemo(() => [...chickens, ...breedingChickens], [breedingChickens]);

  // Фильтрация по поисковому запросу (поиск по имени и родителям)
  const filteredChickens = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return allChickens;

    return allChickens.filter((chicken) => {
      // Поиск по имени
      if (chicken.ChickenName.toLowerCase().includes(query)) return true;

      // Поиск в breeding-рецепте (по родителям)
      const recipe = getBreedingRecipe(chicken.id);
      if (recipe) {
        if (recipe.parent_1.toLowerCase().includes(query)) return true;
        if (recipe.parent_2.toLowerCase().includes(query)) return true;
        if (formatId(recipe.parent_1).toLowerCase().includes(query)) return true;
        if (formatId(recipe.parent_2).toLowerCase().includes(query)) return true;
      }

      return false;
    });
  }, [allChickens, searchQuery]);

  // Группируем отфильтрованных куриц по tier
  const groupedByTier = useMemo(() => {
    return filteredChickens.reduce<Record<number, Chicken[]>>((acc, chicken) => {
      if (!acc[chicken.tier]) {
        acc[chicken.tier] = [];
      }
      acc[chicken.tier].push(chicken);
      return acc;
    }, {});
  }, [filteredChickens]);

  const tiers = Object.keys(groupedByTier)
    .map(Number)
    .sort((a, b) => a - b);

  const handleToggle = (id: string) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleMarkAllTier = (tier: number) => {
    const tierChickens = groupedByTier[tier] || [];
    const allCompleted = tierChickens.every((c) => completed[c.id]);

    setCompleted((prev) => {
      const newCompleted = { ...prev };
      tierChickens.forEach((chicken) => {
        newCompleted[chicken.id] = !allCompleted;
      });
      return newCompleted;
    });
  };

  // Подсчёт прогресса (всегда по всем курицам, не по отфильтрованным)
  const totalChickens = allChickens.length;
  const completedCount = Object.values(completed).filter(Boolean).length;

  // Подсчёт breeding/no-breed
  const breedingCount = useMemo(() => {
    return allChickens.filter((chicken) => getBreedingRecipe(chicken.id) !== null).length;
  }, [allChickens]);

  const noBreedCount = totalChickens - breedingCount;

  // Статистика по каждому tier
  const tierStats = useMemo(() => {
    const stats: Record<number, { completed: number; total: number }> = {};
    allChickens.forEach((chicken) => {
      if (!stats[chicken.tier]) {
        stats[chicken.tier] = { completed: 0, total: 0 };
      }
      stats[chicken.tier].total++;
      if (completed[chicken.id]) {
        stats[chicken.tier].completed++;
      }
    });
    return stats;
  }, [allChickens, completed]);

  // Управление состоянием панелей Collapse
  const allTierKeys = useMemo(
    () => allChickens.map((c) => String(c.tier)).filter((v, i, a) => a.indexOf(v) === i),
    [allChickens]
  );

  // Инициализация — разворачиваем все панели при первом рендере
  useEffect(() => {
    if (!isInitialized.current && allTierKeys.length > 0) {
      setActiveKeys(allTierKeys);
      prevActiveKeysRef.current = allTierKeys;
      isInitialized.current = true;
    }
  }, [allTierKeys]);

  // При изменении поиска — сохраняем/восстанавливаем состояние
  useEffect(() => {
    if (searchQuery.trim()) {
      prevActiveKeysRef.current = activeKeys;
      setActiveKeys(tiers.map(String));
    } else {
      setActiveKeys(prevActiveKeysRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px' }}>
      <Header isDark={isDark} onThemeChange={onThemeChange} />
      
      <div
        style={{
          display: 'flex',
          gap: 24,
          alignItems: 'flex-start',
        }}
      >
        {/* Основная колонка */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <Search
            value={searchQuery}
            onChange={setSearchQuery}
            foundCount={filteredChickens.length}
            totalCount={totalChickens}
          />
          <TierList
            tiers={tiers}
            groupedByTier={groupedByTier}
            completed={completed}
            activeKeys={activeKeys}
            onActiveKeysChange={(keys) => {
              if (!searchQuery.trim()) {
                prevActiveKeysRef.current = keys;
              }
              setActiveKeys(keys);
            }}
            onToggle={handleToggle}
            onMarkAllTier={handleMarkAllTier}
            searchQuery={searchQuery}
          />
        </div>

        {/* Sidebar со статистикой */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          className="statistics-sidebar"
        >
          <Statistics
            totalChickens={totalChickens}
            completedCount={completedCount}
            breedingCount={breedingCount}
            noBreedCount={noBreedCount}
            tierStats={tierStats}
          />
        </div>
      </div>

      <Footer isDark={isDark} />
    </div>
  );
}
