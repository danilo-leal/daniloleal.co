import React from 'react';
import { NextSeo } from 'next-seo';
import AppBar from '../../components/atoms/AppBar';
import BreadCrumb from '../../components/atoms/BreadCrumb';
import CaseHeader from '../../components/molecules/CaseHeader';
import Footer from '../../components/molecules/Footer';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function iFoodDriverPerformance() {
  return (
    <div className="global-wrapper">
      <NextSeo
        title="driver performance - danilo leal"
        canonical="https://daniloleal.co/cases/ifood-performance"
        openGraph={{
          url: 'https://daniloleal.co/cases/ifood-performance',
          title: 'driver performance - danilo leal',
          images: [
            {
              url: 'https://i.ibb.co/VS8jpt0/Group-28.png',
              alt: title,
              width: 1280,
              height: 720,
            },
          ],
        }}
      />
      <AppBar goBackTo="/cases/ifood" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="iFood /"
          goToTwo="/cases/ifood"
          pathNameThree="Driver Performance"
        />
        <CaseHeader
          title="Driver Performance"
          summary="In-depth view for a more detailed way of looking at delivery driver performance."
        />
        <h1 className="h1">What's about</h1>
        <p className="paragraph-1">
          Most people when performing anything would like to know how they're
          doing it. This is special for operational processes that includes so
          many aspects of efficiency and quality. Drivers, in the iFood fleet,
          craved since the early days of the product for more in-depth
          visualizations of their performance. That included not only the
          operational side but the financial too. And the latter is actually,
          kinda, the main point here.
          <br />
          <br />
          Gig economy is tough. It's far from easy. Despite getting to be a part
          of several players, the individual has a hard task of compiling
          results and checking what role in specific is serving them at best. My
          main goal tackling visualizations of driver performance was helping
          that task. I wanted to breakdown in a much broader detailed way how
          one driver was performing in our platform. That also went hand in hand
          with a product principle set of transparency. The lack of, therefore,
          caused a growing feeling of vulnerability, the sense of exploitation
          and confusion. We wanted to go away from all these by providing clear
          information, presented in an organised way.
        </p>
        <h1 className="h1">Impact in the ecosystem</h1>
        <p className="paragraph-1">
          Of course we entered most Facebook groups of drivers. Frequently, we'd
          see posts arguing and complaining about iFood stealing money from
          them, questioning when we'd pay them their delivery fees and if it was
          making sense riding for iFood at all, since it was confusing to know
          how much they've gained from it. All this unhappiness had a big toll
          in our CX team, in multiple channels. By the time of the research, we
          had about 4k tickets opened with perfomance related questions and
          somewhere about 500 comments in Google Play raising the issue up.{' '}
          <br />
          <br />
          And that was very rightful so. Below, I'm attaching some UIs from what
          was the product in the sense of performance data display by that time.
          It was too simple, little details. We needed to improve badly from
          that.
        </p>
      </div>
      <div className="large-container">
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c3beea10d2362857ded12_ifdp4-p-1600.png"
            alt="Screenshots of the old version of the app."
          />
        </Zoom>
      </div>
      <div className="default-container">
        <h1 className="h1">Getting context</h1>
        <p className="paragraph-1">
          In order to have more buy-in of the initiative, I surveyed about 3,5k
          drivers in our data base. The main goal here was to understand more
          about their relationship with money and financial organisation. We
          also wanted to learn more about how they related to features we
          already had, even though they were still very raw. <br />
          <br />
          Drivers are usually very simple people with structural needs. We
          observed that clearly in the survey seeing how most of their spendings
          were in basic stuff, like rent, food, children and, of course, their
          work tools. This paints the picture of how important is money to them
          and how proper tools for organising different streams of it would be
          very helpful. <br />
          <br />
          We also went for learning when the information is actually scanned
          through. Do they analyse their performance between one order and the
          other? Do they, before bed, go and check how were their days? Do they
          compile a month worth of riding in some kind of tool like Google
          Sheets or Excel? All this set us stage to how to place stuff in the UI
          and the level of depth we should add to the navigation.
        </p>
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c3bef1d116027c3e21f1e_ifdp5-p-1080.png"
            alt="One slide from my research deck."
          />
        </Zoom>
        <p className="subtitle-text">
          Piece of our deck showing survey results. Here I rank how drivers
          spend their money.
        </p>
        <h1 className="h1">Challenges and launching</h1>
        <p className="paragraph-1">
          Gathering information seems kinda tricky in most systems with complex
          architecture. This was no different. We had challenging tasks for
          arranging all sets of performance data together in order to show them
          to the user. I left iFood little before the rollout of the first
          version of this epic. I'm happy that to this day, the team there
          continues to evolve this goal and less because it's something I
          started when I was in the team and more because drivers really need
          and will benefit a whole lot from it. It's no easy job riding on all
          day long. Not at all. And I'm proud to have had the opportunity to
          provide some sort of tool for making it easier.
        </p>
      </div>
      <div className="large-container">
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c3befce577162b0ffe865_ifdp1-p-1600.png"
            alt="Screenshots of some of the UI"
          />
        </Zoom>
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c3befc002d47402c019db_ifdp2-p-1600.png"
            alt="Screenshots of some of the UI"
          />
        </Zoom>
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c3befc002d4af17c019dc_ifdp3-p-1600.png"
            alt="Screenshots of some of the UI"
          />
        </Zoom>
      </div>
      <Footer />
    </div>
  );
}
