import React, { useEffect, useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function DarkModeButton() {
  const [colorTheme, setTheme] = DarkModeToggle();
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="h-7 w-7 p-2 bg-gray-100 rounded-lg flex justify-center items-center hover:bg-draplin dark:bg-black dark:hover:bg-draplin transition-all"
    >
      <span onClick={() => setTheme(colorTheme)}>
        {colorTheme === 'light' ? (
          <svg
            class="w-4 h-4 fill-current text-white"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        ) : (
          <svg
            class="w-4 h-4 fill-current stroke-current text-gray-700 hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        )}
      </span>
    </button>
  );
}