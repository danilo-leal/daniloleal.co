import React from 'react';

export default function AlbumCard(props) {
  return (
    <div className="border border-gray-200 rounded-lg transition-all hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black">
      <img
        className="h-56 w-full object-cover object-top rounded-t-lg opacity-60 hover:opacity-100 transition-opacity"
        src={props.albumCover}
        alt=""
      />
      <div className="p-4 flex items-center justify-between">
        <div>
          <h1 className="font-bold dark:text-white">{props.albumName}</h1>
          <p className="text-sm text-gray-500">
            {props.bandName} • {props.albumYear}
          </p>
        </div>
        <div className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-700">
          <svg
            class="w-5 h-5 stroke-current text-blackish dark:text-gray-200"
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
        </div>
      </div>
    </div>
  );
}
