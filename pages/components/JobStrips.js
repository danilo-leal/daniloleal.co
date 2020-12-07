import React from 'react';
import Link from 'next/link';

export default function JobStrips() {
  return (
    <div className="pt-8 grid gap-8">
      <h1 className="mb-2 dark:text-white">Selected works</h1>
      <div className="flex items-start">
        <img
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d90dfd2e0670331b10724_logos%3A%20ifood.svg"
          alt=""
          className="pt-2 mr-6"
        />
        <div>
          <h1 className="mb-2 dark:text-white">iFood</h1>
          <p className="text-gray-500 text-sm mb-4 dark:text-gray-400">
            Designed the new driver app from the ground up. Small team,
            challenging goals and huge impact. A product that is very close to
            my heart. What a ride!
          </p>
          <Link href="/">
            <p className="cursor-pointer font-semibold text-draplin text-sm hover:text-gray-900 dark:hover:text-white">
              Read the story
            </p>
          </Link>
        </div>
      </div>
      <div className="flex items-start">
        <img
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c2ee8b26f2a64d7237f60_nexa-logo.svg"
          alt=""
          className="pt-2 mr-6"
        />
        <div>
          <h1 className="mb-2 dark:text-white">Livia Pro</h1>
          <p className="text-gray-500 text-sm mb-4 dark:text-gray-400">
            Being healthy is communicating rightfully. With Livia, we were
            tackling one of the most fundamental health care problem out there:
            communication.
          </p>
          <Link href="/">
            <p className="cursor-pointer font-semibold text-draplin text-sm hover:text-gray-900 dark:hover:text-white">
              Read the story
            </p>
          </Link>
        </div>
      </div>
      <div className="flex items-start">
        <img
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d90dfd2e06767b9b1072a_logos%3A%20rapiddo.svg"
          alt=""
          className="pt-2 mr-6"
        />
        <div>
          <h1 className="mb-2 dark:text-white">Rapiddo Entregas</h1>
          <p className="text-gray-500 text-sm mb-4 dark:text-gray-400">
            One designer for the whole company. You know the drill. I did it all
            at Rapiddo. Great times. Apps, motion graphics, branding. I told
            you!
          </p>
          <Link href="/">
            <p className="cursor-pointer font-semibold text-draplin text-sm hover:text-gray-900 dark:hover:text-white">
              Read the story
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
