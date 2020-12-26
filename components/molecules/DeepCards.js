import React from 'react';
import MainLink from '../atoms/MainLink';

export default function DeepCards(props) {
  return (
    <div className="hover:bg-gray-50 dark:hover:bg-black transition-all rounded-lg p-8 border border-solid border-gray-200 dark:border-gray-800 grid space-y-3">
      <h2 className="h2">{props.title}</h2>
      <p className="paragraph-1">{props.description}</p>
      <MainLink string={props.deepLinkString} path={props.pathDeep} />
    </div>
  );
}
