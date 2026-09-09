import { Tag, Typography } from 'antd';
import { getBreedingRecipe } from '../data/breeding';

const { Text } = Typography;

function formatId(id: string): string {
  return id
    .replace('c_', '')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

interface BreedingBadgeProps {
  chickenId: string;
}

export default function BreedingBadge({ chickenId }: BreedingBadgeProps) {
  const recipe = getBreedingRecipe(chickenId);

  if (!recipe) {
    return (
      <Tag color="default" icon={<span>🚫</span>}>
        No Breed
      </Tag>
    );
  }

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
      <Tag color="blue" style={{ margin: 0 }}>
        {formatId(recipe.parent_1)}
      </Tag>
      <Text type="secondary" style={{ fontSize: 14 }}>
        +
      </Text>
      <Tag color="purple" style={{ margin: 0 }}>
        {formatId(recipe.parent_2)}
      </Tag>
    </div>
  );
}
