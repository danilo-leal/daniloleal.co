import React from 'react';
import AppBar from '../../components/atoms/AppBar';
import BreadCrumb from '../../components/atoms/BreadCrumb';
import CaseHeader from '../../components/templates/CaseHeader';

export default function Thinking() {
  return (
    <div className="h-full dark:bg-blackish pb-10">
      <AppBar goBackTo="/my-world" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="My world /"
          goToTwo="/my-world"
          pathNameThree="Thinking"
          pathNameFour=""
        />
        <CaseHeader
          title="Thinking"
          summary="Those include giving form to other types of expressions. I really like to explore my visual and musical senses by designing and creating pieces that resembles my current state of mind."
        />
      </div>
    </div>
  );
}
