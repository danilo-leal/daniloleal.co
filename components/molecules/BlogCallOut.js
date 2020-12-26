import React from 'react';

export default function BlogCallOut(props) {
  return (
    <div className="py-2">
      <p className="text-gray-500 text-sm mb-2 dark:text-gray-400">
        {props.date}
      </p>
      <a href={props.path}>
        <h1 className="cursor-pointer mb-2 text-xl font-medium dark:text-white hover:text-draplin dark:hover:text-draplin">
          {props.title}
        </h1>
      </a>
    </div>
  );
}
