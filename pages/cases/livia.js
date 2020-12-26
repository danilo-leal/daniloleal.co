import React from 'react';
import CaseInfo from '../../components/molecules/CaseInfo';
import AppBar from '../../components/atoms/AppBar';
import BreadCrumb from '../../components/atoms/BreadCrumb';
import CaseHeader from '../../components/molecules/CaseHeader';
import Footer from '../../components/molecules/Footer';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function LiviaPro() {
  return (
    <div className="global-wrapper">
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
        />
        <h1 className="h1">What's about</h1>
        <p className="paragraph-1">
          Well... healthcare. And I'm rewriting this article of my experience
          working in a health tech company mid-2020, so you'd know by now that
          the world was very different back then, pre-pandemic. Tackling health
          care with technology and design is a bit of a challenge. This goes
          around a major problem in regards to how health is set up in the
          world... for the most part: treating the disease. It's hard to offer
          something other than a cure to a patient suffering. That's the
          shortest explanation ever on why the pharmaceutical industry thrives.
          The most adequate way of proposing a solution of some sort is by going
          in the prevention route.
          <br />
          <br />
          Livia is a product that I worked in when in the company Nexa. This
          company was housed by the biggest lab owner in South America called
          Dasa. So, you're right to suppose that we, back there, had a good
          amount of data. And well, by our pandemic 2020 knowledge, we know that
          data, in health settings, is gold. Especially if you want to visualize
          how a patient well-being has shifted in a given period. And this was
          our field space of work.
        </p>
        <h1 className="h1">About the product</h1>
        <p className="paragraph-1">
          When we go to see doctors and go through exams, we generate a bunch of
          useful data. Not only of ourselves but about our demographic as well.
          And I'd imagine everyone goes through a medical appointment from time
          to time. Every time we do it, we generate more data. At least in
          Brazil, by our research, most doctors won't do or prescribe anything
          without lab results of multiple exams. There are a few exceptions for
          when you might be suffering in a really immediate way. But most times,
          they do ask for a ton of stuff. Both you and the doctor kinda suffers
          when this happens. First, doing exams is very tiring and
          time-consuming. Second, doctors get tired of only seeing a frame of
          you, the frame from the exams they asked you. That was our main focus
          at the beginning of Livia, gathering data from your health life so we
          could upgrade treatment and prevention.
          <br />
          <br />
          The company chose to go for focusing on the doctor's experience. There
          was a lot of already very set up products around medical records. But
          at Dasa/Nexa, we had the upmost advantage of having sh*t loads of
          data. The first challenge was to organize all of it so we could put it
          on a screen. That's when we started to go deep into what's about with
          the current doctor's experience in Brazil.
        </p>
        <h1 className="h1">Doctors are legit databases</h1>
        <p className="paragraph-1">
          Most doctors eat up any SQL type of database in their lunch. Their
          heads are full SSD loaded with data from their patients. The most
          ideal place to be in when seeing you at the clinic is having all your
          medical records at hand, easy to scan through. We interviewed a bunch
          of doctors and most of them suffered from only having little frames of
          the patient health condition. Prevention is even more challenging if
          doctors can't see a big picture of where are you coming from and to
          where you're probably heading. <br />
          <br />
          There's this basic framework for analyzing one's claims when in a
          clinic called SOAP, which stands for Subjective, Objective, Review
          (Avaliação in Portuguese), and Plan. This tool is from an approach of
          clinics called (I'm hard translating here) Medical Records Problem and
          Evidence Oriented. Data is at the heart of this methodology of
          medicine making. <br />
          <br />
          We spent most of our early months working in it by trying to figure
          out what was really valuable to doctors in this context, practicing
          clinic. How information should be displayed, what are the type of data
          they wanted screaming at their faces when a patient entered the room,
          and what could be great placed in a detailed view for a more holistic
          analysis of their health later on.
        </p>
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2dd8735b8bed970fb3c09b_livia-2-p-1080.jpeg"
            alt=""
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
            alt=""
          />
        </Zoom>
        <p className="subtitle-text">
          Categorizing research findings. See: post-its works!
        </p>
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
          a good product strategy and focus on hard problems. These problems
          resolved could save someone from a very serious hazard. The pandemic
          striking upon us reminds us that without health, we can't go on. I and
          the team did good work of setting up a vision for how the product
          could be. The UIs attached at the bottom are from the product we
          launched to few users right before the company Nexa was integrated
          within Dasa itself.
          <br />
          <br />
          Livia Pro lived for a short period, with a couple of users, but it is,
          to this day, very promising. We gathered lots of good feedback from
          leadership. and doctors that were friendly enough to try it on. We saw
          future in a product that could disrupt an entire industry by being
          really focused on individual problems.
        </p>
      </div>
      <div className="large-container">
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c119c16111ab26daba91e_N1-p-1600.png"
            alt=""
          />
        </Zoom>
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c119c00a08815c21669b1_N3-p-1600.png"
            alt=""
          />
        </Zoom>
        <Zoom>
          <img
            className="img"
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c119c9d335b11279b6dae_N2-p-1600.png"
            alt=""
          />
        </Zoom>
      </div>
      <Footer />
    </div>
  );
}
