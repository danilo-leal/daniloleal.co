import React from 'react';
import Link from 'next/link';

export default function BreadCrumb(props) {
  return (
    <div className="pt-20 pb-1 flex space-x-2">
      <a href={props.goToOne}>
        <p className="cursor-pointer text-sm text-gray-400 dark:text-gray-600 hover:font-medium hover:text-gray-700 dark:hover:text-gray-300">
          {props.pathNameOne}
        </p>
      </a>
      <a href={props.goToTwo}>
        <p className="cursor-pointer text-sm text-gray-400 dark:text-gray-600 hover:font-medium hover:text-gray-700 dark:hover:text-gray-300">
          {props.pathNameTwo}
        </p>
      </a>
      <a href={props.goToThree}>
        <p className="cursor-pointer text-sm text-gray-400 dark:text-gray-600 hover:font-medium hover:text-gray-700 dark:hover:text-gray-300">
          {props.pathNameThree}
        </p>
      </a>
      <a href={props.goToFour}>
        <p className="cursor-pointer text-sm text-gray-400 dark:text-gray-600 hover:font-medium hover:text-gray-700 dark:hover:text-gray-300">
          {props.pathNameFour}
        </p>
      </a>
    </div>
  );
}
