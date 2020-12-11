import React from 'react';
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';

export default function AppBar(props) {
  return (
    <div className="w-screen bg-white dark:bg-blackish sticky top-0 border-solid border-b border-gray-200 dark:border-black px-5 py-4 opacity-80">
      <nav className="max-w-5xl m-auto flex justify-between items-center">
        <div className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-black ">
          <Link href="/">
            <svg
              class="w-4 h-4 fill-current text-draplin dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="flex items-center space-x-6 align-baseline">
          <DarkModeButton />
        </div>
      </nav>
    </div>
  );
}
