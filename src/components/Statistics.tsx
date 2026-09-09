import { Card, Typography, Space, Tag, Progress } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

const tierColors: Record<number, string> = {
  1: 'green',
  2: 'blue',
  3: 'purple',
  4: 'orange',
  5: 'red',
  6: 'magenta',
  7: 'cyan',
  8: 'gold',
  9: 'volcano'
};

const tierNames: Record<number, string> = {
  1: 'Tier 1',
  2: 'Tier 2',
  3: 'Tier 3',
  4: 'Tier 4',
  5: 'Tier 5',
  6: 'Tier 6',
  7: 'Tier 7',
  8: 'Tier 8',
  9: 'Tier 9'
};

interface StatisticsProps {
  totalChickens: number;
  completedCount: number;
  breedingCount: number;
  noBreedCount: number;
  tierStats: Record<number, { completed: number; total: number }>;
}

export default function Statistics({
  totalChickens,
  completedCount,
  breedingCount,
  noBreedCount,
  tierStats,
}: StatisticsProps) {
  const progressPercent =
    totalChickens > 0 ? Math.round((completedCount / totalChickens) * 100) : 0;

  const tiers = Object.keys(tierStats)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div
      style={{
        position: 'sticky',
        top: 24,
        width: 280,
        flexShrink: 0,
      }}
    >
      <Card size="small">
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          <div>
            <Title level={5} style={{ margin: 0, marginBottom: 12 }}>
              📊 Statistics
            </Title>
            <Progress
              percent={progressPercent}
              size="small"
              status={progressPercent === 100 ? 'success' : 'active'}
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text type="secondary">Total:</Text>
              <Text strong>{totalChickens}</Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text type="secondary">Completed:</Text>
              <Text strong style={{ color: '#52c41a' }}>
                {completedCount}
              </Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text type="secondary">Remaining</Text>
              <Text strong style={{ color: '#faad14' }}>
                {totalChickens - completedCount}
              </Text>
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid var(--border-color, rgba(0, 0, 0, 0.06))',
              paddingTop: 12,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ display: 'flex', gap: 8 }}>
              <Tag color="geekblue" icon={<CheckCircleOutlined />}>
                Breed: {breedingCount}
              </Tag>
              <Tag color="default" icon={<span>🚫</span>}>
                No Breed: {noBreedCount}
              </Tag>
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid var(--border-color, rgba(0, 0, 0, 0.06))',
              paddingTop: 12,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {tiers.map((tier) => {
                const { completed, total } = tierStats[tier];
                const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

                return (
                  <div key={tier}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 4,
                      }}
                    >
                      <Tag color={tierColors[tier]} style={{ margin: 0, fontSize: 11 }}>
                        {tierNames[tier]}
                      </Tag>
                      <Text style={{ fontSize: 11 }}>
                        {completed}/{total}
                      </Text>
                    </div>
                    <Progress
                      percent={percent}
                      size="small"
                      showInfo={false}
                      strokeColor={percent === 100 ? '#52c41a' : '#1677ff'}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Space>
      </Card>
    </div>
  );
}
