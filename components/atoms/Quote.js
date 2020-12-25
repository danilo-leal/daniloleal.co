import React from 'react';

export default function Quote(props) {
  return (
    <div className="sm:w-96 sm:pl-4 pl-2 py-4 space-y-2">
      <div className="flex">
        <span className="dark:bg-gray-500 bg-gray-200 h-max w-1 rounded-full mr-4"></span>
        <p className="quote-text">{props.quote}</p>
      </div>
      <p className="paragraph-1">
        <a href={props.link} className="inline-link">
          {props.linkString}
        </a>
        {props.text}
      </p>
    </div>
  );
}
