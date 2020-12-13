import React from 'react';
import Link from 'next/link';

export default function SecondaryLink(props) {
  return (
    <a href={props.path}>
      <p className="cursor-pointer text-sm text-gray-500 hover:text-draplin">
        {props.string}
      </p>
    </a>
  );
}
