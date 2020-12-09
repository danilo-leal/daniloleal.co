import Head from 'next/head';
import NavBar from './components/atoms/NavBar';
import HomeHero from './components/templates/HomeHero';
import HomeTags from './components/templates/HomeTags';
import JobStrips from './components/templates/JobStrips';
import Divider from './components/atoms/Divider';
import H1 from './components/atoms/typography/H1';

export default function Home() {
  return (
    <div className="h-full bg-white dark:bg-blackish px-4 pb-20">
      <NavBar />
      <div className="max-w-xl m-auto pt-12">
        <HomeHero />
        <HomeTags />
        <Divider />
        <H1 content="Selected works"></H1>
        <JobStrips
          companyLogo="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d90dfd2e0670331b10724_logos%3A%20ifood.svg"
          companyName="iFood"
          jobSummary="Designed the new driver app from the ground up. Small team, challenging goals and huge impact. A product that is very close to my heart. What a ride!"
        />
        <JobStrips
          companyLogo="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c2ee8b26f2a64d7237f60_nexa-logo.svg"
          companyName="Nexa"
          jobSummary="Being healthy is communicating rightfully. With Livia, we were tackling one of the most fundamental health care problem out there: communication."
        />
        <JobStrips
          companyLogo="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d90dfd2e06767b9b1072a_logos%3A%20rapiddo.svg"
          companyName="Rapiddo Entregas"
          jobSummary="One designer for the whole company. You know the drill. I did it all at Rapiddo. Great times. Apps, motion graphics, branding. I told you!"
        />
      </div>
    </div>
  );
}
