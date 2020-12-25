import React from 'react';
import AppBar from '../components/atoms/AppBar';
import BreadCrumb from '../components/atoms/BreadCrumb';
import CaseHeader from '../components/templates/CaseHeader';
import CallOut from '../components/templates/CallOut';
import Footer from '../components/templates/Footer';

export default function MyWorld() {
  return (
    <div className="global-wrapper">
      <AppBar goBackTo="/" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="My world"
          goToTwo="/my-world"
        />
        <CaseHeader
          title="My world"
          summary="This is what cool tech kids call digital garden. It's a place for my creations to live, a safe outlet for expressing myself. Here's home in the internet."
        />
        <h1 className="h1">Design related</h1>
        <CallOut
          subjectLogo="https://svgshare.com/i/SG4.svg"
          subjectName="Graphic Design"
          subjectSummary="I grew up in design by doing graphic stuff. Ranging it from logos, to whole branding packages to album cover designs. Seeing stuff being physical is very satisfying."
          casePath="/my-world/graphic-design"
          linkString="See stuff"
        />
        <h1 className="h1">That's me inside your head</h1>
        <a
          href="https://www.youtube.com/watch?v=0IxYbx4nRCw&ab_channel=ResurrectionFest"
          className="text-tiny text-gray-500 hover:font-medium hover:text-draplin hover:ml-2"
        >
          That's a NOFX reference!
        </a>
        <CallOut
          subjectLogo="https://svgshare.com/i/SEx.svg"
          subjectName="Thinking out loud"
          subjectSummary="That's just me ranting and rambling about stuff. My first personal blog in years using the internet. I feel like I'm using it right for the first time."
          casePath="/coming-soon"
          linkString="Explore my brain"
        />
        <CallOut
          subjectLogo="https://svgshare.com/i/SMn.svg"
          subjectName="Album reviews"
          subjectSummary="The albums that end up stucking with me are those with which I've developed a relationship. We've a history together. Here I cover some of these pieces trying to express what they mean to me."
          casePath="/coming-soon"
          linkString="Check em out"
        />
        <CallOut
          subjectLogo="https://svgshare.com/i/SP9.svg"
          subjectName="Book reviews"
          subjectSummary="I'm a slow reader. Books are hard to read for me. But I also tend to develop some sort of relationship with the ones that got to me. These really shaped my thinking and my understanding of my place in this world."
          casePath="/coming-soon"
          linkString="Check em out"
        />
        <h1 className="h1">Music making</h1>
        <CallOut
          subjectLogo="https://svgshare.com/i/SFB.svg"
          subjectName="Flora Park"
          subjectSummary="Dream band. This one is with some of my most special friends, where we dream together of being a hardcore/pop-punk band. We self produced and recorded our first album in 2017, called Chutando Nuvens. Or in english: Cloud Kicking."
          casePath="http://bandaflorapark.bandcamp.com/album/chutando-nuvens"
          linkString="Hear the album"
        />
        <CallOut
          subjectLogo="https://svgshare.com/i/SFB.svg"
          subjectName="Sede"
          subjectSummary="This is my main music project. One man band type of stuff. I write, record and produce most songs in a minimal gear set up. In 2017, I released and compiled my first full length record called: Antes que a natureza morra. Or in english: Before nature dies."
          casePath="http://sede.bandcamp.com/album/antes-que-a-natureza-morra"
          linkString="Hear the album"
        />
      </div>
      <Footer />
    </div>
  );
}
