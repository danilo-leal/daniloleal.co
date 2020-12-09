import React from 'react';
import Tags from '../atoms/Tags';

export default function HomeTags() {
  return (
    <div className="sm:max-w-lg pb-8 sm:grid sm:grid-cols-3 sm:gap-5 hidden">
      <Tags string="Product Design" />
      <Tags string="Product Strategy" />
      <Tags string="Design Systems" />
    </div>
  );
}
