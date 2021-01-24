import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

export default function Code(props) {
  return (
    <div className="font-mono text-sm">
      <CopyBlock
        text={props.code}
        language={props.language}
        showLineNumbers={false}
        theme={dracula}
        wrapLines
        codeBlock
        customStyle={{
          overflowY: 'scroll',
          borderRadius: '5px',
          fontSize: '0.85rem',
          padding: '4px',
        }}
      />
    </div>
  );
}
