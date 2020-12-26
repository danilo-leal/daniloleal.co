import React from 'react';
import IconsSocial from '../atoms/IconsSocial';

export default function AboutCardInfo() {
  return (
    <div className="bg-gray-50 dark:bg-black rounded-lg p-5 grid sm:grid-cols-3 grid-col-auto gap-4 sm:gap-2">
      <div>
        <p className="text-gray-400 mb-2 dark:text-gray-600">
          In need for a CV?
        </p>
        <a href="https://docs.google.com/document/d/1xxVqQ4S5SjoD3bXTdXZm0msg8MOpZRG3xPS_y6NNEAk/edit">
          <p className="cursor-pointer font-medium text-draplin hover:text-gray-900 dark:hover:text-white transition-all">
            There you go!
          </p>
        </a>
      </div>
      <div>
        <p className="text-gray-400 mb-2 dark:text-gray-600">
          You can find me at:
        </p>
        <IconsSocial />
      </div>
      <div>
        <p className="text-gray-400 mb-2 dark:text-gray-600">
          Want to reach out?
        </p>
        <p className="text-gray-900 dark:text-gray-200">
          daniloleal09@gmail.com
        </p>
      </div>
    </div>
  );
}
