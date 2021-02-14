import React from 'react';
import Selfie from '../atoms/Selfie';

export default function HomeHero() {
  return (
    <div className="pb-8">
      <Selfie />
      <h1 className="h1">Pleasure to have you!</h1>
      <h2 className="paragraph-1 mb-3">
        My name is
        <span className="font-medium text-gray-900 dark:text-gray-100 mx-1">
          Danilo Leal
        </span>
        and I'm an explorer and designer, in that particular order. I really put
        myself out there to understand things, how they are interrelated and
        connected - as is everything - to only then figure out how to give it
        some form, so we can experience it. I design to find the right
        direction.
      </h2>
      <p className="paragraph-1">
        👉 Currently designing products
        <a
          href="https://www.loggi.com"
          className="inline font-medium text-draplin hover:text-gray-900 dark:hover:text-white transition-all ml-1"
        >
          @Loggi
        </a>
        <br />
        🇧🇷 Based in São Paulo, Brazil.
      </p>
    </div>
  );
}
