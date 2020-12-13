import React from 'react';
import AppBar from '../../../components/atoms/AppBar';
import BreadCrumb from '../../../components/atoms/BreadCrumb';
import AlbumHero from '../../../components/templates/AlbumHero';

export default function PenseAlemDaquilo() {
  return (
    <div className="h-full dark:bg-blackish pb-10">
      <AppBar goBackTo="/my-world/album-reviews" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="My world /"
          goToTwo="/my-world"
          pathNameThree="Album reviews /"
          goToThree="/my-world/album-reviews"
          pathNameFour="Pense: Além daquilo que te cega"
        />
        <AlbumHero
          title="Além daquilo que te cega"
          summary="Pense • 2014 • Independente"
          albumCover="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/f/4/8/9/490891459001457.jpg"
          albumListenLink=""
        />
      </div>
    </div>
  );
}
