import React from 'react';
import Link from 'next/link';
import NavBar from '../components/atoms/NavBar';
import Footer from '../components/templates/Footer';
import JobTimeline from '../components/atoms/timeline/JobTimeline';
import Divider from '../components/atoms/Divider';
import Billboard from '../components/atoms/typography/Billboard';
import H2 from '../components/atoms/typography/H2';
import P1 from '../components/atoms/typography/P1';
import IconsSocial from '../components/atoms/IconsSocial';

export default function About() {
  return (
    <div className="h-full dark:bg-blackish">
      <NavBar />
      <div className="w-screen bg-gray-100 dark:bg-black">
        <div className="max-w-5xl m-auto px-4">
          <div className="max-w-md h-64 flex flex-col align-center justify-center py-5">
            <Billboard content="About me" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <i>I am the master of my fate; I am the captain of my soul</i>
              <br /> ― Invictus by William Ernest Henley
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-2xl m-auto py-10 px-4">
        <div className="bg-gray-50 dark:bg-black rounded-lg p-5 grid sm:grid-cols-3 grid-col-auto gap-4 sm:gap-10">
          <div class="">
            <p className="text-gray-400 mb-2 dark:text-gray-600">
              In need for a CV?
            </p>
            <Link href="/">
              <p className="cursor-pointer font-semibold text-draplin hover:text-gray-900 dark:hover:text-white">
                There you go!
              </p>
            </Link>
          </div>
          <div>
            <p className="text-gray-400 mb-2 dark:text-gray-600">
              You can find me at:
            </p>
            <IconsSocial />
          </div>
          <div>
            <p className="text-gray-400 mb-2 dark:text-gray-600">
              Want to reach out?
            </p>
            <p className="text-gray-900 dark:text-gray-200">
              daniloleal09@gmail.com
            </p>
          </div>
        </div>
        <div className="pt-5 pb-5 flex flex-col space-y-3">
          <H2 content="On building products" />
          <P1
            content="I like to think about the concept of a product by being more than
              a tradable good in a too capitalistic environment. A product is
              the packaged result of someone's take in some problem. And I like
              to design good products. Good not only for me, of course, but to
              whom else will consume it, use it and enjoy it. There's so much in
              order to do that, from strategy to deployment. I'm someone who
              dives real deep in every step, from research to shaping it out.
              And I nerd it out in all of them."
          />
          <H2 content="Change-log" />
          <P1 content="Most of my career up to this point consists in working with complex systems in logistics business type of setting. I've been really enjoying doing these mostly because it's a daily exercise of thinking holistically about the environment." />
        </div>
        <JobTimeline />
      </div>
      <Divider />
      <Footer year="2020" />
    </div>
  );
}
