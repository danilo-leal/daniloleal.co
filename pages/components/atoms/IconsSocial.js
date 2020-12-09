import React from 'react';
import Link from 'next/link';

export default function IconsSocial() {
  return (
    <div className="w-28 h-24 grid grid-cols-4 gap-2 align-middle justify-center">
      <Link href="/">
        <img
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d90e95b8bed67a2b070b5_icons%3A%20dribbble.svg"
          alt=""
        />
      </Link>
      <Link href="/">
        <img
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d90e986f4176e712184eb_icons%3A%20linkedin.svg"
          alt=""
        />
      </Link>
      <Link href="/">
        <img
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d90e92ca1f7c0030f0884_icons%3A%20twitter.svg"
          alt=""
        />
      </Link>
      <Link href="/">
        <img
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d90e986f41743c92184ea_icons%3A%20soundcloud.svg"
          alt=""
        />
      </Link>
    </div>
  );
}
