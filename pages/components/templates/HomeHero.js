import React from 'react';
import Link from 'next/link';
import H1 from '../atoms/typography/H1';

export default function HomeHero() {
  return (
    <div className="pb-8">
      <img
        src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d912f2ca1f72dbc0f0c19_%3Aeu.png"
        alt=""
        className="h-14 w-14 mb-8"
      />
      <H1 content="Pleasure to have you!"></H1>
      <p className="text-gray-500 text-sm mb-4 dark:text-gray-400">
        I'm an explorer and designer, in that particular order. I really put
        myself out there to understand things, how they are inter related and
        connected - as is everything - to only then figure out how to give it
        some form, so we can experience it. I design in order to find the right
        direction.
      </p>
      <p className="text-gray-500 text-sm dark:text-gray-400">
        👉 Currently designing products
        <span className="cursor-pointer ml-1">
          <Link href="https://www.loggi.com">
            <p className="inline font-semibold text-draplin hover:text-gray-900 dark:hover:text-white">
              @Loggi
            </p>
          </Link>
        </span>
        <br />
        🇧🇷 Based in São Paulo, Brazil.
      </p>
    </div>
  );
}
