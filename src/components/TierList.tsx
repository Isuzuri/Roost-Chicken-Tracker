import { Collapse, Tag, Typography, Space, Tooltip, Card } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, CheckOutlined } from '@ant-design/icons';
import { Chicken } from '../data/chickens';
import TierItem from './TierItem';

const { Panel } = Collapse;
const { Text } = Typography;

const tierColors: Record<number, string> = {
  1: 'green',
  2: 'blue',
  3: 'purple',
  4: 'orange',
  5: 'red',
  6: 'magenta',
  7: 'cyan',
  8: 'gold',
};

const tierNames: Record<number, string> = {
  1: 'Tier 1 — Базовые',
  2: 'Tier 2 — Ресурсы',
  3: 'Tier 3 — Металлы',
  4: 'Tier 4 — Редкие',
  5: 'Tier 5 — Легендарные',
  6: 'Tier 6 — Мифические',
  7: 'Tier 7 — Крафтовые',
  8: 'Tier 8 — Божественные',
};

interface TierListProps {
  tiers: number[];
  groupedByTier: Record<number, Chicken[]>;
  completed: Record<string, boolean>;
  activeKeys: string[];
  onActiveKeysChange: (keys: string[]) => void;
  onToggle: (id: string) => void;
  onMarkAllTier: (tier: number) => void;
  searchQuery: string;
}

export default function TierList({
  tiers,
  groupedByTier,
  completed,
  activeKeys,
  onActiveKeysChange,
  onToggle,
  onMarkAllTier,
  searchQuery,
}: TierListProps) {
  if (tiers.length === 0) {
    return (
      <Card>
        <Text type="secondary">Ничего не найдено по запросу «{searchQuery}»</Text>
      </Card>
    );
  }

  return (
    <Collapse
      activeKey={activeKeys}
      onChange={(keys) => onActiveKeysChange(keys as string[])}
      ghost
    >
      {tiers.map((tier) => {
        const tierChickens = groupedByTier[tier] || [];
        const tierCompleted = tierChickens.filter((c) => completed[c.id]).length;
        const tierTotal = tierChickens.length;
        const allTierDone = tierCompleted === tierTotal;

        return (
          <Panel
            header={
              <Space>
                <Tag color={tierColors[tier] || 'default'}>Tier {tier}</Tag>
                <Text strong>{tierNames[tier] || `Tier ${tier}`}</Text>
                <Tooltip title={`${tierCompleted} из ${tierTotal} готово`}>
                  <Tag
                    icon={allTierDone ? <CheckCircleOutlined /> : <ClockCircleOutlined />}
                    color={allTierDone ? 'success' : 'processing'}
                  >
                    {tierCompleted}/{tierTotal}
                  </Tag>
                </Tooltip>
              </Space>
            }
            extra={
              <Tooltip title={allTierDone ? 'Снять всё' : 'Отметить всё'}>
                <div
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    onMarkAllTier(tier);
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: allTierDone ? 'rgba(82, 196, 26, 0.15)' : 'rgba(24, 144, 255, 0.12)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <CheckOutlined
                    style={{
                      fontSize: 16,
                      color: allTierDone ? '#52c41a' : '#1677ff',
                    }}
                  />
                </div>
              </Tooltip>
            }
            key={String(tier)}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {tierChickens.map((chicken) => (
                <TierItem
                  key={chicken.id}
                  chicken={chicken}
                  isCompleted={!!completed[chicken.id]}
                  onToggle={() => onToggle(chicken.id)}
                />
              ))}
            </div>
          </Panel>
        );
      })}
    </Collapse>
  );
}
