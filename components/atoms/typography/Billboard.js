import React from 'react';

export default function Billboard(props) {
  return (
    <h1 className="font-bold text-5xl mb-3 text-blackish dark:text-white">
      {props.content}
    </h1>
  );
}
