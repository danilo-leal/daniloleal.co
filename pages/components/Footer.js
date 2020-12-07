import React from 'react';
import Divider from './Divider';
import IconsSocial from './IconsSocial';

export default function Footer() {
  return (
    <div className="pt-5 pb-5 grid grid-flow-row justify-center">
      <Divider />
      <p className="pt-5 pb-5 text-xs font-medium text-center text-gray-700  dark:text-gray-200">
        danilo leal @
        <br /> •
      </p>
      <IconsSocial />
    </div>
  );
}
