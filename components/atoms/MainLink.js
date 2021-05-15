import React from "react";
import Link from "next/link";

export default function MainLink(props) {
  return (
    <a href={props.path} className="group">
      <p className="cursor-pointer font-medium text-draplin text-sm hover:text-gray-900 dark:hover:text-white transition-all flex items-center">
        {props.string}
        <span>
          <svg
            className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
      </p>
    </a>
  );
}
