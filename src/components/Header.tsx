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
        <Tooltip title={isDark ? 'Dark theme' : 'Light theme'}>
          <Switch
            checked={isDark}
            onChange={onThemeChange}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
          />
        </Tooltip>
      </div>
      <div>
        <Title level={1} style={{ margin: 0 }}>
          🐔 Roost Chicken Tracker
        </Title>
      </div>
    </div>
  );
}
