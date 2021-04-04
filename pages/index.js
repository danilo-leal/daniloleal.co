import Divider from "../components/atoms/Divider";
import IconsSocial from "../components/atoms/IconsSocial";
import NavBar from "../components/atoms/NavBar";
import HomeHero from "../components/molecules/HomeHero";
import HomeTags from "../components/molecules/HomeTags";
import CallOut from "../components/molecules/CallOut";
import MainLink from "../components/atoms/MainLink";

export default function Home() {
  return (
    <div className="global-wrapper">
      <NavBar />
      <div className="max-w-2xl m-auto pt-12 px-5">
        <HomeHero />
        <HomeTags />
        <Divider />
        <div className="mb-2 mt-8 flex items-center justify-between">
          <h1 className="dark:text-white text-lg">Featured works</h1>
          <MainLink string="See all" path="/work" />
        </div>
        <CallOut
          subjectLogo="/svgs/logo-ifood.svg"
          imgAlt="iFood Logo"
          subjectName="iFood"
          subjectSummary="Designed the new driver app from the ground up. Small team, challenging goals, and huge impact. What a ride!"
          casePath="/cases/ifood"
          linkString="Read the story"
        />
        <CallOut
          subjectLogo="/svgs/logo-livia.svg"
          imgAlt="Nexa Digital Logo"
          subjectName="Livia Pro"
          subjectSummary="Health is doing the little things every day. With Livia, we were tackling one of the most fundamental health care problems out there: communication."
          casePath="/cases/livia"
          linkString="Read the story"
        />
        {/* <CallOut
          subjectLogo="/svgs/logo-rapiddo.svg"
          imgAlt="Rappido Entregas Logo"
          subjectName="Rapiddo Entregas"
          subjectSummary="One designer for the whole company. You know the drill. I did it all at Rapiddo. Great times. Apps, motion graphics, branding. Told ya!"
          casePath="/cases/rapiddo"
          linkString="Read the story"
        /> */}
        <div className="pt-20 grid justify-center">
          <IconsSocial />
        </div>
      </div>
    </div>
  );
}
