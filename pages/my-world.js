import React from "react";
import { NextSeo } from "next-seo";
import AppBar from "../components/atoms/AppBar";
import BreadCrumb from "../components/atoms/BreadCrumb";
import CaseHeader from "../components/molecules/CaseHeader";
import CallOut from "../components/molecules/CallOut";
import Footer from "../components/molecules/Footer";
import Image from "next/image";
import MainLink from "../components/atoms/MainLink";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function MyWorld() {
  return (
    <div className="global-wrapper">
      <NextSeo
        title="my world - danilo leal"
        canonical="https://daniloleal.co/my-world"
        openGraph={{
          url: "https://daniloleal.co/my-world",
          title: "my world - danilo leal",
          images: [
            {
              url: "https://i.ibb.co/kX3CTf9/my-world.png",
              alt: "my world - danilo leal",
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
          pathNameTwo="My world"
          goToTwo="/my-world"
        />
        <CaseHeader
          title="My world"
          summary="This is what cool tech kids call a digital garden. It's a place for my creations to live, a safe outlet for expressing myself. Here's home on the internet."
        />
      </div>
      <div className="large-container">
        <div className="p-8 bg-gray-100 dark:bg-black rounded-md sm:grid sm:grid-cols-3 sm:gap-8 sm:items-center sm:justify-items-center">
          <div className="sm:mb-0 mb-4">
            <Zoom>
              <Image
                src="/images/sede1000.png"
                alt="Me using an iMac G3 back in the day."
                className="rounded-md object-fit"
                width={300}
                height={300}
                priority
              />
            </Zoom>
          </div>
          <div className="col-span-2 flex flex-col space-y-2">
            <p className="text-tiny uppercase tracking-wide font-semibold text-green-500">
              New album release
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex flex-col space-y-1">
                <h1 className="text-gray-700 dark:text-gray-500">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Quietest Friend
                  </span>{" "}
                  by sede
                </h1>
                <p className="paragraph-1">
                  It's been 4 years since I started sede, my instrumental
                  one-man-band project. Just finished recording the second and
                  latest album, called Quietest Friend. My best work so far for
                  sure. Take it for a spin!
                </p>
              </div>
              <MainLink
                string="Hear it on Spotify"
                path="https://open.spotify.com/album/6GPf7H9TUlJ5U7MneoLBub?si=cC1Z0iGlSkSi62j9RzO1Pw"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="default-container">
        <h1 className="h1">Design related</h1>
        <CallOut
          subjectLogo="/svgs/icon-image.svg"
          subjectName="Graphic Design"
          subjectSummary="I grew up in design by doing graphic. Logos, to whole branding packages to album cover designs. Seeing stuff being physical is feeling it for real."
          casePath="/my-world/graphic-design"
          linkString="See stuff"
        />
        <h1 className="h1">That's me inside your head</h1>
        <a
          href="https://www.youtube.com/watch?v=0IxYbx4nRCw&ab_channel=ResurrectionFest"
          className="text-tiny text-gray-500 hover:font-medium hover:text-draplin hover:ml-2">
          That's a NOFX reference!
        </a>
        <CallOut
          subjectLogo="/svgs/icon-globe.svg"
          subjectName="Thinking out loud"
          subjectSummary="That's just me ranting and rambling about stuff. My first personal blog in years using the internet. I feel like I'm using it right for the first time."
          casePath="/my-world/thinking"
          linkString="Explore my brain"
        />
        <CallOut
          subjectLogo="/svgs/icon-book.svg"
          subjectName="Book reviews"
          subjectSummary="Books are hard to read for me. These really shaped my thinking and my understanding of my place in this world."
          casePath="/my-world/book-reviews"
          linkString="Check 'em out"
        />
        <CallOut
          subjectLogo="/svgs/icon-disc.svg"
          subjectName="Album reviews"
          subjectSummary="Music is my second nature. I'll be going through some of these pieces trying to express what they mean to me."
          casePath="/my-world/album-reviews"
          linkString="Check 'em out"
        />
        <h1 className="h1">Music making</h1>
        <CallOut
          subjectLogo="/svgs/icon-volume.svg"
          subjectName="Sede"
          subjectSummary="One man band type of stuff."
          casePath="https://sede.bandcamp.com/album/quietest-friend"
          linkString="Hear the album"
        />
        <CallOut
          subjectLogo="/svgs/icon-volume.svg"
          subjectName="Flora Park"
          subjectSummary="This one is with some of my most special friends, where we dream together of being a hardcore/pop-punk band. We self produced and recorded our first album in 2017."
          casePath="http://bandaflorapark.bandcamp.com/album/chutando-nuvens"
          linkString="Hear the album"
        />
      </div>
      <Footer />
    </div>
  );
}
