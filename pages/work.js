import React from "react";
import AppBar from "../components/atoms/AppBar";
import Footer from "../components/molecules/Footer";
import BreadCrumb from "../components/atoms/BreadCrumb";
import CaseHeader from "../components/molecules/CaseHeader";
import CallOut from "../components/molecules/CallOut";
import DisabledLink from "../components/atoms/DisabledLink";
import { NextSeo } from "next-seo";
import MainLink from "../components/atoms/MainLink";

export default function Work() {
  return (
    <div className="h-full dark:bg-blackish sm:pb-0 pb-10">
      <NextSeo
        title="work - danilo leal"
        canonical="https://daniloleal.co/work"
        openGraph={{
          url: "https://daniloleal.co/work",
          title: "work - danilo leal",
          images: [
            {
              url: "https://i.ibb.co/DQwN7QV/work.png",
              alt: "work - danilo leal",
              width: 1280,
              height: 720,
            },
          ],
        }}
      />
      <AppBar goBackTo="/" />
      <div className="default-container">
        <div className="default-container">
          <BreadCrumb
            pathNameOne="Home /"
            goToOne="/"
            pathNameTwo="Work"
            goToTwo="/"
          />
          <CaseHeader
            title="Work"
            summary="The tiny sprinkles of myself I've left out in some projects. Here's my take and history with each one of them."
          />
          <h1 className="h1">Headliners</h1>
          <div className="py-4 grid gap-8">
            <div className="flex items-start">
              <img
                src="/svgs/logo-loggi.svg"
                alt="Loggi Logo"
                className="pt-1 mr-6"
              />
              <div>
                <h1 className="mb-2 dark:text-white">Loggi</h1>
                <p className="paragraph-1 mb-4">
                  Still living in this one. Sometime soon!
                </p>
                <DisabledLink string="Read the story" />
              </div>
            </div>
          </div>
          <CallOut
            subjectLogo="/svgs/logo-ifood.svg"
            imgAlt="iFood Logo"
            subjectName="iFood"
            subjectSummary="Designed the new driver app from the ground up. Small team, challenging goals and huge impact. What a ride!"
            casePath="/cases/ifood"
            linkString="Read the story"
          />
          <CallOut
            subjectLogo="/svgs/logo-livia.svg"
            imgAlt="Nexa Digital Logo"
            subjectName="Livia Pro"
            subjectSummary="Being healthy is communicating rightfully. With Livia, we were tackling one of the most fundamental health care problem out there: communication."
            casePath="/cases/livia"
            linkString="Read the story"
          />
          <CallOut
            subjectLogo="/svgs/logo-rapiddo.svg"
            imgAlt="Rappido Entregas Logo"
            subjectName="Rapiddo Entregas"
            subjectSummary="One designer for the whole company. You know the drill. I did it all at Rapiddo. Great times. Apps, motion graphics, branding. Told ya!"
            casePath="/cases/rapiddo"
            linkString="Read the story"
          />
          <h1 className="h1">Side-gigs</h1>
          <div className="py-4 grid gap-8">
            <div className="flex items-start">
              <img
                src="/svgs/logo-coop.svg"
                alt="Coop's Logo"
                className="pt-1 mr-6"
              />
              <div>
                <h1 className="mb-2 dark:text-white">Coop</h1>
                <p className="paragraph-1 mb-4">
                  Coop is a streamlined financial organizer for you to follow
                  how much you've spent in comparison to what you've expected to
                  spend.
                </p>
                <div className="flex sm:space-x-3 space-y-2 sm:space-y-0 flex-col sm:flex-row">
                  <MainLink
                    string="See work in progress"
                    path="https://coop-two.vercel.app/"
                  />
                  <DisabledLink string="Read the story" />
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 grid gap-8">
            <div className="flex items-start">
              <img
                src="/svgs/logo-tailwind.svg"
                alt="TailwindCSS Logo"
                className="pt-1 mr-6"
              />
              <div>
                <h1 className="mb-2 dark:text-white">
                  Tailwind para Designers
                </h1>
                <p className="paragraph-1 mb-4">
                  A project dedicated to the portuguese speaking design
                  comunnity. I'll try to lay down the fundamentals about
                  TailwindCSS in a very easy way.
                </p>
                <div className="flex sm:space-x-3 space-y-2 sm:space-y-0 flex-col sm:flex-row">
                  <MainLink
                    string="See work in progress"
                    path="https://tailwind-para-designers-danilobleal.vercel.app/"
                  />
                  <DisabledLink string="Read the story" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
