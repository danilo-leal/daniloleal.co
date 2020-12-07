import React from 'react';

export default function HomeTags() {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-lg pb-8">
      <div className="py-3 bg-gray-50 dark:bg-black rounded-md">
        <p className="text-center text-tiny uppercase tracking-widest font-medium dark:text-gray-100">
          Product Design
        </p>
      </div>
      <div className="py-3 bg-gray-50 dark:bg-black rounded-md">
        <p className="text-center text-tiny uppercase tracking-widest font-medium dark:text-gray-100">
          Product Strategy
        </p>
      </div>
      <div className="py-3 bg-gray-50 dark:bg-black rounded-md">
        <p className="text-center text-tiny uppercase tracking-widest font-medium dark:text-gray-100">
          Design Systems
        </p>
      </div>
    </div>
  );
}
