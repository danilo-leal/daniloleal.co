import React from 'react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <div className="h-8 w-8 rounded-full bg-draplin flex items-center justify-center hover:bg-gray-200  text-white  hover:text-draplin">
        <p className="font-bold text-center text-sm">DL</p>
      </div>
    </Link>
  );
}
