import React from "react";
import AppBar from "../components/atoms/AppBar";
import Footer from "../components/molecules/Footer";
import BreadCrumb from "../components/atoms/BreadCrumb";
import CaseHeader from "../components/molecules/CaseHeader";
import WorkCard from "../components/molecules/WorkCard";
import SideGigCard from "../components/molecules/SideGigCard";
import DisabledLink from "../components/atoms/DisabledLink";
import data from "../data/work/data";
import side from "../data/work/side";
import { NextSeo } from "next-seo";

export default function Work() {
  return (
    <div className="global-wrapper">
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
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="Work"
          goToTwo="/work"
        />
        <CaseHeader
          title="Work"
          summary="The tiny sprinkles of myself I've left out in some projects. Here's my take on each one of them."
        />
      </div>
      <div className="default-container">
        <h1 className="h1">Headliners</h1>
      </div>
      <div className="large-container">
        <div className="work-grid">
          <div className="border border-gray-200 rounded-lg transition-all hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black opacity-80 hover:opacity-100 relative">
            <div className="h-8 w-8 rounded-full bg-blue-500 flex flex-col items-center justify-center shadow-md absolute inset-y-4 right-0 mr-4">
              <img src="/svgs/white/wlogo-loggi.svg" alt="Loggi's logo" />
            </div>
            <div className="h-56 w-full object-cover object-center rounded-t-lg transition-opacity overflow-hidden flex flex-col items-center border-b border-gray-200 dark:border-gray-700">
              <img
                className="w-40 mt-6 opacity-20 shadow-2xl rounded-md border border-gray-200 dark:border-gray-800"
                src="/work/loggi.png"
                alt="Screenshot of the Loggi Driver product"
              />
            </div>
            <div className="p-4 flex items-end justify-between">
              <div className="flex flex-col space-y-3">
                <h2 className="h2-medium">Loggi</h2>
                <p className="text-sm text-gray-500">
                  Structuring the courier product, making it optimized for any
                  type of fleet in any step of the chain. Still living it.
                  Sometime soon!
                </p>
                <DisabledLink string="Read the story" />
              </div>
            </div>
          </div>
          {data.map((work) => (
            <WorkCard
              key={work.company}
              company={work.company}
              description={work.description}
              logo={work.logo}
              logoAlt={work.logoAlt}
              darkImg={work.darkImg}
              lightImg={work.lightImg}
              imgAlt={work.imgAlt}
              linkString={work.linkString}
              path={work.path}
            />
          ))}
        </div>
        <div className="default-container">
          <h1 className="h1">Side-gigs</h1>
        </div>
        <div className="large-container">
          <div className="work-grid">
            {side.map((sidegig) => (
              <SideGigCard
                key={sidegig.sidegig}
                sidegig={sidegig.sidegig}
                description={sidegig.description}
                logo={sidegig.logo}
                logoAlt={sidegig.logoAlt}
                darkImg={sidegig.darkImg}
                lightImg={sidegig.lightImg}
                imgAlt={sidegig.imgAlt}
                linkString={sidegig.linkString}
                path={sidegig.path}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
