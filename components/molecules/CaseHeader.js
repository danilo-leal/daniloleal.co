import React from 'react';

export default function CaseHeader(props) {
  return (
    <div className="mb-6">
      <h1 className="billboard">{props.title}</h1>
      <p className="paragraph-1 mb-4">{props.summary}</p>
    </div>
  );
}
