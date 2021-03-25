import React from "react";
import Link from "next/link";

export default function DisabledLink(props) {
  return (
    <a href={props.path}>
      <p className="cursor-not-allowed font-medium text-sm text-gray-300 hover:text-gray-400 dark:text-gray-700  transition-all">
        {props.string}
      </p>
    </a>
  );
}
