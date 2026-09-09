import { Card, Input, Typography, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  foundCount: number;
  totalCount: number;
}

export default function Search({ value, onChange, foundCount, totalCount }: SearchProps) {
  return (
    <Card style={{ marginBottom: 16 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search by name or parent"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          allowClear
          size="large"
        />
        {value.trim() && (
          <Text type="secondary" style={{ fontSize: 12 }}>
            Найдено: {foundCount} из {totalCount}
          </Text>
        )}
      </Space>
    </Card>
  );
}
