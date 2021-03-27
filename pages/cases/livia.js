import React from "react";
import CaseInfo from "../../components/molecules/CaseInfo";
import AppBar from "../../components/atoms/AppBar";
import BreadCrumb from "../../components/atoms/BreadCrumb";
import CaseHeader from "../../components/molecules/CaseHeader";
import Footer from "../../components/molecules/Footer";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { NextSeo } from "next-seo";
import SectionDivider from "../../components/molecules/SectionDivider";
import Statement from "../../components/molecules/Statement";

export default function LiviaPro() {
  return (
    <div className="global-wrapper">
      <NextSeo
        title="livia pro - danilo leal"
        canonical="https://daniloleal.co/cases/livia"
        openGraph={{
          url: "https://daniloleal.co/cases/livia",
          title: "livia pro - danilo leal",
          images: [
            {
              url: "https://i.ibb.co/yXb5rGP/livia.png",
              alt: "livia pro - danilo leal",
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
          pathNameTwo="Livia Pro"
          goToTwo="/cases/livia"
        />
        <CaseHeader
          title="Livia Pro"
          summary="Being healthy is communicating rightfully. With Livia, we were tackling one of the most fundamental health care problem out there: communication."
        />
        <CaseInfo
          role="Product Design & Research"
          period="Mid 2019"
          stack="PWA"
          links={[
            "Some shots: ",
            <a
              href="https://dribbble.com/shots/7001777-LiviaPro-Health-Events"
              className="cursor-pointer font-medium text-draplin text-sm hover:text-gray-900 dark:hover:text-white transition-all"
            >
              one
            </a>,
            " and ",
            <a
              href="https://dribbble.com/shots/6866395-LiviaPro-Your-Complete-Health-Recordznzzzzz"
              className="cursor-pointer font-medium text-draplin text-sm hover:text-gray-900 dark:hover:text-white transition-all"
            >
              two.
            </a>,
          ]}
        />
        <SectionDivider part="1" section="Company context" />
        <h1 className="h1">What's about</h1>
        <p className="paragraph-1">
          Well... healthcare. And I'm rewriting this article about my experience
          working in a health tech company in mid-2020, so you'd know by now
          that the world was very different back then, pre-pandemic. Tackling
          health care with technology and design is a bit of a challenge. This
          goes around a major problem in regards to how health is set up in the
          world... for the most part: treating the disease. It's hard to offer
          something other than a cure to a patient suffering. That's the
          shortest explanation ever on why the pharmaceutical industry thrives.
          The most adequate way of proposing a solution of some sort is by going
          in the prevention route.
          <br />
          <br />
          Livia was a product that I worked on when in the company Nexa. This
          company was housed by the biggest lab owner in South America called
          Dasa. So, you're right to suppose that we, back there, had a good
          amount of data. And well, by our pandemic 2020 knowledge, we know that
          data, in health settings, is gold. Especially if you want to visualize
          how patient well-being has shifted in a given period. And this was our
          field space of work.
        </p>
        <SectionDivider part="2" section="Product Development" />
        <h1 className="h1">About the product</h1>
        <p className="paragraph-1">
          When we go to see doctors and go through lab exams, we generate a
          bunch of useful data. Not only of ourselves but about our demographic
          as well. And I'd imagine everyone goes through a medical appointment
          from time to time. At least in Brazil, by our research, most doctors
          won't do or prescribe anything without lab results. There are a few
          exceptions for when you might be suffering in a really immediate way.
          But most times, they do ask for a ton of stuff. Both you and the
          doctor kinda suffer when this happens. First, doing exams is very
          tiring and time-consuming. Second, doctors get tired of only seeing a
          frame of you, the frame from the exams they asked you. That was our
          main focus at the beginning of Livia, gathering data from your health
          life so we could upgrade treatment and prevention.
          <br />
          <br />
          The strategy we were laying out was to focus on the doctor's
          experience. This was mostly a result of our very exploratory research
          when trying to find a reason for the company to exist. We knew that a
          bunch of medical record products already existed. But at Dasa/Nexa, we
          had the utmost advantage of having sh*t loads of data. The first
          challenge was to organize all of it so we could put it on a screen.
          That's when we started to go deep into what's about with the current
          doctor's experience in Brazil.
        </p>
        <Statement
          title="The problem"
          description="Doctors can't see beyond the present state of one's health. In order to a precise diagnostic and an effective treatment, seeing the big picture of a patient's health is key. And there wasn't an easy way to do it."
        />
        <h1 className="h1">Doctors are legit databases</h1>
        <p className="paragraph-1">
          Most doctors eat up any SQL type of database in their lunch. Their
          heads are full SSD loaded with data from their patients. The most
          ideal place to be in when seeing you at the clinic is having all your
          medical records at hand, easy to scan through. We interviewed a bunch
          of doctors and most of them suffered from only having little frames of
          the patient's health condition. Prevention is even more challenging if
          doctors can't see a big picture of where are you coming from and to
          where you're probably heading. <br />
          <br />
          There's this basic framework for analyzing one's claims when in a
          clinic called SOAP, which stands for Subjective, Objective, Review
          (Avaliação in Portuguese), and Plan. This tool is from an approach of
          medical schooling called (I'm hard translating here) Medical Records
          Problem and Evidence Oriented. Data is at the heart of this
          methodology of medicine making. <br />
          <br />
          We spent most of our early months working in it by trying to figure
          out what was really valuable to doctors in this context, practicing
          clinic. How information should be displayed, what are the type of data
          they wanted screaming at their faces when a patient entered the room,
          and what could be placed in a detailed view for a more holistic
          analysis of their health later on and so forth.
        </p>
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2dd8735b8bed970fb3c09b_livia-2-p-1080.jpeg"
            alt="Me looking at too many post its."
          />
        </Zoom>
        <p className="subtitle-text">
          There you go. Your classical designer-post-it-portfolio-image. Had to
          do it. Post-its are actually great!
        </p>
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2dd87486f417a41224b34e_livia-1-p-1080.jpeg"
            alt="Me pointing to a specific post-it."
          />
        </Zoom>
        <p className="subtitle-text">
          Categorizing research findings. See: post-its works!
        </p>
        <SectionDivider part="3" section="Results" />
        <h1 className="h1">Next chapters</h1>
        <p className="paragraph-1">
          Dasa is a huge huge company. Most of its labs were bought. And there
          aren't only labs, they have hospitals too. And each one of these
          companies had its data set structured in its own specific way. There
          was a tricky word that was the main objective at Nexa for a good
          while: interoperability. This stands for different organized
          information having a way of communicating with each other. A system
          would be needed to set some kind of pattern in the way these data
          would communicate. However, this is a huge problem that will be going
          on for years. Meanwhile, our focus on experience got a little thrown
          at sides and this took me off a bit.
          <br />
          <br />
          But, despite that, health care is a major industry that strongly needs
          a good product strategy. These problems resolved could save someone
          from a very serious hazard. The pandemic striking upon us reminds us
          that without health, we can't go on. I and the team did good work
          setting up a vision for how the product could be. Livia Pro lived for
          a short period, with a couple of users, but it is, to this day, very
          promising. We gathered lots of good feedback from the leadership and
          the doctors that were friendly enough to try it on. There are not many
          quantitative figures to display because the product couldn't be
          launch. But it is promising to this day.
        </p>
        <SectionDivider part="4" section="Inside the designs" />
      </div>
      <div className="default-container">
        <h2 className="h2">Envisioning UI</h2>
        <p className="paragraph-1">
          A great chunk of my time at Nexa was trying to get buy-in from a
          bottom-up vision we had. We needed to materialize what the product
          could be if the holding as a whole had organized itself to allow it to
          grow into that. We spent a few months polishing an over-the-top UI to
          demonstrate the ambition. None was developed, it wasn't even the
          point. I really felt like I was making a pitch for my own company. We
          went bananas with the interactions and data we could have. Full-on
          Dribbble-esk. Sorry. But it turned out pretty impressive! This video
          below demonstrates what could've been the doctors' experience.
        </p>
      </div>
      <div className="large-container">
        <div className="pb-6">
          <video
            src="/videos/livia-vision.mov"
            className="img"
            preload="auto"
            playsinline
            controls
            autoplay
          ></video>
        </div>
      </div>
      <div className="default-container">
        <h2 className="h2">Further still</h2>
        <p className="paragraph-1">
          We also took a big leap tackling the patients' experience. It was part
          of the pitch that we could be a powerhouse health-tech company, going
          full scope into the health actors. We did a pretty great envisioning
          here too. Some really complex prototypes that made me crazy sometimes.
          And it was a moment to be crazy indeed. We leveraged a bunch of open
          sources design tooling for laying out a valuable vision.
        </p>
      </div>
      <div className="large-container">
        <div className="pb-6">
          <video
            src="/videos/livia-show.mov"
            className="img"
            preload="auto"
            playsinline
            controls
            autoplay
          ></video>
        </div>
      </div>
      <div className="default-container">
        <h2 className="h2">Evolution report</h2>
        <p className="paragraph-1">
          This was one of the features we managed to ship before I left.
          Evolution report is a must-have for doctors. It was the essence of the
          seed we were cultivating there. We integrated the product to a few of
          the lab exams we had access to and it was enough for displaying a
          table at the UI showing the evolution. We also plugged in a list view
          for a more organized chronological examination.
        </p>
      </div>
      <div className="large-container">
        <div className="pb-6">
          <video
            src="/videos/livia-table.mov"
            className="img"
            preload="auto"
            playsinline
            controls
            autoplay
          ></video>
          <p className="subtitle-text">
            Early prototypes. Below are some shots from the production branch by
            the time I left.
          </p>
        </div>

        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c119c00a08815c21669b1_N3-p-1600.png"
            alt="Screenshots of some of the UI"
          />
        </Zoom>
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c119c9d335b11279b6dae_N2-p-1600.png"
            alt="Screenshots of some of the UI"
          />
        </Zoom>
      </div>
      <Footer />
    </div>
  );
}
