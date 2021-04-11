import React from "react";
import { NextSeo } from "next-seo";
import AppBar from "../../../components/atoms/AppBar";
import Footer from "../../../components/molecules/Footer";
import BreadCrumb from "../../../components/atoms/BreadCrumb";
import CaseHeader from "../../../components/molecules/CaseHeader";
import goodgreatpms from "../../../data/thinking/goodgreatpms";
import GoodVSGreat from "../../../components/molecules/GoodGreatPMs";

export default function GoodGreatPM() {
  return (
    <div className="global-wrapper">
      <NextSeo
        title="Good vs Great PMs - danilo leal"
        canonical="https://daniloleal.co/my-world/thinking/good-great-pm"
        openGraph={{
          url: "https://daniloleal.co/my-world/thinking/good-great-pm",
          title: "Good vs Great PMs - danilo leal",
          images: [
            {
              url: "https://i.ibb.co/rmg4hx2/my-world.png",
              alt: "Good vs Great PMs - danilo leal",
              width: 1280,
              height: 720,
            },
          ],
        }}
      />
      <AppBar goBackTo="/my-world/thinking" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="My world /"
          goToTwo="/my-world"
          pathNameThree="Thinking /"
          goToThree="/my-world/thinking"
          pathNameFour="Good vs Great PMs"
        />
        <CaseHeader title="Good vs Great PMs" summary="Posted at 11/04/2021" />
        <p className="paragraph-1">
          The thing is: I'm just too hooked on
          <a className="inline-link" href="https://twitter.com/shreyas">
            Shreyas Doshi's tweets.
          </a>
          It is one of the main benchmarks when it comes to clear thinking and
          overall product design/management as a whole. His tweets are packed
          with insights, summarizing difficult stuff into simple words. If you
          work in product, you definitely caught yourself already trying to
          compress all the skills involved into being a product manager or
          designer. And it's especially harder when the conversation hits the
          point of evaluating career ladders and seniority level.
          <br />
          <br />
          One of his most famous threads is
          <a
            className="inline-link"
            href="https://twitter.com/shreyas/status/1249039638829793280">
            the Good vs Great Product Manager
          </a>
          . I'll be copying it in here, organizing the content into a design I'm
          more comfortable with consuming than a Twitter thread. For sure is one
          the best sources for assessing our practices as product folks and thus
          to design better products and work with greater teams. I frequently
          come back to this thread for making sure I'm heading in the right
          direction. All content here belongs to Shreyas'.
        </p>
        {goodgreatpms.map((post) => (
          <GoodVSGreat
            key={post.index}
            index={post.index}
            good={post.good}
            great={post.great}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
