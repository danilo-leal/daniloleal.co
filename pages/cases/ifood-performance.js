import React from "react";
import { NextSeo } from "next-seo";
import AppBar from "../../components/atoms/AppBar";
import BreadCrumb from "../../components/atoms/BreadCrumb";
import CaseHeader from "../../components/molecules/CaseHeader";
import Footer from "../../components/molecules/Footer";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import SectionDivider from "../../components/molecules/SectionDivider";
import Statement from "../../components/molecules/Statement";

export default function iFoodDriverPerformance() {
  return (
    <div className="global-wrapper">
      <NextSeo
        title="driver performance - danilo leal"
        canonical="https://daniloleal.co/cases/ifood-performance"
        openGraph={{
          url: "https://daniloleal.co/cases/ifood-performance",
          title: "driver performance - danilo leal",
          images: [
            {
              url: "https://i.ibb.co/6BQc9H8/driver-perf.png",
              alt: "driver performance - danilo leal",
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
        <SectionDivider part="1" section="General context" />
        <h1 className="h1">What's about</h1>
        <p className="paragraph-1">
          Most people when performing anything would like to know how they're
          doing it. This is special for operational processes that include so
          many aspects of efficiency and quality. Drivers, in the iFood fleet,
          craved since the early days of the product for more in-depth
          visualizations of their performance. That included not only the
          operational side but the financial too. And the latter is, kinda, the
          main point here.
          <br />
          <br />
          The gig economy is tough. It's far from easy. Despite getting to be a
          part of several players, the individual has a hard task of compiling
          results and checking what role in specific is serving them at best. My
          main goal in tackling visualizations of driver performance was helping
          that task. I wanted to a breakdown in a much broader detailed way how
          one driver was performing in our platform. That also went hand in hand
          with a product principle set of transparency. The lack of, therefore,
          caused a growing feeling of vulnerability, the sense of exploitation
          and confusion. We wanted to go away from all these by providing clear
          information, presented in an organized way.
        </p>
        <h1 className="h1">Impact on the ecosystem</h1>
        <p className="paragraph-1">
          Of course, we entered most Facebook groups of drivers. Frequently,
          we'd see posts arguing and complaining about iFood stealing money from
          them, questioning when we'd pay them their delivery fees and if it was
          making sense riding for iFood at all since it was confusing to know
          how much they've gained from it. All this unhappiness had a big toll
          on our CX team, in multiple channels. By the time of the research, we
          had about 4k tickets opened with performance-related questions and
          somewhere about 500 comments in Google Play raising the issue.
          <br />
          <br />
          And that was very rightful so. Below, I'm attaching some UIs from what
          was the product in the sense of performance data display by that time.
          It was too simple, little details. We needed to improve badly from
          that.
        </p>
        <Statement
          title="The problem"
          description="Drivers were frequently confused as to when would they receive their
            money. Most of them liked to plan their weekly goals but didn't have
            a proper tool to do that."
        />
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
        <SectionDivider part="2" section="Feature development" />

        <h1 className="h1">Getting context</h1>
        <p className="paragraph-1">
          To have more buy-in of the initiative, I surveyed about 3,5k drivers
          in our database. The main goal here was to understand more about their
          relationship with money and financial organization. We also wanted to
          learn more about how they related to features we already had, even
          though they were still very raw. <br />
          <br />
          Drivers are usually very simple people with structural needs. We
          observed that clearly in the survey seeing how most of their spendings
          were on basic stuff, like rent, food, children, and, of course, their
          work tools. This paints the picture of how important is money to them
          and how proper tools for organizing different streams of it would be
          very helpful. <br />
          <br />
          We also went for learning when the information is actually scanned
          through. Do they analyze their performance between one order and the
          other? Do they, before bed, go and check how were their days? Do they
          compile a month worth of riding in some kind of tools like Google
          Sheets or Excel? All this set our stage for how to place stuff in the
          UI and the level of depth we should add to the navigation.
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
          arranging all sets of performance data together to show them to the
          user. I left iFood a little before the rollout of the first version of
          this epic. I'm happy that to this day, the team there continues to
          evolve this goal and less because it's something I started when I was
          in the team and more. After all, drivers need and will benefit a whole
          lot from it. It's no easy job riding on all day long. Not at all. And
          I'm proud to have had the opportunity to provide some sort of tool for
          making it easier.
        </p>
        <SectionDivider part="3" section="Inside the designs" />
        <h2 className="h2">The structure</h2>
        <p className="paragraph-1">
          Our design consisted of three main areas: financial gains, promotions,
          and goals. When talking about the first one, the main feature was
          displaying status. Drivers needed to know what's the current state of
          their payment.
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
      </div>
      <div className="default-container">
        <h2 className="h2">Date focused</h2>
        <p className="paragraph-1">
          They also needed to know when exactly was that payment going to be
          made. This was the main entry point to CX channels. As in the
          promotion side, we used to see frequently drivers confused if they
          concluded or not the promotion, consequently then, whether they would
          receive that value.
        </p>
      </div>
      <div className="large-container">
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c3befc002d47402c019db_ifdp2-p-1600.png"
            alt="Screenshots of some of the UI"
          />
        </Zoom>
      </div>
      <div className="default-container">
        <h2 className="h2">The goals feature</h2>
        <p className="paragraph-1">
          Lastly, the goals feature was an ambitious project. This was beneath a
          bigger gamification strategy so drivers would be rewarded if they
          completed their own set goals. We got evidence that most of them put
          financial goals at the start of some period, be the week or month. It
          was their ultimate cutting line as to whether they were doing fine or
          not. It was also a trigger to when they could stop working. Say you
          set a daily goal to make $50. If you get there, you'd probably be more
          at peace to stop working, wouldn't you? The design here was to
          facilitate and natively introduce this experience within the product.
        </p>
      </div>
      <div className="large-container">
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c3befc002d4af17c019dc_ifdp3-p-1600.png"
            alt="Screenshots of some of the UI"
          />
        </Zoom>
      </div>
      <div className="default-container">
        <p className="paragraph-1">
          You can check
          <a
            href="https://cloud.protopie.io/p/1ZTwu1WoUa"
            className="inline-link"
          >
            the full prototype here
          </a>
          if you want. I'm very proud of this one. A bit sad because couldn't be
          at the company to see it through the light of the day but I know it
          would make incredible impact at offering drivers a more delightful
          experience. It's also filled with great interactions and I guess the
          UI turned out great. Clean and organized stuff :)
        </p>
        <div className="pb-6">
          <video
            src="/videos/performance.mov"
            className="img"
            preload="auto"
            playsinline
            controls
            autoplay
          ></video>
        </div>
      </div>
      <Footer />
    </div>
  );
}
