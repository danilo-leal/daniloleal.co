import React from 'react';
import AppBar from '../../components/atoms/AppBar';
import BreadCrumb from '../../components/atoms/BreadCrumb';
import CaseHeader from '../../components/templates/CaseHeader';
import ContentCard from '../../components/templates/ContentCard';

export default function AlbumReviews() {
  return (
    <div className="h-full dark:bg-blackish pb-10">
      <AppBar goBackTo="/my-world" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="My world /"
          goToTwo="/my-world"
          pathNameThree="Album reviews"
          pathNameFour=""
        />
        <CaseHeader
          title="Album reviews"
          summary="Those include giving form to other types of expressions. I really like to explore my visual and musical senses by designing and creating pieces that resembles my current state of mind."
        />
      </div>
      <div className="large-container">
        <div className="grid sm:grid-cols-3 gap-6 sm:px-2 p-4">
          <ContentCard
            cardCover="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/f/4/8/9/490891459001457.jpg"
            cardTitle="Além daquilo que te cega"
            cardSubtitle="Pense"
            cardInfo="2014"
            cardPage="/my-world/album-reviews/pense-alem-daquilo"
          />
          <ContentCard
            cardCover="https://f4.bcbits.com/img/a0465067803_10.jpg"
            cardTitle="Realidade, vida e fé"
            cardSubtitle="Pense"
            cardYear="2018"
          />
          <ContentCard
            cardCover="https://f4.bcbits.com/img/a0465067803_10.jpg"
            cardTitle="Realidade, vida e fé"
            cardSubtitle="Pense"
            cardYear="2018"
          />
        </div>
      </div>
    </div>
  );
}
