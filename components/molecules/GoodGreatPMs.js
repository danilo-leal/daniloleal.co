import React from "react";

export default function GoodVSGreat(props) {
  const { index, good, great } = props;
  return (
    <div className="relative py-4">
      <div className="absolute h-6 w-6 bg-draplin flex items-center justify-center font-bold text-tiny text-white rounded-full -ml-2 -my-2 z-10">
        {index}
      </div>
      <div className="grid sm:grid-cols-2 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black  divide-y sm:divide-y-0 sm:divide-x dark:divide-gray-700 ">
        <div className="p-8">
          <p className="paragraph-1">
            <span className="px-1 bg-orange-100 dark:bg-orange-300 rounded text-blackish mr-1 font-medium">
              Good PMs
            </span>
            {good}
          </p>
        </div>
        <div className="p-8">
          <p className="paragraph-1">
            <span className="px-1 bg-green-100 dark:bg-green-300 rounded text-blackish mr-1 font-medium">
              Great PMs
            </span>
            {great}
          </p>
        </div>
      </div>
    </div>
  );
}
