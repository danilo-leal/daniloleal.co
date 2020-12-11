import React from 'react';
import Link from 'next/link';

export default function BreadCrumb(props) {
  return (
    <div className="pt-4 pb-1 flex space-x-2">
      <Link href="/">
        <p className="cursor-pointer text-sm text-gray-400 dark:text-gray-600 hover:font-medium hover:text-gray-700 dark:hover:text-gray-300">
          {props.pathNameOne}
        </p>
      </Link>
      <Link href="/">
        <p className="cursor-pointer text-sm text-gray-400 dark:text-gray-600 hover:font-medium hover:text-gray-700 dark:hover:text-gray-300">
          {props.pathNameTwo}
        </p>
      </Link>
      <Link href="/">
        <p className="cursor-pointer text-sm text-gray-400 dark:text-gray-600 hover:font-medium hover:text-gray-700 dark:hover:text-gray-300">
          {props.pathNameThree}
        </p>
      </Link>
      <Link href="/">
        <p className="cursor-pointer text-sm text-gray-400 dark:text-gray-600 hover:font-medium hover:text-gray-700 dark:hover:text-gray-300">
          {props.pathNameFour}
        </p>
      </Link>
    </div>
  );
}
