import React from 'react';
import DarkModeButton from './DarkModeButton';
import SecondaryLink from './SecondaryLink';
import Logo from './Logo';

export default function NavBar() {
  return (
    <nav className="max-w-5xl m-auto p-5 flex justify-between border-solid border-b border-gray-100 bg-white dark:border-black dark:bg-blackish sticky top-0 opacity-90 z-10">
      <Logo />
      <div className="flex items-center space-x-6">
        <SecondaryLink path="/about" string="About me" />
        <SecondaryLink path="/my-world" string="My world" />
        <DarkModeButton />
      </div>
    </nav>
  );
}
