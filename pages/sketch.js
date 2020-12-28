import React from 'react';
import AppBar from '../components/atoms/AppBar';
import Star from '../components/atoms/Star';

export default function Sketch() {
  return (
    <div className="global-wrapper">
      <AppBar goBackTo="/my-world" />
      <div className="large-container py-20">
        <Star />
      </div>
    </div>
  );
}

// className="grid sm:grid-cols-2 gap-6 sm:px-2 p-4"
