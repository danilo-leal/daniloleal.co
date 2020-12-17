import NavBar from '../components/atoms/NavBar';
import HomeHero from '../components/templates/HomeHero';
import HomeTags from '../components/templates/HomeTags';
import CallOut from '../components/templates/CallOut';
import Divider from '../components/atoms/Divider';
import H1 from '../components/atoms/typography/H1';
import IconsSocial from '../components/atoms/IconsSocial';

export default function Home() {
  return (
    <div className="sm:pb-20 pb-16">
      <NavBar />
      <div className="max-w-xl m-auto pt-12 px-5">
        <HomeHero />
        <HomeTags />
        <Divider />
        <H1 content="Selected works"></H1>
        <CallOut
          subjectLogo="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d90dfd2e0670331b10724_logos%3A%20ifood.svg"
          subjectName="iFood"
          subjectSummary="Designed the new driver app from the ground up. Small team, challenging goals and huge impact. A product that is very close to my heart. What a ride!"
          casePath="/cases/ifood"
          linkString="Read the story"
        />
        <CallOut
          subjectLogo="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5f5c2ee8b26f2a64d7237f60_nexa-logo.svg"
          subjectName="Livia Pro"
          subjectSummary="Being healthy is communicating rightfully. With Livia, we were tackling one of the most fundamental health care problem out there: communication."
          casePath="/cases/livia"
          linkString="Read the story"
        />
        <CallOut
          subjectLogo="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2d90dfd2e06767b9b1072a_logos%3A%20rapiddo.svg"
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
