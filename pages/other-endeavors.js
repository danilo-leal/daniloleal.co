import React from 'react';
import AppBar from '../components/atoms/AppBar';
import BreadCrumb from '../components/atoms/BreadCrumb';
import CaseHeader from '../components/templates/CaseHeader';
import CallOut from '../components/templates/CallOut';

export default function OtherEndeavors() {
  return (
    <div className="h-full dark:bg-blackish pb-10">
      <AppBar goBackTo="/" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          pathNameTwo="Other endeavors"
          pathNameThree=""
          pathNameFour=""
        />
        <CaseHeader
          title="Other endeavors"
          summary="Those include giving form to other types of expressions. I really like to explore my visual and musical senses by designing and creating pieces that resembles my current state of mind."
        />
        <CallOut
          subjectLogo="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d90dfd2e0670331b10724_logos%3A%20ifood.svg"
          subjectName="Graphic Design"
          subjectSummary="I grew up in design by doing graphic stuff. Ranging it from logos, to whole branding packages to album cover designs. Seeing stuff being physical is very satisfying."
          casePath="/cases/iFood"
          linkString="See stuff"
        />
        <CallOut
          subjectLogo="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c2ee8b26f2a64d7237f60_nexa-logo.svg"
          subjectName="Livia Pro"
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
      </div>
    </div>
  );
}
