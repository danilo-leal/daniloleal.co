import React from 'react';
import Link from 'next/link';
import AppBar from '../components/atoms/AppBar';
import BreadCrumb from '../components/atoms/BreadCrumb';
import Footer from '../components/templates/Footer';
import CaseHeader from '../components/templates/CaseHeader';
import JobTimeline from '../components/atoms/timeline/JobTimeline';
import IconsSocial from '../components/atoms/IconsSocial';
import H1 from '../components/atoms/typography/H1';

export default function About() {
  return (
    <div className="h-full dark:bg-blackish">
      <AppBar goBackTo="/" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="About /"
          goToTwo="/about"
          pathNameThree=""
          pathNameFour=""
        />
        <CaseHeader
          title="About me"
          summary="I am the master of my fate; I am the captain of my soul
          ― Invictus by William Ernest Henley"
        />
      </div>
      <div className="default-container">
        <div className="bg-gray-50 dark:bg-black rounded-lg p-5 grid sm:grid-cols-3 grid-col-auto gap-4 sm:gap-2">
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
        <H1 content="First chapters" />
        <p className="paragraph-1">
          I guess it all started with mom and dad naming me after some popular
          brazilian MPB dude. Somehow, from day one, music, art and expression
          was there. My folks always cherished and worked with arts, media and
          technology. Because of that, new tech gadgets were commonly around
          when I was only a kiddo. Giving form to things became a living need.
          <br />
          <br />
          If you are a designer reading up, you might have started like me:
          drawing. Most designers found themselves in pen and paper. I used to
          spend hours after school trying to replicate characters from cartoons
          I watched. Countless papers, lots of colours, lots of rubber dirt.
          Technology naturally boosted the capacity of creating and I followed
          that boat very early on.
        </p>
        <H1 content="Choosing design" />
        <p className="paragraph-1">
          Looking back, it's hard to even say I chose design. I'm more inclined
          to think that design chose me. There's so many things I can relate to
          the act of designing that it's even harder to define what that really
          means. Back in school, I was too interested in history and social
          sciences in general. It's a non-stoppable curiosity to understand why
          we as humans behave certain ways. <br />
          <br />
          What I eventually learned from a bunch of failed school exams was that
          whenever I found the right proper amount of interest to dig really
          hard at a certain topic, I'd probably succeed. That's when I noticed
          my thing was figuring why to behaviours, to human relationship with
          other humans and stuff around us. <br />
          <br />
          By the time I had to figure out what to do with life and what college
          to enroll in, I already was creating stuff from quite a while. At that
          time, it was mostly connected to an artistic expression setting, as
          most designers may start out with. At first, design seems very
          art-ish. The designer, at a small company, may be known as the visual
          person. The one who would know how to draw something absurd, randomly,
          in the fly. <br />
          <br />
          I eventually enrolled at a bachelors of Social Sciences at UFSCar, a
          public university in Brazil. There, stuff started to gain some really
          complex layers of academic gimmicks. There was so many cool topics
          being discussed there that didn't seem to reach the general public and
          thus not affecting every day life. That really bugged me out. My
          thinking was somehow inclined to believe we have to work ourselves out
          to make some difference in somebody else's life. <br />
          <br />
          That's when I decided to drop out of it, even though the subjects
          discussed there being of my very interest to this day. Structural
          anthropology and sociology are the fundamentals of design and human
          behavior. And that started to clear the pathway to how I eventually
          merged somewhat of artistic expression with etnography-ish thinking.
          That, led up to... design. <br />
          <br />
          Those days, I try to bond all of this reasoning to designing
          experiences. This may sound a bit over used but when you think hard
          about what actually is an experience, you see that everything is how
          it is because of how it was designed. The design always tells you
          stories about who designed, their motives, their beliefs and
          intentions. Sometimes, it's hard to point out who, but how. I like to
          bring back the fundamental concept that designing is giving form and
          function to abstract stuff. And I like simple and clear things.
        </p>
      </div>
      <div className="large-container">
        <img
          className="img"
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5ecb6059650fb5d020eb5d07_7FB731A2-97F1-4028-A2C0-6B2AE3909B3B-p-1600.jpeg"
          alt=""
        />
        <p className="subtitle-text sm:p-0 px-4">
          Me and my beloved Carina and the monumental Cajon del Maipo mountains.
        </p>
      </div>
      <div className="default-container">
        <H1 content="On building products" />
        <p className="paragraph-1">
          I like to think about the concept of a product by being more than a
          tradable good in a too capitalistic environment. A product is the
          packaged result of someone's take in some problem. And I like to
          design good products. Good not only for me, of course, but to whom
          else will consume it, use it and enjoy it. <br />
          <br />
          There's so much in order to do that, from strategy to deployment. I'm
          someone who dives real deep in every step, from research to shaping it
          out. And I nerd it out in all of them.
        </p>
        <H1 content="Change-log" />
        <p className="paragraph-1">
          Most of my career up to this point consists in working with complex
          systems in logistics business type of setting. I've been really
          enjoying doing these mostly because it's a daily exercise of thinking
          holistically about the environment.
        </p>
        <JobTimeline />
      </div>
      <Footer />
    </div>
  );
}
