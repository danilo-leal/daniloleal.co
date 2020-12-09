import React from 'react';
import Link from 'next/link';

export default function JobStrips(props) {
  return (
    <div className="pt-8 grid gap-8">
      <div className="flex items-start">
        <img
          src={props.companyLogo}
          alt={props.companyImgName}
          className="pt-1 mr-6"
        />
        <div>
          <h1 className="mb-2 dark:text-white">{props.companyName}</h1>
          <p className="text-gray-500 text-sm mb-4 dark:text-gray-400">
            {props.jobSummary}
          </p>
          <Link href="/">
            <p className="cursor-pointer font-semibold text-draplin text-sm hover:text-gray-900 dark:hover:text-white">
              Read the story
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
