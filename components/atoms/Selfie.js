import React from 'react';
import Image from 'next/image';

export default function Selfie() {
  return (
    <div>
      <a
        href="/about"
        className="h-16 w-16 rounded-full bg-gray-200 dark:bg-black overflow-auto flex items-end justify-center hover:bg-draplin dark:hover:bg-draplin transition-all cursor-pointer"
      >
        <Image
          src="/images/eu-nobg.png"
          alt="Picture of me in a red background."
          width={55}
          height={55}
          priority
        />
      </a>
    </div>
  );
}
