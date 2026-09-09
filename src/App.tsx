import { useState, useEffect } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';

const { darkAlgorithm, defaultAlgorithm } = antdTheme;

import Main from './components/Main';

const THEME_KEY = 'roost-theme';

function getInitialTheme(): boolean {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored === 'dark';
    // По умолчанию — системная тема
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  } catch {
    return false;
  }
}

export default function App() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: '#1677ff',
        },
      }}
    >
      <div
        style={{
          minHeight: '100vh',
          background: isDark ? '#141414' : '#ffffff',
          transition: 'background 0.3s ease',
        }}
      >
        <Main isDark={isDark} onThemeChange={setIsDark} />
      </div>
    </ConfigProvider>
  );
}
