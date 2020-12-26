import React from 'react';
import P1 from '../../components/atoms/typography/P1';
import Link from 'next/link';

export default function AlbumHero(props) {
  return (
    <div className="flex flex-col">
      <div className="mb-6">
        <img
          className="h-64 w-full object-cover object-top rounded-lg opacity-70 hover:opacity-100 transition-opacity mb-12"
          src={props.albumCover}
          alt=""
        />
        <div className="flex flex-row items-center justify-between">
          <h1 className="billboard">{props.title}</h1>
          <a href={props.albumListenLink}>
            <div className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 dark:bg-black dark:hover:bg-draplin">
              <svg
                className="w-5 h-5 stroke-current text-blackish dark:text-gray-200"
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
          </a>
        </div>
        <P1 content={props.summary} />
      </div>
    </div>
  );
}
