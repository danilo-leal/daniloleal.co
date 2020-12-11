import React from 'react';
import CaseInfo from '../components/templates/CaseInfo';
import AppBar from '../components/atoms/AppBar';
import BreadCrumb from '../components/atoms/BreadCrumb';
import CaseHeader from '../components/templates/CaseHeader';
import H1 from '../components/atoms/typography/H1';
import DeepCards from '../components/atoms/DeepCards';

export default function Sketch() {
  return (
    <div className="h-full dark:bg-blackish">
      <AppBar />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          pathNameTwo="Case /"
          pathNameThree="iFood"
          pathNameFour=""
        />
        <CaseHeader
          title="iFood"
          summary="Designed the new driver app from the ground up. Small team, challenging goals and huge impact. A product that is very close to my heart. What a ride!"
        />
        <CaseInfo
          role="Product Design & Research"
          period="From early 2018 to mid 2019"
          stack="Android mostly, some web"
        />

        <H1 content="Starting out" />
        <p className="paragraph-1">
          The experience I had working at iFood is one of those I can call
          special. The company was in a very weird place back then, very
          different from nowadays. The team was not huge, but not small as well.
          And then, there was the Logistics Tribe, which was responsible for
          creating the foundation of the newest business vertical aimed at
          increasing the number of deliveries done by proper iFood's fleet and
          not somebody else's - like it used to be. <br />
          <br />I got there as what I might call 'one of the founding members'
          of the Logistic Tribe. And I guess it is rightful to call it that way
          because it was almost a like a startup inside a startup. It was a very
          small team, with huge goals set upon us so we could prove that it was
          worth it setting up all this stuff. Among all the tech involved at
          creating a logistics operation, the Driver App is one of the most
          important applications.
        </p>

        <img
          className="img"
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5ac50df80de5a1a5d478f2_IMG_2922-min-p-1080.jpeg"
          alt=""
        />
        <p className="subtitle-text">
          This is what I'd call a messy startup office. There's a beauty to it.
        </p>
        <H1 content="Early days" />
        <p className="paragraph-1">
          When I joined, there was already a version of the Driver App. But a
          very raw one. The developers who were first in the team deployed a
          simple front end, with no usability thought whatsoever, simply to
          interact with the state machines running in the back end of the
          system. Meanwhile, the fleet grew steadily. To go with it, the app
          gained a few features here and there and naturally, that started to
          get messy and problems around the experience became more and more
          relevant.
          <br />
          <br />
          But, in the first months, the team and I were not focusing too much in
          upgrading the app. There was so many other foundational decisions we
          had to make in order to have a proper business and experience
          functioning. It even took a while to gather a proper team to take care
          of the app. Meanwhile, I had never stopped doodling around with
          dreamlike concepts of the product. This no strings attached process
          was essential to set space for lots of studying. I learned so much
          about the logistics, food delivery and gig economy industry by that
          time. With extensive benchmark and focus, I started to get ready to
          set up a real proposition for how we could set the Driver App as a
          more robust, thoughtful and experience-driven product.
        </p>
      </div>
      <div className="large-container">
        <img
          className="img"
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5ac782d647e72b39065d93_old-driver-app.png"
          alt=""
        />
      </div>
      <div className="default-container">
        <DeepCards title="askjdbaskjd" description="asjdaksjd" />
        <DeepCards title="askjdbaskjd" description="asjdaksjd" />
      </div>
    </div>
  );
}
