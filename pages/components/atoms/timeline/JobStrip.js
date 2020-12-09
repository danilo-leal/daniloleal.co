import React from 'react';

export default function JobStrip(prop) {
  return (
    <div className="pt-2 pb-2 flex items-center">
      <div>
        {prop.currentCompany ? (
          <div className="h-2 w-2 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
        ) : (
          <div className="h-2 w-2 rounded-lg bg-draplin"></div>
        )}
      </div>
      <div className="block ml-6">
        <p className="text-gray-800 font-medium mb-2 dark:text-white">
          {prop.company}
        </p>
        <p className="text-sm text-gray-400">
          Since
          <span className="ml-1">{prop.period}</span>
        </p>
      </div>
    </div>
  );
}
