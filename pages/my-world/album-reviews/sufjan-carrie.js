import React from 'react';
import AppBar from '../../../components/atoms/AppBar';
import BreadCrumb from '../../../components/atoms/BreadCrumb';
import Quote from '../../../components/atoms/Quote';
import CaseHeader from '../../../components/molecules/CaseHeader';
import Footer from '../../../components/molecules/Footer';
import FavoriteTrackStrip from '../../../components/molecules/FavoriteTrackStrip';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function SufjanCarrieLowell() {
  return (
    <div className="global-wrapper">
      <AppBar goBackTo="/my-world/album-reviews" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="My world /"
          goToTwo="/my-world"
          pathNameThree="Album reviews /"
          goToThree="/my-world/album-reviews"
          pathNameFour="Carrie & Lowell"
        />
        <CaseHeader
          title="Carrie & Lowell"
          summary="By Sufjan Stevens, released in 2015 • Posted at 24/12/2020"
        />
      </div>
      <div className="default-container">
        <Zoom>
          <img
            src="https://i.ibb.co/zmw5XgF/Screen-Shot-2020-12-24-at-23-29-11.png"
            alt="Ilha Comprida, 2015 © Danilo Leal"
            className="img"
          />
        </Zoom>
        <p className="paragraph-1">
          I did not know Sufjan before this record. I got to get ahold some of
          his prior music after listening to this piece and it struck me quite a
          bit how different it sounds. As you get closer to the story behind
          this album, you start to understand more and more where he's coming
          from and things start to settle. A friend with who I used to live with
          showed me out of the blue
          <a
            href="https://www.youtube.com/watch?v=qx1s_3CF07k&list=PL67VKSNJdY_XBvoFECHFKyesxnDhTVM8N&index=10&ab_channel=AsthmaticKittyRecords"
            className="inline-link"
          >
            the track No Shade in the Shadow of the Cross,
          </a>
          and the calming almost sleep song melody type along with a peaceful
          shot of the ocean and it's tides in slow motion just hit me instantly
          so profoundly.
        </p>
        <h1 className="h1">Dealing with death</h1>
        <p className="paragraph-1">
          Ultimately, that's what this is about to me. Carrie is Sufjan's mom
          and Lowell was his mom's partner that eventually grew to be a second
          father figure to Sufjan. I'm not going to go through the history
          behind the album here, so I'll link you up to some articles that
          expose with details and interviews with the man himself what's all
          this really about for him. I'll try to develop a bit of what this is
          about to me.
          <br />
          <br />
          So, yeah, death. What a thing. It's a certain thing. It's too hard to
          fathom that each and everyone I love will actually die sometime. They
          won't be here forever. And neither do I. Sometime our roads will fall
          short and the trip will end. These songs make me think about this. The
          most striking unquestionable fact in everyone's lives. But it gets me
          in a very complex mood. At first, Sufjan expresses how painful it is
          to accept what has just happened. So many things come to mind, those
          moments where we could've acted better, where it could've been
          different. And now, it's gone. There isn't a chance to try again and
          reassess.
        </p>
        <Quote
          quote={[
            'Somewhere in the desert, there’s a forest',
            <br></br>,
            'And an acre before us',
            <br></br>,
            'But I don’t know where to begin',
          ]}
          link="https://www.youtube.com/watch?v=dsGODTySH0E&ab_channel=AsthmaticKittyRecords"
          linkString="Death with Dignity,"
          text="track one."
        />
        <p className="paragraph-1">
          All of sudden, death imposes a real immediate distance. That's the
          first feeling that strikes hard. Even though we might not be
          physically close to that someone right now, most people are a call
          away. When with the proper will, we can do anything to meet someone we
          love. But after dying, we can't. It's just impossible. And sometime it
          will happen.
          <br />
          <br />I guess that naturally, we start to contemplate and notice some
          other aspects of this passage. Even understanding as a passage allows
          the process to be easier to deal with. We start to accept a bit more.
          And this is a real process indeed. It's painful. Recently I red
          <a
            href="https://www.nytimes.com/2020/12/18/opinion/sunday/coronavirus-death.html?action=click&module=Opinion&pgtype=Homepage"
            className="inline-link"
          >
            an article from the New York Times
          </a>
          that reflects beautifully about death, especially in the wake of 2020.
          The core question the article present is that: if you think of the
          person who has died every day, and you remember them dearly, fondly,
          you recall them in all sorts of moments, are they really dead? Or they
          live through you? We still feel an impact of that person in our lives
          daily. How can we say they're gone?
        </p>
        <h1 className="h1">Accepting</h1>
        <p className="paragraph-1">
          I don't if this is a task that we can conclude with integrity. It's
          hard to really accept someone dying. Even though they might live in
          and through you, I feel like I'd also die a bit. There's some of me
          that isn't here anymore if someone I love so much is gone. It's like
          our bonds are exposed and then broken up aggressively. And I guess
          that Sufjan's naturally goes through this as the record progresses on.
          He exposes to us very hard moments where he takes on himself the
          blame. <br />
          <br />I think that happens because when someone dies you start to
          recollect all the smallest details of the relationship you have with
          the person. All the tiny moments of joy and conflict. Forgotten
          memories that comes like the clearest movie. It's always possible to
          act differently, to be better. But life is circumstance. Each moment
          is carried like a result of the previous. It demands hard conscious
          thinking to live up to circumstance.
        </p>
        <Quote
          quote={[
            'For my prayer has always been love',
            <br></br>,
            'What did I do to deserve this?',
          ]}
          link="https://www.youtube.com/watch?v=jkkpHDX_Cvg&list=PL67VKSNJdY_XBvoFECHFKyesxnDhTVM8N&index=4&ab_channel=AsthmaticKittyRecords"
          linkString="Drawn To The Blood,"
          text="track four."
        />
        <p className="paragraph-1">
          I think of everyone I know. Everyone I love. I feel them hard and
          suddenly, I miss everyone. I'm grateful for everyone lives and I want
          to be better, I want to love them better. The song's melodies and
          overall mood of the album make me feel like I'm in this end of road,
          in a empty beach. Starring at the horizon, seeing each and every
          people I love. Recollecting our shared moments, our shared love and
          conflict. I feel overwhelmed. A bit shattered into many pieces. I'm
          not certain if it's them or me that is passing away. I guess that's
          accepting their passage and also mine.
        </p>
        <Quote
          quote={[
            'Should I tear my heart out now?',
            <br></br>,
            'Everything I feel returns to you, somehow',
          ]}
          link="https://www.youtube.com/watch?v=adKEqin5SoI&list=PL67VKSNJdY_XBvoFECHFKyesxnDhTVM8N&index=7&ab_channel=AsthmaticKittyRecords"
          linkString="The Only Thing,"
          text="track seven."
        />
        <h1 className="h1">Help(full)(less)</h1>
        <p className="paragraph-1">
          This album is a calling for help. It's an allowance to be helped. We
          need help when we're babies, for everything. Starting life is hard,
          it's not a plug and play thing. We need assistance. And when it gets
          to its end, there's the same amount of help needed. Sufjan poses a lot
          of questions throughout the album and it's not for us to answer but
          only to be aware of. We need to be aware of the help we need to deal
          with this spectrum of feelings when thinking about dying and death in
          general.
          <br />
          <br />
          There will be moments where nothing seems worthy, where nothing makes
          any sense at all. But there will be those times when life hits you as
          you have just left your mother's belly. It's a complete feeling of
          being alive, overall.
        </p>
        <h1 className="h1">Conclusion</h1>
        <p className="paragraph-1">
          This is a short piece of an album I've been meaning to write something
          about since I first heard it in early 2016. I guess it's a bit messy
          because it's just my reflections upon it. It isn't a conceptual review
          but a shot at describing the contemplative place I go when listening
          through these tracks. Sufjan managed to expose a very difficult moment
          in his life, in a personal way but also in a general way. It's human,
          it's real, it's deep. It's sometimes too raw, other times it's more
          emotional. I love this album so much and I have listened to it in hard
          moments of my life, serving as a strong friend. I feel very secure
          around these melodies. Hope you liked it and sorry the overall mess!
        </p>
        <h1 className="h1">Favorite tracks</h1>
        <FavoriteTrackStrip
          order="1"
          songTtitle="Fourth of July"
          songLink="https://www.youtube.com/watch?v=JTeKpWp8Psw&list=PL67VKSNJdY_XBvoFECHFKyesxnDhTVM8N&index=6&ab_channel=AsthmaticKittyRecords"
          songLength="(4.38)"
        />
        <FavoriteTrackStrip
          order="2"
          songTtitle="The Only Thing"
          songLink="https://www.youtube.com/watch?v=adKEqin5SoI&list=PL67VKSNJdY_XBvoFECHFKyesxnDhTVM8N&index=7&ab_channel=AsthmaticKittyRecords"
          songLength="(4.41)"
        />
        <FavoriteTrackStrip
          order="3"
          songTtitle="Eugene"
          songLink="https://www.youtube.com/watch?v=mMKP2Vcc6wA&list=PL67VKSNJdY_XBvoFECHFKyesxnDhTVM8N&index=5&ab_channel=AsthmaticKittyRecords"
          songLength="(2.25)"
        />
        <FavoriteTrackStrip
          order="4"
          songTtitle="Death With Dignity"
          songLink="https://www.youtube.com/watch?v=dsGODTySH0E&list=PL67VKSNJdY_XBvoFECHFKyesxnDhTVM8N&index=1&ab_channel=AsthmaticKittyRecords"
          songLength="(4.00)"
        />
        <FavoriteTrackStrip
          order="5"
          songTtitle="John My Beloved"
          songLink="https://www.youtube.com/watch?v=wVZUBMUekck&list=PL67VKSNJdY_XBvoFECHFKyesxnDhTVM8N&index=9&ab_channel=AsthmaticKittyRecords"
          songLength="(5.07)"
        />
      </div>
      <Footer />
    </div>
  );
}
