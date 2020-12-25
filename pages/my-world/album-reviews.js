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
          summary="It's not actually album reviews though. Here I try to dissect how some of those pieces made me feel. What struck at me when listening to these songs and why they're forever carved out in my heart and mind."
        />
      </div>
      <div className="default-container">
        <div>
          <ContentCard
            cardCover="https://images-na.ssl-images-amazon.com/images/I/81opDuEYnGL._AC_SL1500_.jpg"
            cardTitle="Carrie & Lowell"
            cardSubtitle="Sufjan Stevens"
            cardInfo="2015"
            cardPage="/my-world/album-reviews/sufjan-carrie"
          />
        </div>
      </div>
    </div>
  );
}
