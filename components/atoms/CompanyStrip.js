import React from 'react';
import Link from 'next/link';

export default function CompanyStrip(props) {
  return (
    <div className="pt-2 pb-2 flex items-center">
      <div>
        {props.currentCompany ? (
          <div className="h-2 w-2 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
        ) : (
          <div className="h-2 w-2 rounded-lg bg-draplin"></div>
        )}
      </div>
      <div className="block ml-6">
        <div className="flex space-x-2">
          <p className="text-gray-800 mb-1 font-medium dark:text-white">
            {props.company}
          </p>
          <a href={props.companySite}>
            <svg
              class="cursor-pointer w-4 h-4 stroke-current text-gray-500 mt-1 hover:text-draplin transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </div>
        <p className="text-sm text-gray-400">{props.period}</p>
      </div>
    </div>
  );
}
