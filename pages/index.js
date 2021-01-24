import Image from 'next/image';
import Divider from '../components/atoms/Divider';
import IconsSocial from '../components/atoms/IconsSocial';
import NavBar from '../components/atoms/NavBar';
import HomeHero from '../components/molecules/HomeHero';
import HomeTags from '../components/molecules/HomeTags';
import CallOut from '../components/molecules/CallOut';

export default function Home() {
  return (
    <div className="global-wrapper">
      <NavBar />
      <div className="max-w-2xl m-auto pt-12 px-5">
        <HomeHero />
        <HomeTags />
        <Divider />
        <h1 className="h1">Selected works</h1>
        <CallOut
          subjectLogo="/svgs/logo-ifood.svg"
          imgAlt="iFood Logo"
          subjectName="iFood"
          subjectSummary="Designed the new driver app from the ground up. Small team, challenging goals and huge impact. A product that is very close to my heart. What a ride!"
          casePath="/cases/ifood"
          linkString="Read the story"
        />
        <CallOut
          subjectLogo="/svgs/logo-livia.svg"
          imgAlt="Nexa Digital Logo"
          subjectName="Livia Pro"
          subjectSummary="Being healthy is communicating rightfully. With Livia, we were tackling one of the most fundamental health care problem out there: communication."
          casePath="/cases/livia"
          linkString="Read the story"
        />
        <CallOut
          subjectLogo="/svgs/logo-rapiddo.svg"
          imgAlt="Rappido Entregas Logo"
          subjectName="Rapiddo Entregas"
          subjectSummary="One designer for the whole company. You know the drill. I did it all at Rapiddo. Great times. Apps, motion graphics, branding. I told you!"
          casePath="/cases/rapiddo"
          linkString="Read the story"
        />
        <div className="pt-10 grid justify-center">
          <IconsSocial />
        </div>
      </div>
    </div>
  );
}
