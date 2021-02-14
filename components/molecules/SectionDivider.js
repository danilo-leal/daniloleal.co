import React from 'react';

export default function SectionDivider(props) {
  return (
    <div className="text-center grid grid-cols-3 gap-2 items-center py-8">
      <div className="w-full h-0.5 bg-gray-100 dark:bg-black"></div>
      <div>
        <p className="text-tiny uppercase font-semibold tracking-wider text-gray-500">
          Part {props.part}
        </p>
        <p className="text-code uppercase tracking-wide font-medium text-draplin">
          {props.section}
        </p>
      </div>
      <div className="w-full h-0.5 bg-gray-100 dark:bg-black"></div>
    </div>
  );
}
