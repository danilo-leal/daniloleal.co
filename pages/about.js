import React from "react";
import { NextSeo } from "next-seo";
import AppBar from "../components/atoms/AppBar";
import BreadCrumb from "../components/atoms/BreadCrumb";
import Footer from "../components/molecules/Footer";
import CaseHeader from "../components/molecules/CaseHeader";
import JobTimeline from "../components/molecules/JobTimeline";
import AboutCardInfo from "../components/molecules/AboutCardInfo";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

export default function About() {
  return (
    <div className="global-wrapper">
      <NextSeo
        title="about me - danilo leal"
        canonical="https://daniloleal.co/about"
        openGraph={{
          url: "https://daniloleal.co/about",
          title: "about me - danilo leal",
          images: [
            {
              url: "https://i.ibb.co/hfd4txY/about.png",
              alt: "about me - danilo leal",
              width: 1280,
              height: 720,
            },
          ],
        }}
      />
      <AppBar goBackTo="/" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="About me"
          goToTwo="/about"
        />
        <CaseHeader
          title="About me"
          summary={[
            <i>"I am the master of my fate, I am the captain of my soul"</i>,
            "― Invictus by William Ernest Henley",
          ]}
        />
      </div>
      <div className="default-container">
        <AboutCardInfo />
        <Zoom>
          <Image
            src="/images/kid-me.png"
            alt="Me using an iMac G3 back in the day."
            className="img sm:h-96 h-2/4 object-cover"
            width={800}
            height={600}
            priority
          />
        </Zoom>
        <p className="subtitle-text">
          Hope you notice the classic iMac G3 overthere. Lucky little kid.
        </p>
        <h1 className="h1">First chapters</h1>
        <p className="paragraph-1">
          I guess it all started with mom and dad naming me after some popular
          Brazilian MPB dude. Somehow, from day one, music, art and expression
          were there. My folks always cherished and worked with arts, media, and
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
        <h1 className="h1">Choosing Design</h1>
        <p className="paragraph-1">
          Looking back, it's hard to even say I chose design. I'm more inclined
          to think that design chose me. There are so many things I can relate
          to the act of designing that it's even harder to define what that
          really means. Back in school, I was too interested in history and
          social sciences in general. It's a non-stoppable curiosity to
          understand why we as humans behave in certain ways. <br />
          <br />
          What I eventually learned from a bunch of failed school exams was that
          whenever I found the right proper amount of interest to dig really
          hard at a certain topic, I'd probably succeed. That's when I noticed
          my thing was figuring why to behaviours, to human relationship with
          other humans and stuff around us. <br />
          <br />
          By the time I had to figure out what to do with life and what college
          to enroll in, I already was creating stuff for quite a while. At that
          time, it was mostly connected to an artistic expression setting, as
          most designers may start out with. At first, design seems very
          art-ish. The designer, at a small company, may be known as the visual
          person. The one who would know how to draw something absurd, randomly,
          in the fly. <br />
          <br />
          I eventually enrolled in a bachelor of Social Sciences at UFSCar, a
          public university in Brazil. There, stuff started to gain some really
          complex layers of academic gimmicks. There were so many cool topics
          being discussed there that didn't seem to reach the general public and
          thus not affecting every day life. That really bugged me out. My
          thinking was somehow inclined to believe we have to work ourselves out
          to make some difference in somebody else's life. <br />
          <br />
          That's when I decided to drop out of it, even though the subjects
          discussed there being of my very interest to this day. Structural
          anthropology and sociology are the fundamentals of design and human
          behavior. And that started to clear the pathway to how I eventually
          merged somewhat of artistic expression with ethnography-ish thinking.
          That led up to... design. <br />
          <br />
          Those days, I try to bond all of this reasoning to designing
          experiences. This may sound a bit overused but when you think hard
          about what actually is an experience, you see that everything is how
          it is because of how it was designed. The design always tells you
          stories about who designed, their motives, their beliefs and
          intentions. Sometimes, it's hard to point out who, but how. I like to
          bring back the fundamental concept that designing is giving form and
          function to abstract stuff. And I like simple and clear things.
        </p>
      </div>
      <div className="large-container">
        <Image
          src="/images/cajon.jpeg"
          alt="Me and my beloved Carina and the monumental Cajon del Maipo mountains."
          className="img"
          width={800}
          height={600}
        />
        <p className="subtitle-text sm:p-0 px-4">
          Me and my beloved Carina and the monumental Cajon del Maipo mountains.
        </p>
      </div>
      <div className="default-container">
        <h1 className="h1">On building products</h1>
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
        <h1 className="h1">Change-log</h1>
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
