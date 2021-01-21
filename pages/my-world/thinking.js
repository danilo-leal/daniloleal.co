import React from 'react';
import { NextSeo } from 'next-seo';
import AppBar from '../../components/atoms/AppBar';
import BreadCrumb from '../../components/atoms/BreadCrumb';
import CaseHeader from '../../components/molecules/CaseHeader';
import BlogCallOut from '../../components/molecules/BlogCallOut';

export default function Thinking() {
  return (
    <div className="h-full dark:bg-blackish pb-10">
      <NextSeo
        title="thinking - danilo leal"
        canonical="https://daniloleal.co/my-world/thinking"
        openGraph={{
          url: 'https://daniloleal.co/my-world/thinking',
          title: 'thinking - danilo leal',
          images: [
            {
              url: 'https://i.ibb.co/zR5zQ3X/thinking.png',
              alt: 'thinking - danilo leal',
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
          pathNameThree="Thinking"
          pathNameFour=""
        />
        <CaseHeader title="Thinking" summary="" />
        <BlogCallOut
          date="Dec 29, 2020"
          title="Amélia"
          path="/my-world/thinking/amelia"
        />
      </div>
    </div>
  );
}
