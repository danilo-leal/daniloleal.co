import React from 'react';
import Link from 'next/link';

export default function SecondaryLink(props) {
  return (
    <a href={props.path}>
      <p className="cursor-pointer text-sm font-medium text-gray-500 hover:text-draplin transition-all">
        {props.string}
      </p>
    </a>
  );
}
