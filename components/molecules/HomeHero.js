import React from "react";
import Selfie from "../atoms/Selfie";

export default function HomeHero() {
  return (
    <div className="pb-8">
      <Selfie />
      <h1 className="h1">Pleasure to have you!</h1>
      <h2 className="paragraph-1 mb-3">
        My name is{" "}
        <span className="font-medium text-gray-900 dark:text-gray-100">
          Danilo Leal
        </span>{" "}
        and I'm an explorer and designer, in that particular order. I seek depth
        at everything I do, always searching for clear understanding. My
        ultimate goal is to make a real impact following the principles that got
        me here: respect and honesty. Designing to find the right direction.
      </h2>
      <p className="paragraph-1">
        👉 Currently designing products
        <a
          href="https://material-ui.com/"
          className="inline font-medium text-draplin hover:text-gray-900 dark:hover:text-white transition-all ml-1">
          @Material-UI
        </a>
        <br />
        🇧🇷 Based in São Paulo, Brazil.
      </p>
    </div>
  );
}
