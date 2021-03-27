import React from "react";
import { NextSeo } from "next-seo";
import AppBar from "../../components/atoms/AppBar";
import BreadCrumb from "../../components/atoms/BreadCrumb";
import CaseHeader from "../../components/molecules/CaseHeader";
import BlogCallOut from "../../components/molecules/BlogCallOut";

export default function Thinking() {
  return (
    <div className="global-wrapper">
      <NextSeo
        title="thinking - danilo leal"
        canonical="https://daniloleal.co/my-world/thinking"
        openGraph={{
          url: "https://daniloleal.co/my-world/thinking",
          title: "thinking - danilo leal",
          images: [
            {
              url: "https://i.ibb.co/xJqtXC0/thinking.png",
              alt: "thinking - danilo leal",
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
        <CaseHeader
          title="Thinking"
          summary="Food for thought at most. Rambiling for sure!"
        />
        <BlogCallOut
          date="Jan 24, 2021"
          title="Dark Mode with TailwindCSS and Next.js"
          path="/my-world/thinking/darkmode-next-tailwind"
        />
        <BlogCallOut
          date="Dec 29, 2020"
          title="Amélia"
          path="/my-world/thinking/amelia"
        />
      </div>
    </div>
  );
}
