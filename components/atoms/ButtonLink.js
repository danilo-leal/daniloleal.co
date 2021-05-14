import React from "react";

export default function ButtonLink(props) {
  return (
    <a
      className="cursor-pointer mt-8 p-4 bg-gray-50 dark:bg-black hover:bg-orange-100 dark:hover:bg-draplin hover:shadow-sm rounded-md flex justify-center font-medium text-draplin text-sm hover:text-gray-900 dark:hover:text-white transition-all"
      href={props.path}>
      <p>{props.string}</p>
    </a>
  );
}
