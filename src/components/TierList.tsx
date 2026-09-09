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
  9: 'brown'
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
        <Text type="secondary">No data by query «{searchQuery}»</Text>
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
                <Tooltip title={`${tierCompleted} of ${tierTotal} complete`}>
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
              <Tooltip title={allTierDone ? 'Deselect all' : 'Select all'}>
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
