import React from 'react';
import Link from 'next/link';

export default function CaseInfo(props) {
  return (
    <div className="bg-gray-50 dark:bg-black rounded-lg p-5 grid sm:grid-cols-2 grid-col-auto gap-4 sm:gap-6">
      <div className="">
        <p className="text-gray-400 mb-2 dark:text-gray-600 text-sm">Role</p>
        <p className="text-gray-900 dark:text-gray-200 text-sm">{props.role}</p>
      </div>
      <div>
        <p className="text-gray-400 mb-2 dark:text-gray-600 text-sm ">Period</p>
        <p className="text-gray-900 dark:text-gray-200 text-sm">
          {props.period}
        </p>
      </div>
      <div>
        <p className="text-gray-400 mb-2 dark:text-gray-600 text-sm">Stack</p>
        <p className="text-gray-900 dark:text-gray-200 text-sm">
          {props.stack}
        </p>
      </div>
      <div>
        <p className="text-gray-400 mb-2 dark:text-gray-600 text-sm">
          Cool links
        </p>
        <p className="text-gray-900 dark:text-gray-200 text-sm">
          {props.links}
        </p>
      </div>
    </div>
  );
}
