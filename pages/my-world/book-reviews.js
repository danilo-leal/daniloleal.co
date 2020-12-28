import React from 'react';
import AppBar from '../../components/atoms/AppBar';
import BreadCrumb from '../../components/atoms/BreadCrumb';
import CaseHeader from '../../components/molecules/CaseHeader';
import ContentCard from '../../components/molecules/ContentCard';

export default function Sketch() {
  return (
    <div className="global-wrapper">
      <AppBar goBackTo="/my-world" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="My world /"
          goToTwo="/my-world"
          pathNameThree="Book reviews"
        />
        <CaseHeader
          title="Book reviews"
          summary="An exercise for self-remembering a bunch of words I've red."
        />
      </div>
      <div className="large-container">
        <div>
          <ContentCard
            cardCover="https://images-na.ssl-images-amazon.com/images/I/51RM71lAzKL.jpg"
            altImg="Picture of the Good Services book cover"
            cardTitle="Good Services"
            cardSubtitle="Lou Downe"
            cardInfo="2020"
            cardPage="/my-world/book-reviews/good-services"
          />
        </div>
      </div>
    </div>
  );
}
