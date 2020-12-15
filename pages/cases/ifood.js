import React from 'react';
import CaseInfo from '../../components/templates/CaseInfo';
import AppBar from '../../components/atoms/AppBar';
import BreadCrumb from '../../components/atoms/BreadCrumb';
import CaseHeader from '../../components/templates/CaseHeader';
import H1 from '../../components/atoms/typography/H1';
import DeepCards from '../../components/atoms/DeepCards';
import Footer from '../../components/templates/Footer';

export default function iFood() {
  return (
    <div className="h-full dark:bg-blackish">
      <AppBar goBackTo="/" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goTo="/"
          pathNameTwo="iFood"
          goTo="/cases/iFood"
          pathNameThree=""
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
        <H1 content="Quick callout" />
        <p className="paragraph-1">
          This article goes through my story with iFood. I also have two
          detailed articles going through two specific features I've worked on
          that I'm very proud of. Don't forget to peek at those!'
        </p>

        <div className="flex flex-col space-y-4">
          <DeepCards
            title="Driver Performance"
            description="Structuring view for drivers to measure their performances."
            path="/ifood-desempenho"
            deepLinkString="Go deep"
          />
          <DeepCards
            title="Driver Onboarding"
            description="Work to have the drivers onboarding pipes flowing."
            path="/ifood-onboarding"
            deepLinkString="Go deep"
          />
        </div>

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
        <p className="paragraph-1">
          Up there you see the UI design that the team created in the early days
          of operation. The cool things is, this was pretty much the whole
          product, in a nutshell. There is, if you look closer, gold in there.
          Like the Settings page, in the far right, with only a "log out"
          button. If you do not find this very minimalistic, there's something
          up with you.
          <br />
          <br />
          The only spice I gave to this by that time was the hat motorcycle
          logo. And that's the logo for the app to this day. :)
        </p>
        <img
          className="img"
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c32fb04dea2c09a5e173f_gp-p-1080.png"
          alt=""
        />
        <H1 content="Redesigning all the things" />
        <p className="paragraph-1">
          You must be tired of reading designers redesigning stuff. But
          sometimes, it is worth it and actually needed. I'm proud to tell you
          it was one of those times. Our Logistics Tribe had grown a lot in a
          few months of operation. And the app that was supporting all this was
          lacking a lot in terms of experience. The fleet also grew a whole
          bunch, so drivers became more present in our day to day. Myself, in
          particular, spent a good amount of months talking to them here and
          there to learn more about their work and needs. That, alongside the
          studies of early days, gave me proper confidence to reach for a
          redesign as a main Tribe business goal at the last cycle of 2018.{' '}
          <br />
          <br />
          And we got it. iFood had just got the biggest series of investment yet
          and a good amount went for the Logistics Tribe. By then, we were now a
          small lovely official team around the app, composed of myself as a
          sole designer, a Product Manager, 2 Android developers and 2 Backend
          developers. The goal we set up for ourselves was to launch a brand new
          driver experience in 2 months. Parallel to that, we had to support the
          ongoing and growing operation. So, like you'd imagine, it was a rough
          challenge. <br />
          <br />
          One of the biggest takeaways here was that we had buy-in from all
          iFood's leadership to set the "driver experience" as our main KPI for
          the quarter. We sold a vision of how the product could be better
          entirely focused in the drivers actual needs and it went all great. My
          iterations by then needed to be transformed into actual product
          strategy.
        </p>
        <img
          className="img"
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2dd8165b8bedbbeab3bd49_ifood-4-p-1080.jpeg"
          alt=""
        />
        <p className="subtitle-text">
          Lots of sketches. It got up to a point that a 16gb ram Macbook Pro
          couldn't handle the Sketch file.
        </p>
        <H1 content="Creating a strategy" />
        <p className="paragraph-1">
          Iterations gave us a huge horizon of things we'd like to work on. But
          with limited time and having to support a growing operation, we
          focused a lot on the basics. It was a deep research process into what
          were basic operations and features the driver and the system needed to
          have in order to maintain the plane flying... but more smoothly and
          higher. <br />
          <br />
          In order to that, we talked a lot to drivers. We'd go out in the wild
          to talk to them, constantly. And it was the best thing ever. Only then
          we started to notice what was needed, must have things and what stuff
          could be done in future calmer times. This was groundwork as well for
          an Android architecture redesign. So we were hand in hand, design and
          development, rewriting stuff so we could start right, knowing every
          bit of the system ourselves.
        </p>
        <img
          className="img"
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2dd81686f417702524af8e_ifood-3-p-1080.jpeg"
          alt=""
        />
        <p className="subtitle-text">
          This is legit proof I'm a real designer. I call post-its my strategy.
        </p>
        <img
          className="img"
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2da0815b8bedd0ceb1108d_ifood-img-4.png"
          alt=""
        />
        <p className="subtitle-text">
          Spoiler: I ended up working at Loggi too. The world spins!
        </p>
        <H1 content="Launching and learning" />
        <p className="paragraph-1">
          Even before launching the first version of the new experience, we
          already had a great roadmap structured ahead of us. The studies and
          knowledge acquired in the early days up to the point of actually
          having something to beta test out, were key to understating strategy
          in a broader sense in regards to our product context. The relationship
          we had created within our team, of true companionship, was essential
          to collaborating and having a batter shaped work. I learned a lot
          about how design and PM should relate. And by that, I mean: always and
          forever. Designers and Product Managers are two sides of the same coin
          and they must stay together. And that was so beneficial to our product
          and process. And not only, development should be talking strategy,
          roadmap and experience too. There is so much to gain from having all
          disciplines talking about everything.
          <br />
          <br />
          And of course, setting the "driver experience" or "user" experience as
          the main objective of a team is indeed challenging. Specially because
          measuring such things is very difficult. So we had to set up a lot of
          ways to understand if drivers were happier. And by that I mean, lots
          of research. There was times were we'd go full on methods and times
          where we simply talked to them, no brainer. The important lesson was
          to never stop talking. Always being close by, reachable. And because
          of all that, I believe that we were very successful, launching a
          product that got metrics a lot up, drivers more happier and the
          management of our system more in place.
        </p>
      </div>
      <div className="large-container">
        <img
          className="img"
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c0775d44cb093dd267535_ifd1-p-1600.png"
          alt=""
        />
        <img
          className="img"
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c07756298aa2f0dc2e5ef_ifd0-p-1600.png"
          alt=""
        />
        <img
          className="img"
          src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c095b2839e0db5df582f1_ifd2-p-1600.png"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
}
