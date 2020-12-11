import React from 'react';

export default function Billboard(props) {
  return (
    <h1 className="font-medium text-5xl mb-4 text-blackish dark:text-white">
      {props.content}
    </h1>
  );
}
