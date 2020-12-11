import React from 'react';
import Billboard from '../atoms/typography/Billboard';
import P1 from '../atoms/typography/P1';

export default function CaseHeader(props) {
  return (
    <div className="mb-6">
      <Billboard content={props.title} />
      <P1 content={props.summary} />
    </div>
  );
}
