import React from 'react';
import AppBar from '../../components/atoms/AppBar';
import BreadCrumb from '../../components/atoms/BreadCrumb';
import CaseHeader from '../../components/molecules/CaseHeader';
import BlogCallOut from '../../components/molecules/BlogCallOut';

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
