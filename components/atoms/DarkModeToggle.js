import React, { useEffect, useState } from 'react';

function getThemeInLocalStorage() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme');
  }
  return ['light', 'dark'];
}

function setThemeInStorage(newTheme) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', newTheme);
  }
}

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(getThemeInLocalStorage);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    //const colorTheme = localStorage.getItem('theme') || theme;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    window.localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
