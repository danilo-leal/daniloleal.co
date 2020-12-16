import React from 'react';

export default function Tags(props) {
  return (
    <div className="py-3 bg-gray-50 dark:bg-black rounded-md">
      <p className="text-center text-tiny uppercase tracking-widest font-medium dark:text-gray-100 ">
        {props.string}
      </p>
    </div>
  );
}
