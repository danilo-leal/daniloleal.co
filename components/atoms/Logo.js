import React from 'react';
import Link from 'next/link';

export default function Logo() {
  return (
    <a href="/">
      <button
        aria-label="Home"
        type="button"
        className="cursor-pointer h-8 w-8 rounded-full bg-draplin flex items-center justify-center hover:bg-gray-200  text-white hover:text-draplin transition-all"
      >
        <p className="font-bold text-center text-sm">DL</p>
      </button>
    </a>
  );
}
