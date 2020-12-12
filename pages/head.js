import React from 'react';
import Head from 'next/head';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Danilo Leal</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="title"
        />
      </Head>
      <style>
        :-moz-selection {((color = '#FFF'), (background = '#e57928'))}
        ::selection {((color = '#FFF'), (background = '#e57928'))}
      </style>
    </div>
  );
}
