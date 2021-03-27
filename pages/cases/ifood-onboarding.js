import React from "react";
import { NextSeo } from "next-seo";
import AppBar from "../../components/atoms/AppBar";
import BreadCrumb from "../../components/atoms/BreadCrumb";
import CaseHeader from "../../components/molecules/CaseHeader";
import Footer from "../../components/molecules/Footer";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function iFoodDriverOnboarding() {
  return (
    <div className="global-wrapper">
      <NextSeo
        title="driver onboarding - danilo leal"
        canonical="https://daniloleal.co/cases/ifood-onboarding"
        openGraph={{
          url: "https://daniloleal.co/cases/ifood-onboarding",
          title: "driver onboarding - danilo leal",
          images: [
            {
              url: "https://i.ibb.co/9HXCNdM/driver-onb.png",
              alt: "driver onboarding - danilo leal",
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
          pathNameThree="Driver Onboarding"
        />
        <CaseHeader
          title="Driver Onboarding"
          summary="In-depth view of how drivers become a part of iFood's fleet."
        />
        <h1 className="h1">Open doors</h1>
        <p className="paragraph-1">
          There's no much secret to what's an onboarding flow. But there's a
          bunch of intricacies that you have to be aware of to make your
          entering point delightful and assertive. If you reading this isn't
          from Brazil, you must know that people around here usually aren't very
          document organized. If you then zoom in at the driver population, that
          gets even messier. That directly affected our design thinking because
          this feature needed, very strongly, to be a lot clear, functional.
          Every step had to matter and work properly.
        </p>
      </div>
      <div className="large-container">
        <Zoom>
          <img
            className="img-subtitle"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5cf29d08d9e61157b8587f_ifo4-p-1600.png"
            alt="Birds-eye view of the whole feature flow"
          />
        </Zoom>
        <p className="subtitle-text">Onboarding flow bird's eye view.</p>
      </div>
      <div className="default-container">
        <div className="text-center grid grid-cols-3 gap-2 items-center py-8">
          <div className="w-full h-0.5 bg-gray-100 dark:bg-black"></div>
          <div>
            <p className="text-tiny uppercase font-semibold tracking-wider text-gray-500">
              Part 1
            </p>
            <p className="text-code uppercase tracking-wide font-medium text-draplin">
              Feature development
            </p>
          </div>
          <div className="w-full h-0.5 bg-gray-100 dark:bg-black"></div>
        </div>
        <h1 className="h1">What's at stake</h1>
        <p className="paragraph-1">
          When you're dealing with market places in general, the balance between
          supply and demand is your ultimate challenge. At iFood, we had an
          increasing order figure day after day and we at the Logistics Tribe
          had to support that by offering the right amount of driver supply to
          deliver all of it. There were multiple times where we needed to
          onboard a bunch of drivers in between a few days. That is the main
          importance of a properly designed onboarding flow. In times of
          undersupply, you need to have confidence your entering machine is
          working properly. And our wasn't all that much.
        </p>
        <div className="rounded-lg p-8 border border-solid border-gray-200 dark:border-gray-800 ">
          <p className="text-tiny text-center uppercase font-semibold tracking-wider text-gray-500 mb-2">
            The problem
          </p>
          <p className="paragraph-1 text-center">
            Ramp up the driver acquisition channel aiming at velocity. Also,
            give the operations team autonomy to activate drivers.
          </p>
        </div>
        <h1 className="h1">Make your copywriting matter!</h1>
        <p className="paragraph-1">
          Well, that's at least something I told myself a lot. That's because I
          wanted to ship an onboarding flow that brought the least amount of
          doubt possible. Of course, we had complementary channels for which we
          could direct users to it to give more detailed answers but I really
          wanted to commit to the "complementary" aspect of it. The main flow
          should be taking care of most of it. This product principle around
          this pillar of the app set the stage for a simple UI design decision
          that was: using lots of sub-titles. I'm a fan of good redundancies.
          I'm willing to compromise my beautiful design so good information is
          passed on at the right time.
          <br />
          <br />
          Another thing we did was set a stage visualizer. What I mean by that
          is simply adding a progress bar to the top bar of the app. A simple
          touch that aimed at reducing drivers' anxiety at inputting to our
          onboarding. And that is especially important because we took in
          consideration the journey of the driver as the mainframe to design
          from. You see, drivers are most of the time, well... driving. There
          are moments, here and there, where they'd be doing nothing, with their
          vehicles parked. Those may be between one delivery and another or else
          at their houses by the end of the day. Showing progress is a way to
          present how much time they would spend in our flow. And given the
          moment they chose to enroll in it, time and length are key factors for
          deciding whether they wanted to do it.
          <br />
          <br />
          This onboarding flow is especially complex because it has a bunch of
          specific business rules that we needed to follow. Like, asking for
          certain documents and pieces of information, at the right time, to
          have a proper user built in the database. Sometimes, these were
          non-negotiable. But in the UI, we could provide a more simple way of
          asking those things. That's why I chose to summarize the three top
          inputs users had to do it in one screen only, appearing and scrolling
          in as they finished inputting the first item (That's the third UI in
          the figure below I'm talking about). That not only reduced friction
          but also told a story straight: first we need to know with what
          vehicle you want to drive, to know what documents to ask.
        </p>
      </div>
      <div className="large-container">
        <Zoom>
          <img
            className="img-subtitle"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5cf29cc83a721e64dfe521_ifo3-p-1600.png"
            alt="Screenshots of some of the UI"
          />
        </Zoom>
        <p className="subtitle-text">Lots of copywriting.</p>
      </div>
      <div className="default-container">
        <h1 className="h1">Launching and learning</h1>
        <p className="paragraph-1">
          There's never an end to product work, there's simply the time you ship
          something and look further on the horizon. One of the main features we
          added to this new onboarding flow was the validation following. We had
          a communication process going for when the driver goes from one status
          to another. The UI reacted to it showing properly where and why the
          status was what it was. This was one of the main questions pilling up
          in every CX inbox we had: Zendesk, Google Play, email, etc. Everyone
          was asking: how's my sign-up? We provided a way to answer that
          natively in the app and helped a whole bunch. Especially the CX team
          that could go forward at replying to other questions. And that's a
          very important lesson learned: experience design is not the designer's
          responsibility, it is everyone's'. CX brought me so much value in
          illuminating when, where, and how users were having pain. So many
          problems around this flow got considerably better after we shipped,
          especially having built it with help from several teams.
          <br />
          <br />
          Drivers had many issues with inserting their bank accounts, especially
          here in Brazil with different codes for each bank. We tackled that and
          reduced a great number of payment errors. Some drivers used to take a
          very messy picture of themselves for their profile and, at times, we
          even had to reject some sign-ups because of offensive pictures. That
          went a bit away with the new design, where we put a clear instruction
          as to how the profile picture should be taken.
          <br />
          <br />
          These are a few examples of micro problems regarding the onboarding
          experience for drivers at iFood. I'm sure this was a step forward in
          the right direction of balancing supply and demand in a challenging
          market place.
        </p>
        <div className="text-center grid grid-cols-3 gap-2 items-center py-8">
          <div className="w-full h-0.5 bg-gray-100 dark:bg-black"></div>
          <div>
            <p className="text-tiny uppercase font-semibold tracking-wider text-gray-500">
              Part 2
            </p>
            <p className="text-code uppercase tracking-wide font-medium text-draplin">
              Inside the design
            </p>
          </div>
          <div className="w-full h-0.5 bg-gray-100 dark:bg-black"></div>
        </div>
        <p className="paragraph-1">
          Although I'm calling this a "feature" I do believe it's a lot more
          than that. There's a lot of screens, hard and detailed copywriting
          work. And of course, product work to get the steps right.
        </p>
      </div>
      <div className="large-container">
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5cf29c9a94a93bfaa6d679_ifo1-p-1600.png"
            alt="Screenshots of some of the UI"
          />
        </Zoom>
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5cf29ca10d23846b7f1f94_ifo2-p-1600.png"
            alt="Screenshots of some of the UI"
          />
        </Zoom>
      </div>
      <div className="default-container">
        <h1 className="h1">Some gems</h1>
        <h2 className="h2">City input</h2>
        <p className="paragraph-1">
          A fundamental step in the onboarding flow was the city input. At
          first, we thought of displaying only the cities that had an operation
          going. But the drawback was that drivers that went by to register that
          was from outside these cities, couldn't finish the onboarding. Also,
          there wasn't much intelligence when deciding which city to operate in.
          The commercial team used to make this decision almost by feel. <br />
          <br />
          That's when we decided to display all states of the country and, in
          those which we didn't' have an operation going, we still let drivers
          complete the flow. By doing that, we gained leads and could use them
          to foster the commercial team to open new cities.
        </p>
        <div className="pb-6">
          <video
            src="/videos/city.mov"
            className="img"
            preload="auto"
            playsinline
            controls
            autoplay
          ></video>
        </div>
        <h2 className="h2">Scrolled decision making</h2>
        <p className="paragraph-1">
          One of the main points of the onboarding was displaying clear
          storytelling. There was a point where the driver had to chose which
          vehicle it would drive with, send its documents for a background
          check, and then register its bank account. We found through some
          research that these were some of the most problematic moments. <br />
          <br />
          We made a design decision of accomodating all of these decisions in
          one UI only. As the user makes its decisions, the page scrolls, and
          another section is shown. We found that by having it all close by, not
          only the story was clearer but gave the user a better opportunity to
          review the selected options.
        </p>
        <div className="pb-6">
          <video
            src="/videos/scroll.mov"
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
