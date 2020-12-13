import React from 'react';
import AppBar from '../../components/atoms/AppBar';
import BreadCrumb from '../../components/atoms/BreadCrumb';
import CaseHeader from '../../components/templates/CaseHeader';
import ContentCard from '../../components/templates/ContentCard';

export default function BookReviews() {
  return (
    <div className="h-full dark:bg-blackish pb-10">
      <AppBar goBackTo="/my-world" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="My world /"
          goToTwo="/my-world"
          pathNameThree="Book reviews"
          pathNameFour=""
        />
        <CaseHeader
          title="Book reviews"
          summary="Those include giving form to other types of expressions. I really like to explore my visual and musical senses by designing and creating pieces that resembles my current state of mind."
        />
      </div>
      <div className="large-container">
        <div className="grid sm:grid-cols-3 gap-6 sm:px-2 p-4">
          <ContentCard
            cardCover="https://m.media-amazon.com/images/I/41v99rTCYiL.jpg"
            cardTitle="Ruined by design"
            cardSubtitle="Mike Monteiro"
            cardInfo="2014"
            cardPage="/my-world/album-reviews/pense-alem-daquilo"
          />
          <ContentCard
            cardCover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzaPLX9hCOo2QGPfMg5QA1679vUpzHgVVCsQ&usqp=CAU"
            cardTitle="Shape Up"
            cardSubtitle="Ryan Singer"
            cardInfo="202020"
          />
          <ContentCard
            cardCover="https://f4.bcbits.com/img/a0465067803_10.jpg"
            cardTitle="Realidade, vida e fé"
            cardSubtitle="Pense"
            cardInfo="2018"
          />
        </div>
      </div>
    </div>
  );
}
