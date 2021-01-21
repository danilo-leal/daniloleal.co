import React from 'react';
import { NextSeo } from 'next-seo';
import AppBar from '../../components/atoms/AppBar';
import BreadCrumb from '../../components/atoms/BreadCrumb';
import CaseHeader from '../../components/molecules/CaseHeader';
import Footer from '../../components/molecules/Footer';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function GraphicDesign() {
  return (
    <div className="global-wrapper">
      <NextSeo
        title="graphic design - danilo leal"
        canonical="https://daniloleal.co/my-world/graphic-design"
        openGraph={{
          url: 'https://daniloleal.co/my-world/graphic-design',
          title: 'graphic design - danilo leal',
          images: [
            {
              url: 'https://i.ibb.co/mCbddYk/graphic-design.png',
              alt: title,
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
          pathNameThree="Graphic design"
        />
        <CaseHeader
          title="Graphic design"
          summary="Design outside of screens. Even though you're seeing in a screen now."
        />
        <h1 className="h1">Okay, for starters!</h1>
        <p className="paragraph-1">
          I love designing for graphic. From album covers to logo identities.
          This goes all way back to when and how I started designing. Much
          inspired by the likes of Aaron Draplin, the way you design stuff
          express yourself to the world. There isn't that weight of value
          proposition or any of this stuff. It's just expression. It's how you
          connect visually to the world, what clicks to you. So I've gathered
          pieces of work that I did over the years.
        </p>
        <div className="py-4">
          <Zoom>
            <img
              className="img"
              src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2e07c012d9354b38f52991_a-rancore-p-1080.jpeg"
              alt="Rancore's vynil."
            />
          </Zoom>
          <h1 className="h1">Rancore • Ao Vivo • 2017</h1>
          <p className="paragraph-1">
            This band is one very dear to me. One of my most loved bands in the
            brazilian underground hardcore scene. All things they spread out
            rings with me. I love their sound, aesthetic and purpose. It was a
            huge pleasure being called by Teco, band's singer, to help them at
            this live album cover. The main concept were already there, I just
            gave a little push, but well enough so I feel like I participated! A
            honor to be involved in.
          </p>
          <iframe
            src="https://open.spotify.com/embed/album/50mtPeTXbDuTrDM2Mho6LH"
            className="w-full h-20 mt-5 rounded-md opacity-75 hover:opacity-100 transition-opacity"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
      <div className="w-screen grid grid-cols-2 pt-10 pb-1">
        <Zoom>
          <img
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2e07c086f417131a27598f_a-solar-p-1080.jpeg"
            alt="Teco Martins's Solar."
          />
        </Zoom>
        <Zoom>
          <img
            src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2e07c086f41766c227598e_a-logos-p-1080.jpeg"
            alt="Teco Martins's Logos Solar."
          />
        </Zoom>
      </div>
      <div className="default-container">
        <h1 className="h1">Teco Martins • Solar & Logos Solar • 2018 + 2019</h1>
        <p className="paragraph-1">
          I was incredibly privileged to work again with Teco in both of his
          solo albums. Besides making an awesome friend, it was specifically
          special because Teco's been on a journey with his solo project for
          about 10 years and only after all this time that the time came to
          immortalize his work. Solar and Logos Solar are one story and message
          only told through two full length albums. These songs compile a lot of
          brazilian music making and spread beautiful gems of wisdom.
        </p>
        <iframe
          src="https://open.spotify.com/embed/album/7sueXJcfgHuWB36k1MchEi"
          className="w-full h-20 rounded-md opacity-75 hover:opacity-100 transition-opacity"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <div className="pt-10">
          <Zoom>
            <img
              className="img"
              src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2e07c012d935cee1f52992_a-flora-p-1080.jpeg"
              alt="Flora Park's Vinyl."
            />
          </Zoom>
          <h1 className="h1">Flora Park • Chutando nuvens • 2017</h1>
          <p className="paragraph-1">
            This is a bit of a dream come true. Me and my buddies self recorded
            and produced this album. We did it all very DIY style but with all
            hearts in it. We were all neighbours at some point and Flora Park
            goes by the name of where we used to live. It's not only a place I
            feel at home, but where I became most of what I am today. Many
            things happened over there and these songs express a moment in those
            times. Very proud of it. Dreaming in getting a gig up to it.
          </p>
          <iframe
            className="w-full h-20 mt-6 opacity-75 hover:opacity-100 transition-opacity"
            src="https://bandcamp.com/EmbeddedPlayer/album=489391814/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/"
            seamless
          >
            <a href="http://bandaflorapark.bandcamp.com/album/chutando-nuvens">
              chutando nuvens by FLORA PARK
            </a>
          </iframe>
        </div>
        <div className="sn:pt-10 pt-4">
          <Zoom>
            <img
              className="img"
              src="https://uploads-ssl.webflow.com/5e2d8f512ca1f737770efb0e/5e2e07c08c2b17352ec97a37_a-sede-p-1080.jpeg"
              alt="Sede's vynil."
            />
          </Zoom>
          <h1 className="h1">Sede • Antes que a natureza morra • 2016</h1>
          <p className="paragraph-1">
            This one is a very special project of mine. Since 2014, I've been
            recording and producing a bunch of songs here and there. Song
            writing is like therapy to me. I could stay hours and hours closed
            in a room making music. And at some point in 2016, I decided to
            write a whole album. This demanded narrative and thoughtfulness. But
            I did it. Sede is a 16 tracks album, 100% me, produced, mixed and
            mastered. Take a listen one of my favorites tracks below.
          </p>
          <iframe
            className="w-full h-20 mt-6 opacity-75 hover:opacity-100 transition-opacity"
            src="https://bandcamp.com/EmbeddedPlayer/album=3805525587/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/"
            seamless
          >
            <a href="http://sede.bandcamp.com/album/antes-que-a-natureza-morra">
              antes que a natureza morra by sede
            </a>
          </iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
