import React from 'react';
import Link from 'next/link';

export default function SecondaryLink(props) {
  return (
    <Link href={props.path}>
      <p className="cursor-pointer text-sm text-gray-400 hover:text-draplin">
        {props.string}
      </p>
    </Link>
  );
}
