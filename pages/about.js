import React from 'react';
import AppBar from './components/AppBar';

export default function About() {
  return (
    <body className="h-screen dark:bg-blackish">
      <AppBar />
      <div className="w-screen bg-gray-100 dark:bg-black">
        <div className="max-w-5xl m-auto">
          <div className="max-w-md h-64 flex flex-col align-center justify-center">
            <h1 className="font-bold text-5xl mb-3 text-blackish dark:text-white">
              About me
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <i>I am the master of my fate; I am the captain of my soul</i>
              <br /> ― Invictus by William Ernest Henley
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}
