import React from 'react';
import { NextSeo } from 'next-seo';
import CaseInfo from '../../components/molecules/CaseInfo';
import AppBar from '../../components/atoms/AppBar';
import BreadCrumb from '../../components/atoms/BreadCrumb';
import CaseHeader from '../../components/molecules/CaseHeader';
import Footer from '../../components/molecules/Footer';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function Rapiddo() {
  return (
    <div className="global-wrapper">
      <NextSeo
        title="rapiddo entregas - danilo leal"
        canonical="https://daniloleal.co/cases/rapiddo"
        openGraph={{
          url: 'https://daniloleal.co/cases/rapiddo',
          title: 'rapiddo entregas - danilo leal',
          images: [
            {
              url: 'https://i.ibb.co/frhFQDg/rapiddo.png',
              alt: 'rapiddo entregas - danilo leal',
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
          pathNameTwo="Rapiddo Entregas"
          goToTwo="/cases/rapiddo"
        />
        <CaseHeader
          title="Rapiddo Entregas"
          summary="One designer for the whole company. You know the drill. I did it all at Rapiddo. Great times. Apps, motion graphics, branding. I told you!"
        />
        <CaseInfo
          role="Product Design, Research & Branding"
          period="From mid 2017 to early 2018"
          stack="Android, web & After Effects"
          links={[
            <a
              href="https://vimeo.com/321077344"
              className="cursor-pointer font-medium text-draplin text-sm hover:text-gray-900 dark:hover:text-white transition-all"
            >
              Motion onboarding
            </a>,
          ]}
        />
        <h1 className="h1">Starting out</h1>
        <p className="paragraph-1">
          Rapiddo was my first gig. It got me set up in the logistics industry
          of products. As iFood still is, Rapiddo was a company of the Movile
          Group, a huge company that encompasses a bunch of products and
          services in multiple industries. What eventually became the Logistics
          Tribe at iFood was the main Rapiddo team. We got "acquired", more like
          merged by, and then we set out to continue our Rapiddo's efforts
          beneath iFood's umbrella.
          <br />
          <br />
          But, back then, Rapiddo was your average startup. Small focused team,
          a lot of talented folks, goals, and objectives up in the roof,
          aggressive timelines, and dreamlike vision. And of course, little
          money. So as you'd expect, a lot of stuff didn't get out of their MVP.
          Kinda the whole company functioned in a MVP set of products. The dev
          team wasn't all that huge and they were located in another city, which
          made it harder for the ops team to communicate the problems they were
          seeing face to face with users.
        </p>
        <h1 className="h1">
          Have you thought about branding as a product problem?
        </h1>
        <p className="paragraph-1">
          Yea... have you? That's what I used to think of Rapiddo. By being a
          small startup, most clients had difficulty understanding the problems
          Rapiddo was trying to solve. And at the most macro level, what is the
          company about. I noticed that problem even by being an employee. There
          were no branding guidelines whatsoever. And I got out to set up one
          for that. As it was one of my first gigs, I was making simple stuff.
          But looking back, they were fundamental. As I said in the sub-title, I
          did it all there. So, in the early months, I was building a brand
          guidelines resource among refactoring a bunch of old keynotes the
          commercial team used to deploy on sales meetings. I really think this
          is important when trying to pitch your company out. Sometimes, it's
          all about how you sell the dream. Even if you don't have the means to
          build it. Maybe by how well you sell it, someone will fund you.
        </p>
      </div>
      <div className="w-screen sm:grid grid-cols-2 pt-10 pb-1">
        <Zoom>
          <img
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5cfdcc10a785d6dad9144a_rddd2-p-1080.png"
            alt=""
          />
        </Zoom>
        <Zoom>
          <img
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5cfd69cf8c397bed6ff9bf_rdd3-p-1080.png"
            alt="Slides from the branding deck"
          />
        </Zoom>
      </div>
      <div className="default-container">
        <h1 className="h1">Joining the fleet</h1>
        <p className="paragraph-1">
          Most of the problems I faced during my iFood period were the same at
          Rapiddo, with less budget and few dev capacity. We had very serious
          problems when it comes to onboarding drivers. You can read more in
          detail about the same issues I faced when in iFood here. But back in
          Rapiddo, as our operation was small enough, we could provide
          "activation" events of drivers. By that I mean that the company used
          to send some of the ops team around the country to set up a talk, in
          some hotel room, to explain all the bits and pieces of how to be a
          driver in our platform.
          <br />
          <br />
          It used to be a 60+ keynote with a bunch of slides showing app
          screenshots and other ones explaining more in-depth some of the rules
          of the service. That was tiring and expensive for all of the involved.
          We had to come up with a more scalable way of onboarding and training
          new drivers. We had a constraint of not changing anything in the
          native app. So we really had to be creative. And by that I mean:
          motion graphics. Yes, that's what it was. There I was, 3 months deep
          into After Effects tutorials.
          <br />
          <br />
          We did some legit startup work there. Very low budget. We got a
          co-worker of ours that liked and sang really well to record
          voice-overs for the videos. We then compromised all of the tiring
          keynote and talks the team used to give countrywide in a set of 7
          educational videos with animations, explaining every bit of detail we
          had in our operation and app. That was really out of the box by that
          time in the company and actually made an impact. The ops team really
          started to travel less and in conjunction with other onboarding
          optimizations the team did, we got a pretty stable supply-input
          machine going on.
        </p>
        <div className="relative ">
          <iframe
            src="https://player.vimeo.com/video/321077344?color=e57928&portrait=0"
            frameborder="0"
            className="sm:h-96 h-full sm:py-0 py-4 w-full"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <p className="subtitle-text">
          One of the motion graphics made for the drivers onboarding. It was a
          series of 8. There's 2 available in my Vimeo account. Take a peek!
        </p>
        <h1 className="h1">Exploring and learning</h1>
        <p className="paragraph-1">
          By some time, Rapiddo started to cool things down a bit. That's
          because, I guess, the iFood deal was starting to get closer and
          closer. Normal employees, like me, weren't aware of this. But, in the
          meantime, we started to dig deep into more problems we had in regards
          to the driver fleet. And these problems took me off in advantage when
          in iFood, because they were identical. We had so much trouble trying
          to have a stable supply showing to take the orders. Because of that,
          we started to come up with ways to better enhance our promotion, the
          main call-out mechanism, flow in the app. <br />
          <br />
          That, unfortunately, didn't pan out because the deal was close to
          happening. But the lesson I take from my experience at Rapiddo is to
          be creative. When you set out for yourself a constraint as hard as not
          much money, you need to think about the possibilities with the
          resources at hand. That's when we started to have an interesting
          conversation about what we, as an almost product team, wanted to do.
          Like, vision wide. And that started to create an alignment that was
          special by that time. <br />
          <br />
          We explored a lot of stuff at Rapiddo and those times were too
          special. I met people who I hold close to me to this day and I'm very
          happy to have had the opportunity of tackling problems over there. I
          didn't have a clue, before joining, that it'd be that cool.
        </p>
      </div>
      <div className="large-container">
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c16b8dfa8cb29f7298101_rdd-p-1600.png"
            alt="Screenshots of some of the UI"
          />
        </Zoom>
      </div>
      <Footer />
    </div>
  );
}
