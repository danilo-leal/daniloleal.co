import React from 'react';

export default function AlbumYearSeparator(props) {
  return (
    <div className="flex items-center space-x-4">
      <h2 className="text-gray-900 dark:text-gray-400">{props.year}</h2>
      <div className="w-full h-1 bg-gray-100 rounded-full dark:bg-black"></div>
    </div>
  );
}
