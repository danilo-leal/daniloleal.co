import React from 'react';
import MainLink from '../atoms/MainLink';

export default function CallOut(props) {
  return (
    <div className="py-4 grid gap-8">
      <div className="flex items-start">
        <img src={props.subjectLogo} alt={props.imgAlt} className="pt-1 mr-6" />
        <div>
          <h1 className="mb-2 dark:text-white">{props.subjectName}</h1>
          <p className="paragraph-1 mb-4">{props.subjectSummary}</p>
          <MainLink string={props.linkString} path={props.casePath} />
        </div>
      </div>
    </div>
  );
}
