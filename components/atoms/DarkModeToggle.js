import React, { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(null);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  useEffect(() => {
    const root = window.document.documentElement;
    //setTheme(localStorage.theme);

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    window.localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
