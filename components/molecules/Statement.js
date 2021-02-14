import React from 'react';

export default function Statement(props) {
  return (
    <div className="rounded-lg p-8 border border-solid border-gray-200 dark:border-gray-800 ">
      <p className="text-tiny text-center uppercase font-semibold tracking-wider text-gray-500 mb-2">
        {props.title}
      </p>
      <p className="paragraph-1 text-center">{props.description}</p>
    </div>
  );
}
