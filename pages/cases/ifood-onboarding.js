import React from 'react';
import AppBar from '../../components/atoms/AppBar';
import BreadCrumb from '../../components/atoms/BreadCrumb';
import CaseHeader from '../../components/templates/CaseHeader';
import H1 from '../../components/atoms/typography/H1';
import Footer from '../../components/templates/Footer';

export default function iFoodDriverOnboarding() {
  return (
    <div className="h-full dark:bg-blackish">
      <AppBar goBackTo="/cases/ifood" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="iFood /"
          goToTwo="/cases/ifood"
          pathNameThree="Driver Onboarding"
          pathNameFour=""
        />
        <CaseHeader
          title="Driver Onboarding"
          summary="In-depth view of how drivers become a part of iFood's fleet."
        />
        <H1 content="Open doors" />
        <p className="paragraph-1">
          There's no much secret to what's an onboarding flow. But there's a
          bunch of intricacies that you have to be aware in order to make your
          entering point delightful and assertive. If you reading this isn't
          from Brazil, you must know that people around here usually aren't very
          document organised. If you then zoom in at the driver population, that
          gets even messier. The implication to that in our design was the need
          to set an experience very clear, with clear steps and instructions.
        </p>
      </div>
      <div className="large-container">
        <img
          className="img"
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5cf29d08d9e61157b8587f_ifo4-p-1600.png"
          alt=""
        />
        <p className="subtitle-text">Onboarding flow bird's eye view.</p>
      </div>
      <div className="default-container">
        <H1 content="What's at stake" />
        <p className="paragraph-1">
          When you're dealing with market places in general, the balance between
          supply and demand is your ultimate challenge. At iFood, we had an
          increasing order figure day after day and ourselves at the Logistics
          Tribe had to support that by offering the right amount of driver
          supply to deliver all of it. There were multiple times where we needed
          to onboard a bunch of drivers in between a few days. That is the main
          importance of a proper designed onboarding flow. In times of under
          supply, you need to have confidence that. your entering machine is
          working properly. And our wasn't all that much.
        </p>
        <H1 content="Make your sub-titles matter!" />
        <p className="paragraph-1">
          Well, that's at least something I told myself a lot. That's because I
          wanted to ship an onboarding flow that brought the least amount of
          doubt possible. Of course we had complementary channels for which we
          could direct users to it in order to give more detailed answers but I
          really wanted to commit to the "complementary" aspect of it. The main
          flow should be taking care of most of it. This product principle
          around this pillar of the app set stage for a simple UI design
          decision that was: using lot's of sub-titles. I'm a fan of good
          redundancies. I'm willing to compromise my beautiful design so good
          information is passed on through at the right time. <br />
          <br />
          Other thing we did was set a stage visualizer. What I mean by that is
          simply adding a progress bar to the top bar of the app. A simple touch
          that aimed at reducing drivers anxiety at inputing to our onboarding.
          And that is specially important because we took in consideration the
          journey of the driver as the main frame to design from. You see,
          drivers are most of the time, well... driving. There are moments, here
          and there, where they'd be doing nothing, with their vehicles parked.
          Those may be between one delivery and another or else at their houses
          by the end of the day. Showing progress is a way to present how much
          time they would spend in our flow. And given the moment they chose to
          enroll in it, time and length are key factors for deciding wether they
          wanted to do it. <br />
          <br />
          This onboarding flow is specially complex because it has a bunch of
          specific business rules that we needed to follow. Like, asking for
          certain documents and informations, at the right time, to have a
          proper user built in the data base. Sometimes, these were
          non-negotiable. But in the UI, we could provide a more simple way of
          asking those things. That's why I chose to summarize the three top
          inputs users had to do it in one screen only, appearing and scrolling
          in as they finished inputting the first item (That's the third UI in
          the figure below I'm talking about). That not only reduced friction
          but it also told a story straight: first we need to know with what
          vehicle you want to drive, in order to know what documents to ask.
        </p>
      </div>
      <div className="large-container">
        <img
          className="img"
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5cf29cc83a721e64dfe521_ifo3-p-1600.png"
          alt=""
        />
        <p className="subtitle-text">Lots of sub-titles.</p>
      </div>
      <div className="default-container">
        <H1 content="Launching and learning" />
        <p className="paragraph-1">
          There's never an end to a product work, there's simply the time you
          ship something and look further in the horizon. One of the main
          features we added to this new onboarding flow was the validation
          following. We had a communication process going for when the driver
          goes from one status to another. The UI reacted to it showing properly
          where and why the status was what it was. This was one of the main
          questions pilling up in every CX inbox we had: Zendesk, Google Play,
          email, etc. Everyone was asking: how's my sign-up? We provided a way
          to answer that natively in the app and helped a whole bunch. Specially
          the CX team that could go forward at replying other questions. And
          that's a very important lesson learned: experience design is not the
          designer responsibility, it is everyones'. CX brought me so much value
          at illuminating when, where and how users were having pain. So many
          problems around this flow got considerably better after we shipped,
          specially having built it with help from a number of teams.
          <br />
          <br />
          Drivers had many issues with inserting their bank accounts, specially
          here in Brazil with different codes for each bank. We tackled that and
          reduced a great amount of payment errors. Some drivers used to take a
          very messy picture of themselves for their profile and, at times, we
          even had to reject some sign-ups because of offensive pictures. That
          went a bit away with the new design, where we put a clear instruction
          as to how the profile picture should be taken.
          <br />
          <br />
          These are few exemples of micro problems regarding the onboarding
          experience for drivers at iFood. I'm sure this was a step forward at
          the right direction of balancing supply and demand in a challenging
          market place.
        </p>
      </div>
      <div className="large-container">
        <img
          className="img"
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5cf29c9a94a93bfaa6d679_ifo1-p-1600.png"
          alt=""
        />
        <img
          className="img"
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5cf29ca10d23846b7f1f94_ifo2-p-1600.png"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
}
