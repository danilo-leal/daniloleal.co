import React from 'react';

export default function TableOfContents(props) {
  return (
    <div className="pt-24 sticky top-12">
      <div className="flex flex-col space-y-4">
        <p className="text-tiny uppercase tracking-widest font-medium text-gray-700 dark:text-white">
          Table of Contents
        </p>
        <a
          className="text-gray-500 hover:text-draplin cursor-pointer transition-all"
          href={props.linkHeading1}
        >
          {props.heading1}
        </a>
        <a
          className="text-gray-500 hover:text-draplin cursor-pointer transition-all"
          href={props.linkHeading2}
        >
          {props.heading2}
        </a>
        <a
          className="text-gray-500 hover:text-draplin cursor-pointer transition-all"
          href={props.linkHeading3}
        >
          {props.heading3}
        </a>
        <a
          className="text-gray-500 hover:text-draplin cursor-pointer transition-all"
          href={props.linkHeading4}
        >
          {props.heading4}
        </a>
        <a
          className="text-gray-500 hover:text-draplin cursor-pointer transition-all"
          href={props.linkHeading5}
        >
          {props.heading5}
        </a>
        <a
          className="text-gray-500 hover:text-draplin cursor-pointer transition-all"
          href={props.linkHeading6}
        >
          {props.heading6}
        </a>
        <a
          className="text-gray-500 hover:text-draplin cursor-pointer transition-all"
          href={props.linkHeading7}
        >
          {props.heading7}
        </a>
        <a
          className="text-gray-500 hover:text-draplin cursor-pointer transition-all"
          href={props.linkHeading8}
        >
          {props.heading8}
        </a>
      </div>
    </div>
  );
}
