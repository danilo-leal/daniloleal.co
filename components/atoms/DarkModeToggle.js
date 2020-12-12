import React, { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [theme, setTheme] = useState('light', 'dark');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    const colorTheme = localStorage.getItem('theme');

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    window.localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
