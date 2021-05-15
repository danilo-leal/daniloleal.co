import React, { useState } from "react";
import AppBar from "../components/atoms/AppBar";
import SecondaryLink from "../components/atoms/SecondaryLink";

export default function Sketch() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <div className="global-wrapper">
      <AppBar goBackTo="/my-world" />
      <div className="default-container">
        <div className="p-16">
          <button
            className="p-2 border border-gray-300 dark:border-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-black transition-all"
            onClick={toggleIsOpen}>
            <svg
              className="w-5 h-5 stroke-current dark:text-gray-300 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
            </svg>
          </button>
          <div
            className={
              isOpen
                ? "m-2 border border-gray-300 dark:border-gray-700 shadow-md rounded w-1/3 hover:shadow-lg transition-all flex flex-col space-y-1"
                : "hidden"
            }>
            <div className="p-4 hover:bg-gray-100 dark:hover:bg-black transition-all">
              <SecondaryLink string="My world" />
            </div>
            <div className="p-4 hover:bg-gray-100 dark:hover:bg-black transition-all">
              <SecondaryLink string="About me" />
            </div>
          </div>
          <div
            className={isOpen ? "p-4 bg-orange-100 rounded w-full" : "hidden"}>
            Alert aqui.
          </div>
        </div>
        <div className="">
          <details>
            <summary className="p-4 bg-gray-100 rounded-lg font-medium cursor-pointer hover:bg-gray-200 transition-all">
              Click me to see more details
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum
              perferendis eius. Adipisci velit et similique earum quas illo odio
              rerum optio, quis, expedita assumenda enim dicta aliquam porro
              maxime minima sed a ullam, aspernatur corporis.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
