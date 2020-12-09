import React from 'react';
import Link from 'next/link';

export default function SecondaryLink(prop) {
  return (
    <Link href={prop.path}>
      <p className="cursor-pointer text-sm text-gray-400 hover:text-draplin">
        {prop.string}
      </p>
    </Link>
  );
}
