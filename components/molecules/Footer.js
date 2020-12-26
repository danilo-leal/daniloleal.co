import React from 'react';
import IconsSocial from '../atoms/IconsSocial';

export default function Footer() {
  return (
    <div className="pt-6 sm:pb-10 pb-8 mt-12 grid grid-flow-row justify-center w-full border-t border-gray-200 dark:border-black">
      <p className="pt-5 pb-5 text-xs font-medium text-center text-gray-700  dark:text-gray-200">
        danilo leal © 2020
        <br />
        <br /> <span className="opacity-30">•</span>
      </p>
      <IconsSocial />
    </div>
  );
}
