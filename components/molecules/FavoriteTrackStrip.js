import React from 'react';

export default function FavoriteTrackStrip(props) {
  return (
    <div className="flex items-center">
      <p className="text-tiny font-bold text-draplin">{props.order}</p>
      <div className="ml-6">
        <div className="flex space-x-2 items-center">
          <div className="flex items-end space-x-2">
            <p className="font-medium text-gray-800 dark:text-white">
              {props.songTtitle}
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-600">
              {props.songLength}
            </p>
          </div>
          <a href={props.songLink}>
            <svg
              class="cursor-pointer w-4 h-4 stroke-current text-gray-500 hover:text-draplin transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
