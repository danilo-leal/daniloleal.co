import React from 'react';
import AppBar from '../../components/atoms/AppBar';
import BreadCrumb from '../../components/atoms/BreadCrumb';
import CaseHeader from '../../components/templates/CaseHeader';
import AlbumCard from '../../components/templates/AlbumCard';
import H1 from '../../components/atoms/typography/H1';

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
        <H1 content="2020" />
        <div className="grid sm:grid-cols-2 gap-6">
          <AlbumCard
            albumCover="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/f/4/8/9/490891459001457.jpg"
            albumName="Além daquilo que te cega"
            bandName="Pense"
            albumYear="2014"
            albumPage="/my-world/album-reviews/pense-alem-daquilo"
          />
          <AlbumCard
            albumCover="https://f4.bcbits.com/img/a0465067803_10.jpg"
            albumName="Realidade, vida e fé"
            bandName="Pense"
            albumYear="2018"
          />
          <AlbumCard
            albumCover="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/f/4/8/9/490891459001457.jpg"
            albumName="Além daquilo que te cega"
            bandName="Pense"
            albumYear="2014"
            albumPage="/my-world/album-reviews/pense-alem-daquilo"
          />
          <AlbumCard
            albumCover="https://f4.bcbits.com/img/a0465067803_10.jpg"
            albumName="Realidade, vida e fé"
            bandName="Pense"
            albumYear="2018"
          />
          <AlbumCard
            albumCover="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/f/4/8/9/490891459001457.jpg"
            albumName="Além daquilo que te cega"
            bandName="Pense"
            albumYear="2014"
            albumPage="/my-world/album-reviews/pense-alem-daquilo"
          />
          <AlbumCard
            albumCover="https://f4.bcbits.com/img/a0465067803_10.jpg"
            albumName="Realidade, vida e fé"
            bandName="Pense"
            albumYear="2018"
          />
          <AlbumCard
            albumCover="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/f/4/8/9/490891459001457.jpg"
            albumName="Além daquilo que te cega"
            bandName="Pense"
            albumYear="2014"
            albumPage="/my-world/album-reviews/pense-alem-daquilo"
          />
          <AlbumCard
            albumCover="https://f4.bcbits.com/img/a0465067803_10.jpg"
            albumName="Realidade, vida e fé"
            bandName="Pense"
            albumYear="2018"
          />
          <AlbumCard
            albumCover="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/f/4/8/9/490891459001457.jpg"
            albumName="Além daquilo que te cega"
            bandName="Pense"
            albumYear="2014"
            albumPage="/my-world/album-reviews/pense-alem-daquilo"
          />
          <AlbumCard
            albumCover="https://f4.bcbits.com/img/a0465067803_10.jpg"
            albumName="Realidade, vida e fé"
            bandName="Pense"
            albumYear="2018"
          />
        </div>
      </div>
    </div>
  );
}
