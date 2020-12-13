import React from 'react';
import Link from 'next/link';

export default function MainLink(props) {
  return (
    <a href={props.path}>
      <p className="cursor-pointer font-medium text-draplin text-sm hover:text-gray-900 dark:hover:text-white">
        {props.string}
      </p>
    </a>
  );
}
