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
        <div className="grid sm:grid-cols-2 gap-6 sm:px-2 p-4">
          <ContentCard
            cardCover="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/f/4/8/9/490891459001457.jpg"
            cardTitle="Além daquilo que te cega"
            cardSubtitle="Pense"
            cardInfo="2014"
            cardPage="/my-world/album-reviews/pense-alem-daquilo"
          />
          <ContentCard
            cardCover="https://monkeybuzz.com.br/wp-content/uploads/2016/09/touche-amore-57e34cc05d49a-1024x1024.jpg"
            cardTitle="Stage Four"
            cardSubtitle="Touché Amoré"
            cardInfo="2016"
          />
          <ContentCard
            cardCover="https://images-na.ssl-images-amazon.com/images/I/81opDuEYnGL._AC_SL1500_.jpg"
            cardTitle="Carrie & Lowell"
            cardSubtitle="Sufjan Stevens"
            cardInfo="2015"
          />
          <ContentCard
            cardCover="https://f4.bcbits.com/img/a3535461608_10.jpg"
            cardTitle="Fade"
            cardSubtitle="Cloudkicker"
            cardInfo="2012"
          />
          <ContentCard
            cardCover="https://f4.bcbits.com/img/a0465067803_10.jpg"
            cardTitle="Realidade, vida e fé"
            cardSubtitle="Pense"
            cardInfo="2018"
          />
          <ContentCard
            cardCover="https://img.discogs.com/hGNjXIgwuxX3FToC7UhyzvSCjOo=/fit-in/600x595/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5196724-1572174585-6915.jpeg.jpg"
            cardTitle="The Difference Between Hell and Home"
            cardSubtitle="Counterparts"
            cardInfo="2013"
          />
          <ContentCard
            cardCover="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2011/04/Rancore-Album-Seiva-2011.jpg"
            cardTitle="Seiva"
            cardSubtitle="Rancore"
            cardInfo="2011"
          />
          <ContentCard
            cardCover="https://monkeybuzz.com.br/wp-content/uploads/2014/02/modernbaseball-youregonnamissitall.jpg"
            cardTitle="You're Gonna Miss It All"
            cardSubtitle="Modern Baseball"
            cardInfo="2014"
          />
        </div>
      </div>
    </div>
  );
}
