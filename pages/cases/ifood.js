import React, { useRef } from 'react';
import { NextSeo } from 'next-seo';
import CaseInfo from '../../components/molecules/CaseInfo';
import AppBar from '../../components/atoms/AppBar';
import BreadCrumb from '../../components/atoms/BreadCrumb';
import CaseHeader from '../../components/molecules/CaseHeader';
import DeepCards from '../../components/molecules/DeepCards';
import Footer from '../../components/molecules/Footer';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function iFood() {
  return (
    <div className="global-wrapper">
      <NextSeo
        title="iFood - danilo leal"
        canonical="https://daniloleal.co/cases/ifood"
        openGraph={{
          url: 'https://daniloleal.co/cases/ifood',
          title: 'iFood - danilo leal',
          images: [
            {
              url: 'https://i.ibb.co/wCfKY9z/ifood.png',
              alt: 'iFood - danilo leal',
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
          pathNameTwo="iFood"
          goToTwo="/cases/ifood"
        />
        <CaseHeader
          title="iFood"
          summary="Designed the new driver app from the ground up. Small team, challenging goals and huge impact. A product that is very close to my heart. What a ride!"
        />
        <CaseInfo
          role="Product Design & Research"
          period="From early 2018 to mid 2019"
          stack="Android mostly, some web"
          links={[
            <a
              href="https://play.google.com/store/apps/details?id=br.com.ifood.driver.app&hl=pt_BR"
              className="cursor-pointer font-medium text-draplin text-sm hover:text-gray-900 dark:hover:text-white transition-all"
            >
              Google Play
            </a>,
            ', ',
            <a
              href="https://www.youtube.com/watch?v=J8TWkdUS1Fc"
              className="cursor-pointer font-medium text-draplin text-sm hover:text-gray-900 dark:hover:text-white transition-all"
            >
              promo video
            </a>,
            ' and ',
            <a
              href="https://dribbble.com/shots/6566232-iFood-Driver-Performance"
              className="cursor-pointer font-medium text-draplin text-sm hover:text-gray-900 dark:hover:text-white transition-all"
            >
              shots.
            </a>,
          ]}
        />
        <h1 className="h1">Quick callout</h1>
        <p className="paragraph-1">
          This article goes through my story with iFood. I also have two
          detailed articles going through two specific features I've worked on
          that I'm very proud of. Don't forget to peek at those!
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <DeepCards
            title="Driver Performance"
            description="Structuring view for drivers to measure their performances."
            pathDeep="/cases/ifood-performance"
            deepLinkString="Go deep"
          />
          <DeepCards
            title="Driver Onboarding"
            description="Work to have the drivers onboarding pipes flowing."
            pathDeep="/cases/ifood-onboarding"
            deepLinkString="Go deep"
          />
        </div>
        <div className="text-center grid grid-cols-3 gap-2 items-center py-8">
          <div className="w-full h-0.5 bg-gray-100 dark:bg-black"></div>
          <div>
            <p className="text-tiny uppercase font-semibold tracking-wider text-gray-500">
              Part 1
            </p>
            <p className="text-tiny uppercase tracking-wide font-medium text-draplin">
              Company context
            </p>
          </div>
          <div className="w-full h-0.5 bg-gray-100 dark:bg-black"></div>
        </div>
        <h1 className="h1">Starting out</h1>
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
          because it was almost like a startup inside a startup. It was a very
          small team, with huge goals set upon us so we could prove that it was
          worth it setting up all this stuff. Among all the tech involved in
          creating a logistics operation, the Driver App is one of the most
          important applications.
        </p>
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5ac50df80de5a1a5d478f2_IMG_2922-min-p-1080.jpeg"
            alt="iFood's early office."
          />
        </Zoom>
        <p className="subtitle-text">
          This is what I'd call a messy startup office. There's a beauty to it.
        </p>
        <h1 className="h1">Early days</h1>
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
          But, in the first months, the team and I were not focusing too much on
          upgrading the app. There were so many other foundational decisions we
          had to make to have a proper business and experience functioning. It
          even took a while to gather a proper team to take care of the app.
          Meanwhile, I had never stopped doodling around with dreamlike concepts
          of the product. This no strings attached process was essential to set
          space for lots of studying. I learned so much about the logistics,
          food delivery and gig economy industry by that time. With extensive
          benchmark and focus, I started to get ready to set up a real
          proposition for how we could set the Driver App as a more robust,
          thoughtful and experience-driven product.
        </p>
      </div>
      <div className="large-container">
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5ac782d647e72b39065d93_old-driver-app.png"
            alt="Screenshots from the first app version."
          />
        </Zoom>
      </div>
      <div className="default-container">
        <p className="paragraph-1">
          Up there you see the UI design that the team created in the early days
          of operation. The cool thing is, this was pretty much the whole
          product, in a nutshell. There is, if you look closer, gold in there.
          Like the Settings page, in the far right, with only a "log out"
          button. If you do not find this very minimalistic, there's something
          up with you.
          <br />
          <br />
          The only spice I gave to this by that time was the hat motorcycle
          logo. And that's the logo for the app to this day. :)
        </p>
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c32fb04dea2c09a5e173f_gp-p-1080.png"
            alt="Screenshot of what Google Play looked like."
          />
        </Zoom>
        <div className="text-center grid grid-cols-3 gap-2 items-center py-8">
          <div className="w-full h-0.5 bg-gray-100 dark:bg-black"></div>
          <div>
            <p className="text-tiny uppercase font-semibold tracking-wider text-gray-500">
              Part 2
            </p>
            <p className="text-tiny uppercase tracking-wide font-medium text-draplin">
              Product Development
            </p>
          </div>
          <div className="w-full h-0.5 bg-gray-100 dark:bg-black"></div>
        </div>
        <h1 className="h1">Redesigning all the things</h1>
        <p className="paragraph-1">
          You must be tired of reading designers redesigning stuff. But
          sometimes, it is worth it and actually needed. I'm proud to tell you
          it was one of those times. Our Logistics Tribe had grown a lot in a
          few months of operation. And the app that was supporting all this was
          lacking a lot in terms of experience. The fleet also grew a whole
          bunch, so drivers became more present in our day to day. I, in
          particular, spent a good amount of months talking to them here and
          there to learn more about their work and needs. That, alongside the
          studies of the early days, gave me proper confidence to reach for a
          redesign as a main Tribe business goal at the last cycle of 2018.
          <br />
          <br />
          And we got it. iFood had just got the biggest series of investments
          yet and a good amount went for the Logistics Tribe. By then, we were
          now a small lovely official team around the app, composed of myself as
          a sole designer, a Product Manager, 2 Android developers and 2 Backend
          developers. The goal we set up for ourselves was to launch a brand new
          driver experience in 2 months. Parallel to that, we had to support the
          ongoing and growing operation. So, as you'd imagine, it was a rough
          challenge. <br />
          <br />
          One of the biggest takeaways here was that we had buy-in from all
          iFood's leadership to set the "driver experience" as our main KPI for
          the quarter. We sold a vision of how the product could be better
          entirely focused on the drivers' actual needs and it went all great.
          My iterations by then needed to be transformed into actual product
          strategy.
        </p>
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2dd8165b8bedbbeab3bd49_ifood-4-p-1080.jpeg"
            alt="Bunch of Sketch artboards screenshot."
          />
        </Zoom>
        <p className="subtitle-text">
          Lots of sketches. It got up to a point that a 16gb ram Macbook Pro
          couldn't handle the Sketch file.
        </p>
        <h1 className="h1">Creating a strategy</h1>
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
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2dd81686f417702524af8e_ifood-3-p-1080.jpeg"
            alt="Post its on a table."
          />
        </Zoom>
        <p className="subtitle-text">
          This is legit proof I'm a real designer. I call post-its my strategy.
        </p>
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2da0815b8bedd0ceb1108d_ifood-img-4.png"
            alt="Me talking to some drivers."
          />
        </Zoom>
        <p className="subtitle-text">
          Spoiler: I ended up working at Loggi too. The world spins!
        </p>
        <h1 className="h1">Launching and learning</h1>
        <p className="paragraph-1">
          Even before launching the first version of the new experience, we
          already had a great roadmap structured ahead of us. The studies and
          knowledge acquired in the early days up to the point of actually
          having something to beta test out were key to understating strategy in
          a broader sense in regards to our product context. The relationship we
          had created within our team, of true companionship, was essential to
          collaborating and having a batter shaped work. I learned a lot about
          how design and PM should relate. And by that, I mean: always and
          forever. Designers and Product Managers are two sides of the same coin
          and they must stay together. And that was so beneficial to our product
          and process. And not only, but development should also be talking
          strategy, roadmap and experience too. There is so much to gain from
          having all disciplines talking about everything.
          <br />
          <br />
          And of course, setting the "driver experience" or "user" experience as
          the main objective of a team is indeed challenging. Especially because
          measuring such things is very difficult. So we had to set up a lot of
          ways to understand if drivers were happier. And by that I mean, lots
          of research. There were times where we'd go full-on methods and times
          where we simply talked to them, no brainer. The important lesson was
          to never stop talking. Always being close by, reachable. And because
          of all that, I believe that we were very successful, launching a
          product that got metrics a lot up, drivers happier and the management
          of our system more in place.
        </p>
        <div className="text-center grid grid-cols-3 gap-2 items-center py-8">
          <div className="w-full h-0.5 bg-gray-100 dark:bg-black"></div>
          <div>
            <p className="text-tiny uppercase font-semibold tracking-wider text-gray-500">
              Part 3
            </p>
            <p className="text-tiny uppercase tracking-wide font-medium text-draplin">
              Design work
            </p>
          </div>
          <div className="w-full h-0.5 bg-gray-100 dark:bg-black"></div>
        </div>
        <h1 className="h1">Some designs</h1>
        <h2 className="h2">Driver's cockpit and navigation</h2>
        <p className="paragraph-1">
          We introduced a well-established UI pattern using the bottom
          navigation, where we'd display the foundational environments of the
          app when the driver wasn't on the route. The home, or the driver
          cockpit, as we'd call it sometimes, was where drivers would land most
          frequently, checking their performances, checking the map out for
          surge pricing, setting themselves on or off of work, and changing
          vehicles by which they'd be making deliveries.
        </p>
      </div>
      <div className="large-container">
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c0775d44cb093dd267535_ifd1-p-1600.png"
            alt="Screenshots of some UIs of the app"
          />
        </Zoom>
      </div>
      <div className="default-container">
        <h2 className="h2">Delivery journey</h2>
        <p className="paragraph-1">
          This undoubtedly was the core flow of the product, so we put lots of
          effort into making a worthy offer UI, providing essential information
          for whether accept or not a route offer. When onto some delivery, the
          driver needed to provide check-ins and check-outs of the waypoints. We
          designed a miss-click-free interaction for this structural action.
        </p>
      </div>
      <div className="large-container">
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c07756298aa2f0dc2e5ef_ifd0-p-1600.png"
            alt="Screenshots of some UIs of the app"
          />
        </Zoom>
      </div>
      <div className="default-container">
        <h2 className="h2">Much more</h2>
        <p className="paragraph-1">
          The driver app was filled with screens and communication. It was a
          simple yet complex product. In the background, lots of stuff were
          running to secure a safe delivery, free of fraud and at the same time,
          easily explained to new-comers. We had a whole bunch of new drivers
          popping in week over week. Our main goal was to make the most
          auto-explanatory possible. Everything you needed to know as a driver
          would be easily accessed within the app experience.
        </p>
      </div>

      <div className="large-container">
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c095b2839e0db5df582f1_ifd2-p-1600.png"
            alt="Screenshots of some UIs of the app"
          />
        </Zoom>
      </div>
      <Footer />
    </div>
  );
}
