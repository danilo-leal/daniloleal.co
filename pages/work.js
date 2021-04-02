import React from "react";
import AppBar from "../components/atoms/AppBar";
import Footer from "../components/molecules/Footer";
import BreadCrumb from "../components/atoms/BreadCrumb";
import CaseHeader from "../components/molecules/CaseHeader";
import { NextSeo } from "next-seo";
import MainLink from "../components/atoms/MainLink";
import DisabledLink from "../components/atoms/DisabledLink";
import { useTheme } from "next-themes";

export default function Work() {
  const { theme, setTheme } = useTheme();
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
          goToTwo="/Work"
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
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 px-2 sm:px-0">
          <div className="border border-gray-200 rounded-lg transition-all hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black opacity-80 hover:opacity-100 relative">
            <div className="h-8 w-8 rounded-full bg-blue-500 flex flex-col items-center justify-center shadow-md absolute inset-y-4 right-0 mr-4">
              <img src="/svgs/white/wlogo-loggi.svg" />
            </div>
            <div className="h-56 w-full object-cover object-center rounded-t-lg transition-opacity overflow-hidden flex flex-col items-center border-b border-gray-200 dark:border-gray-700">
              <img
                className="w-40 mt-6 opacity-20 shadow-2xl rounded-md border border-gray-200 dark:border-gray-800"
                src="/work/loggi.png"
                alt=""
              />
            </div>
            <div className="p-4 flex items-end justify-between">
              <div className="flex flex-col space-y-3">
                <h1 className="font-semibold dark:text-white">Loggi</h1>
                <h2 className="text-sm text-gray-500">
                  Structuring the courier product, making it optimized for any
                  type of fleet in any step of the chain. Still living it.
                  Sometime soon!
                </h2>
                <DisabledLink string="Read the story" />
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg transition-all hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black opacity-80 hover:opacity-100 relative">
            <div className="h-8 w-8 rounded-full bg-red-500 flex flex-col items-center justify-center shadow-md absolute inset-y-4 right-0 mr-4">
              <img src="/svgs/white/wlogo-ifood.svg" />
            </div>
            <div className="h-56 w-full object-cover object-center rounded-t-lg transition-opacity overflow-hidden flex flex-col items-center border-b border-gray-200 dark:border-gray-700 bg-red-50 dark:bg-black">
              {theme === "dark" ? (
                <img
                  className="w-40 mt-6 shadow-2xl rounded-md border border-gray-800"
                  src="/work/ifood-dark.png"
                  alt=""
                />
              ) : (
                <img
                  className="w-40 mt-6 shadow-2xl rounded-md border border-gray-200"
                  src="/work/ifood-light.png"
                  alt=""
                />
              )}
            </div>
            <div className="p-4 flex items-end justify-between">
              <div className="flex flex-col space-y-3">
                <h1 className="font-semibold dark:text-white">iFood</h1>
                <h2 className="text-sm text-gray-500">
                  Designed the new driver app from the ground up. Small team,
                  challenging goals and huge impact. What a ride!
                </h2>
                <MainLink string="Read the story" path="/" />
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg transition-all hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black opacity-80 hover:opacity-100 relative">
            <div className="h-8 w-8 rounded-full bg-indigo-500 flex flex-col items-center justify-center shadow-md absolute inset-y-4 right-0 mr-4">
              <img src="/svgs/white/wlogo-livia.svg" />
            </div>
            <div className="h-56 w-full object-cover object-center rounded-t-lg transition-opacity overflow-hidden flex flex-col items-center border-b border-gray-200 dark:border-gray-700 bg-indigo-50 dark:bg-black">
              {theme === "dark" ? (
                <img
                  className="w-40 mt-6 shadow-2xl rounded-md border border-gray-800"
                  src="/work/livia-dark.png"
                  alt=""
                />
              ) : (
                <img
                  className="w-40 mt-6 shadow-2xl rounded-md border border-gray-200"
                  src="/work/livia-light.png"
                  alt=""
                />
              )}
            </div>
            <div className="p-4 flex items-end justify-between">
              <div className="flex flex-col space-y-3">
                <h1 className="font-semibold dark:text-white">Livia Pro</h1>
                <h2 className="text-sm text-gray-500">
                  With Livia, we were tackling one of the most fundamental
                  health care problem out there: communication.
                </h2>
                <MainLink string="Read the story" path="/" />
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg transition-all hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black opacity-80 hover:opacity-100 relative">
            <div className="h-8 w-8 rounded-full bg-orange-500 flex flex-col items-center justify-center shadow-md absolute inset-y-4 right-0 mr-4">
              <img src="/svgs/white/wlogo-rapiddo.svg" />
            </div>
            <div className="h-56 w-full object-cover object-center rounded-t-lg transition-opacity overflow-hidden flex flex-col items-center border-b border-gray-200 dark:border-gray-700 bg-orange-50 dark:bg-black">
              {theme === "dark" ? (
                <img
                  className="w-40 mt-6 shadow-2xl rounded-md border border-gray-800"
                  src="/work/rapiddo-dark.png"
                  alt=""
                />
              ) : (
                <img
                  className="w-40 mt-6 shadow-2xl rounded-md border border-gray-200"
                  src="/work/rapiddo-light.png"
                  alt=""
                />
              )}
            </div>
            <div className="p-4 flex items-end justify-between">
              <div className="flex flex-col space-y-3">
                <h1 className="font-semibold dark:text-white">
                  Rapiddo Entregas
                </h1>
                <h2 className="text-sm text-gray-500">
                  One designer for the whole company. You know the drill. I did
                  it all at Rapiddo. Great times. Apps, motion graphics,
                  branding. Told ya!
                </h2>
                <MainLink string="Read the story" path="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="default-container">
        <h1 className="h1">Side-gigs</h1>
      </div>
      <div className="large-container">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 px-2 sm:px-0">
          <div className="border border-gray-200 rounded-lg transition-all hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black opacity-80 hover:opacity-100 relative">
            <div className="h-8 w-8 rounded-full bg-blue-500 flex flex-col items-center justify-center shadow-md absolute inset-y-4 right-0 mr-4">
              <img src="/svgs/white/wlogo-coop.svg" />
            </div>
            <div className="h-56 w-full object-cover object-center rounded-t-lg transition-opacity overflow-hidden flex flex-col items-center border-b border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-black">
              {theme === "dark" ? (
                <img
                  className="w-40 pt-6 shadow-2xl"
                  src="/work/coop-dark.png"
                  alt=""
                />
              ) : (
                <img
                  className="w-40 pt-6 shadow-2xl"
                  src="/work/coop-light.png"
                  alt=""
                />
              )}
            </div>
            <div className="p-4 flex items-end justify-between">
              <div className="flex flex-col space-y-3">
                <h1 className="font-semibold dark:text-white">Coop</h1>
                <h2 className="text-sm text-gray-500">
                  A streamlined financial organizer for you to follow how much
                  you've spent in comparison to what you've expected to spend.
                </h2>
                <MainLink string="See work in progress" path="/" />
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg transition-all hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black opacity-80 hover:opacity-100 relative">
            <div className="h-8 w-8 rounded-full bg-yellow-500 flex flex-col items-center justify-center shadow-md absolute inset-y-4 right-0 mr-4">
              <img src="/svgs/white/wlogo-tailwind.svg" />
            </div>
            <div className="h-56 w-full object-cover object-center rounded-t-lg transition-opacity overflow-hidden flex flex-col items-center border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black">
              {theme === "dark" ? (
                <img
                  className="w-64 mt-16 shadow-2xl rounded-md border border-gray-800"
                  src="/work/tailwind-dark.png"
                  alt=""
                />
              ) : (
                <img
                  className="w-64 mt-16 shadow-2xl rounded-md border border-gray-200"
                  src="/work/tailwind-light.png"
                  alt=""
                />
              )}
            </div>
            <div className="p-4 flex items-end justify-between">
              <div className="flex flex-col space-y-3">
                <h1 className="font-semibold dark:text-white">
                  Tailwind para Designers
                </h1>
                <h2 className="text-sm text-gray-500">
                  Dedicated to the portuguese speaking design comunnity. I'll
                  try to lay down the fundamentals about TailwindCSS in a very
                  easy way.
                </h2>
                <MainLink string="See work in progress" path="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
