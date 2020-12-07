import React from 'react';
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';

export default function AppBar() {
  return (
    <div className="w-screen bg-white dark:bg-blackish sticky top-0 border-solid border-b border-gray-200 dark:border-black  p-5 ">
      <nav className="max-w-5xl m-auto flex justify-between">
        <Link href="/">
          <p className="cursor-pointer font-semibold text-draplin text-sm hover:text-gray-900 dark:hover:text-white">
            Go back
          </p>
        </Link>
        <div className="flex space-x-6 align-baseline">
          <Link href="/about">
            <p className="cursor-pointer font-medium text-gray-900 hover:text-red-500 dark:text-gray-200 hover:text-draplin dark:hover:text-draplin">
              danilo leal
            </p>
          </Link>
          <DarkModeButton />
        </div>
      </nav>
    </div>
  );
}
