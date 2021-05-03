import React from "react";
import { NextSeo } from "next-seo";
import AppBar from "../../components/atoms/AppBar";
import BreadCrumb from "../../components/atoms/BreadCrumb";
import CaseHeader from "../../components/molecules/CaseHeader";
import ContentCard from "../../components/molecules/ContentCard";

export default function BookReviews() {
  return (
    <div className="global-wrapper">
      <NextSeo
        title="book reviews - danilo leal"
        canonical="https://daniloleal.co/my-world/book-reviews"
        openGraph={{
          url: "https://daniloleal.co/my-world/book-reviews",
          title: "book reviews - danilo leal",
          images: [
            {
              url: "https://i.ibb.co/qmB0BNj/book-rev.png",
              alt: "book reviews - danilo leal",
              width: 1280,
              height: 720,
            },
          ],
        }}
      />
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
          summary="An exercise for self-remembering a bunch of words I've read."
        />
      </div>
      <div className="default-container">
        <div className="grid sm:grid-cols-2 gap-6">
          <ContentCard
            cardCover="https://images-na.ssl-images-amazon.com/images/I/71lTvDTij-L.jpg"
            altImg="Picture of the Understanding, Michael Porter book cover"
            cardTitle="Understanding, Michael Porter"
            cardSubtitle="Joan Magretta"
            cardInfo="2011"
            cardPage="/my-world/book-reviews/understanding-mp"
          />
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
