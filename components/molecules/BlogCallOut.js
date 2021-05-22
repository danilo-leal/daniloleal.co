import React from "react";

export default function BlogCallOut(props) {
  return (
    <div className="py-2">
      <p className="text-gray-500 text-sm mb-2 dark:text-gray-400">
        {props.date}
      </p>
      <a href={props.path} className="group">
        <h1 className="cursor-pointer mb-2 text-xl font-medium dark:text-white hover:text-draplin dark:hover:text-draplin flex items-center">
          {props.title}
        </h1>
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
      </a>
    </div>
  );
}
