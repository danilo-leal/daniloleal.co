import React from 'react';
import IconsSocial from '../atoms/IconsSocial';

export default function Footer(props) {
  return (
    <div className="pt-5 pb-2 grid grid-flow-row justify-center w-full">
      <p className="pt-5 pb-5 text-xs font-medium text-center text-gray-700  dark:text-gray-200">
        danilo leal @ {props.year}
        <br /> •
      </p>
      <IconsSocial />
    </div>
  );
}
