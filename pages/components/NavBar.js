import React from 'react';
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';

export default function NavBar() {
  return (
    <nav className="max-w-6xl m-auto p-5 flex justify-between border-solid border-b border-gray-100 bg-white dark:border-black dark:bg-blackish sticky top-0">
      <Link href="/about">
        <p className="cursor-pointer font-medium text-gray-900 hover:text-red-500 dark:text-gray-200 hover:text-draplin dark:hover:text-draplin">
          danilo leal
        </p>
      </Link>
      <div className="flex space-x-6">
        <Link href="/about">
          <p className="cursor-pointer text-sm text-gray-400 hover:text-gray-900 dark:hover:text-white">
            about me
          </p>
        </Link>
        <Link href="/about">
          <p className="cursor-pointer text-sm text-gray-400 hover:text-gray-900 dark:hover:text-white">
            other endearvors
          </p>
        </Link>
        <DarkModeButton />
      </div>
    </nav>
  );
}
