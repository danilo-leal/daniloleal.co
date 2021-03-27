import React from "react";
import AppBar from "../components/atoms/AppBar";
import Footer from "../components/molecules/Footer";
import { NextSeo } from "next-seo";

export default function ComingSoon() {
  return (
    <div className="h-full dark:bg-blackish sm:pb-0 pb-10">
      <NextSeo
        title="coming soon - danilo leal"
        canonical="https://daniloleal.co/coming-soon"
        openGraph={{
          url: "https://daniloleal.co/coming-soon",
          title: "coming soon - danilo leal",
          images: [
            {
              url: "https://i.ibb.co/D8W5C7c/coming-soon.png",
              alt: "coming soon - danilo leal",
              width: 1280,
              height: 720,
            },
          ],
        }}
      />
      <AppBar goBackTo="/" />
      <div className="default-container">
        <div className="h-screen flex flex-col items-center justify-center pb-24">
          <svg
            className="w-16 h-16 stroke-current text-draplin"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.4"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.4"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            ></path>
          </svg>
          <h1 className="h1">Content coming soon!</h1>
          <p className="paragraph-1 text-center max-w-md">
            Hey! Glad you've reached here. I'll understand it as interest in the
            mess that is my mind. I hope to see you return whenever I start
            writing my thoughts out.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
