import React from 'react';
import AppBar from '../components/atoms/AppBar';
import BreadCrumb from '../components/atoms/BreadCrumb';
import CaseHeader from '../components/templates/CaseHeader';
import CallOut from '../components/templates/CallOut';
import H1 from '../components/atoms/typography/H1';
import Footer from '../components/templates/Footer';

export default function MyWorld() {
  return (
    <div className="h-full dark:bg-blackish pb-10">
      <AppBar goBackTo="/" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="My world"
          goToTwo="/my-world"
          pathNameThree=""
          pathNameFour=""
        />
        <CaseHeader
          title="My world"
          summary="Those include giving form to other types of expressions. I really like to explore my visual and musical senses by designing and creating pieces that resembles my current state of mind."
        />
        <H1 content="Design related"></H1>
        <CallOut
          subjectLogo="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d90dfd2e0670331b10724_logos%3A%20ifood.svg"
          subjectName="Graphic Design"
          subjectSummary="I grew up in design by doing graphic stuff. Ranging it from logos, to whole branding packages to album cover designs. Seeing stuff being physical is very satisfying."
          casePath="/my-world/graphic-design"
          linkString="See stuff"
        />

        <H1 content="Music production"></H1>
        <CallOut
          subjectLogo="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c2ee8b26f2a64d7237f60_nexa-logo.svg"
          subjectName="Flora Park"
          subjectSummary="Dream band. This one is with some of my most special friends, where we dream together of being a hardcore/pop-punk band. We self produced and recorded our first album in 2017, called Chutando Nuvens. Or in english: Cloud Kicking."
          casePath="/cases/LiviaPro"
          linkString="Hear the album"
        />
        <CallOut
          subjectLogo="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d90dfd2e06767b9b1072a_logos%3A%20rapiddo.svg"
          subjectName="Sede"
          subjectSummary="This is my main music project. One man band type of stuff. I write, record and produce most songs in a minimal gear set up. In 2017, I released and compiled my first full length record called: Antes que a natureza morra. Or in english: Before nature dies."
          casePath="/cases/Rapiddo"
          linkString="Hear the album"
        />

        <H1 content="That's me inside your head"></H1>
        <p className="subtitle-text">That's a NOFX reference. So what?!'</p>
        <CallOut
          subjectLogo="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c2ee8b26f2a64d7237f60_nexa-logo.svg"
          subjectName="Album reviews"
          subjectSummary="The albums that end up stucking with me are those with which I've developed a relationship. We've a history together. Here I cover some of these pieces trying to express what they mean to me."
          casePath="/my-world/album-reviews"
          linkString="Check em out"
        />
        <CallOut
          subjectLogo="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c2ee8b26f2a64d7237f60_nexa-logo.svg"
          subjectName="Book reviews"
          subjectSummary="I'm a slow reader. Books are hard to read for me. But I also tend to develop some sort of relationship with the ones that got to me. These really shaped my thinking and my understanding of my place in this world."
          casePath="/my-world/book-reviews"
          linkString="Check em out"
        />
        <CallOut
          subjectLogo="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c2ee8b26f2a64d7237f60_nexa-logo.svg"
          subjectName="Thinking out loud"
          subjectSummary="That's just me ranting and rambling about stuff. My first personal blog in years using the internet. I feel like I'm using it right for the first time."
          casePath="/my-world/thinking"
          linkString="Explore my brain"
        />
      </div>
      <Footer />
    </div>
  );
}
