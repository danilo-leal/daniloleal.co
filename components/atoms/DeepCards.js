import React from 'react';
import MainLink from './MainLink';
import H2 from './typography/H2';

export default function DeepCards(props) {
  return (
    <div className="hover:bg-gray-50 dark:hover:bg-black transition-all rounded-lg p-8 border border-solid border-gray-200 dark:border-gray-800 grid space-y-3">
      <H2 content={props.title} />
      <p className="paragraph-1">{props.description}</p>
      <MainLink string={props.deepLinkString} path="/" />
    </div>
  );
}
