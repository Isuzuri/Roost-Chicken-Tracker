import { Typography, Switch, Tooltip } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface HeaderProps {
  isDark: boolean;
  onThemeChange: (value: boolean) => void;
}

export default function Header({ isDark, onThemeChange }: HeaderProps) {
  return (
    <div
      style={{
        position: 'relative',
        textAlign: 'center',
        marginBottom: 32,
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
        <Tooltip title={isDark ? 'Светлая тема' : 'Тёмная тема'}>
          <Switch
            checked={isDark}
            onChange={onThemeChange}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
          />
        </Tooltip>
      </div>
      <div>
        <Title level={2} style={{ margin: 0 }}>
          🐔 Roost Chicken Tracker
        </Title>
        <Text type="secondary">Отслеживание созданных куриц из мода Roost</Text>
      </div>
    </div>
  );
}
