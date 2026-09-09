import { Card, Checkbox, Typography, Space, Tag } from 'antd';
import { Chicken } from '../data/chickens';
import BreedingBadge from './BreedingBadge';

const { Text } = Typography;

interface TierItemProps {
  chicken: Chicken;
  isCompleted: boolean;
  onToggle: () => void;
}

export default function TierItem({ chicken, isCompleted, onToggle }: TierItemProps) {
  return (
    <Card
      size="small"
      style={{
        background: isCompleted ? 'rgba(82, 196, 26, 0.08)' : undefined,
        borderColor: isCompleted ? '#b7eb8f' : undefined,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          flexWrap: 'wrap',
        }}
      >
        <Space>
          <Checkbox checked={isCompleted} onChange={onToggle} />
          <div>
            <Text
              strong
              style={{
                textDecoration: isCompleted ? 'line-through' : 'none',
                color: isCompleted ? '#52c41a' : undefined,
              }}
            >
              {chicken.ChickenName}
            </Text>
            <div>
              <Text type="secondary" style={{ fontSize: 12 }}>
                Drop: <code>{chicken.dropitem}</code>
              </Text>
            </div>
          </div>
        </Space>
        <Space wrap>
          <BreedingBadge chickenId={chicken.id} />
        </Space>
      </div>
    </Card>
  );
}
