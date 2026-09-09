import { Typography } from 'antd';

const { Text } = Typography;

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: 48,
        paddingTop: 24,
        paddingBottom: 24,
        borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)'}`,
      }}
    >
      <Text type="secondary" style={{ fontSize: 12 }}>
        Сборка Stoneblock 4 • Версия конфига Roost — v7
      </Text>
    </div>
  );
}
