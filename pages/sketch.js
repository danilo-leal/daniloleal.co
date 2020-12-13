import React from 'react';
import AppBar from '../components/atoms/AppBar';
import BreadCrumb from '../components/atoms/BreadCrumb';
import CaseHeader from '../components/templates/CaseHeader';
import MainLink from '../components/atoms/MainLink';

export default function Sketch() {
  return (
    <div className="h-full dark:bg-blackish pb-10">
      <AppBar goBackTo="/" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          pathNameTwo="Other endeavors"
          pathNameThree=""
          pathNameFour=""
        />
        <CaseHeader
          title="Other endeavors"
          summary="Those include giving form to other types of expressions. I really like to explore my visual and musical senses by designing and creating pieces that resembles my current state of mind."
        />
        <div className="grid grid-cols-2 gap-10 justify-between">
          <div className="p-3 border border-bg-100 rounded-lg flex items-start">
            <img
              src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d90dfd2e0670331b10724_logos%3A%20ifood.svg"
              alt=""
              className="pt-1 mr-6"
            />
            <div>
              <h1 className="mb-2 dark:text-white">Graphic Design</h1>
              <p className="text-gray-500 text-sm mb-4 dark:text-gray-400">
                I grew up in design by doing graphic stuff. Ranging it from
                logos, to whole branding packages to album cover designs. Seeing
                stuff being physical is very satisfying.
              </p>
              <MainLink string="See stuff" path="" />
            </div>
          </div>
          <div className="p-3 border border-bg-100 rounded-lg flex items-start">
            <img
              src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d90dfd2e0670331b10724_logos%3A%20ifood.svg"
              alt=""
              className="pt-1 mr-6"
            />
            <div>
              <h1 className="mb-2 dark:text-white">Graphic Design</h1>
              <p className="text-gray-500 text-sm mb-4 dark:text-gray-400">
                I grew up in design by doing graphic stuff. Ranging it from
                logos, to whole branding packages to album cover designs. Seeing
                stuff being physical is very satisfying.
              </p>
              <MainLink string="See stuff" path="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
