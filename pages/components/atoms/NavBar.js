import React from 'react';
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';
import SecondaryLink from './SecondaryLink';
import Logo from './Logo';

export default function NavBar() {
  return (
    <nav className="max-w-6xl m-auto p-5 sm:flex sm:justify-between border-solid border-b border-gray-100 bg-white dark:border-black dark:bg-blackish sticky top-0">
      <Logo />
      <div className="flex items-center space-x-6">
        <SecondaryLink path="/about" string="about me" />
        <SecondaryLink path="/other-endeavors" string="other endearvors" />
        <DarkModeButton />
      </div>
    </nav>
  );
}
