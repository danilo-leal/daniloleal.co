import React from 'react';
import AppBar from '../components/atoms/AppBar';
import Stars from '../components/atoms/Star';

export default function RatingDemo() {
  return (
    <div className="global-wrapper">
      <AppBar goBackTo="/my-world" />
      <div className="default-container">
        <Stars />
      </div>
    </div>
  );
}
