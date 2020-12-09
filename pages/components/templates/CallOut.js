import React from 'react';
import Link from 'next/link';
import MainLink from '../atoms/MainLink';
import H1 from '../atoms/typography/H1';

export default function CallOut(props) {
  return (
    <div className="pt-8 grid gap-8">
      <div className="flex items-start">
        <img
          src={props.subjectLogo}
          alt={props.subjectImgName}
          className="pt-1 mr-6"
        />
        <div>
          <h1 className="mb-2 dark:text-white">{props.subjectName}</h1>
          <p className="text-gray-500 text-sm mb-4 dark:text-gray-400">
            {props.subjectSummary}
          </p>
          <MainLink string="Read the story" path="/" />
        </div>
      </div>
    </div>
  );
}
