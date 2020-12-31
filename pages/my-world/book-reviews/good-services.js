import React from 'react';
import AppBar from '../../../components/atoms/AppBar';
import BreadCrumb from '../../../components/atoms/BreadCrumb';
import CaseHeader from '../../../components/molecules/CaseHeader';
import Footer from '../../../components/molecules/Footer';
import NumberedList from '../../../components/molecules/NumberedList';
import Star from '../../../components/atoms/Star';

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
          pathNameThree="Book reviews /"
          goToThree="/my-world/book-reviews"
          pathNameFour="Good Services"
        />
        <CaseHeader
          title="Good Services"
          summary="By Lou Downe, released in 2020 • Posted at 27/12/2020"
        />
      </div>
      <div className="default-container">
        <p className="paragraph-1">
          This is the kind of reference book you take with you whatever you go.
          Good Services is written around 15 principles of good service design.
          The author goes through each of them by first presenting a conflicting
          situation, contextualizing the principle, and then reflecting upon it,
          pointing to how to solve it in a practical manner. The nice thing is
          that in each principle, by the end of it, we're offered a quick recap.
          Gentle nice touch. <br />
          <br />
          I guess that most designers have already felt in a way that when
          advocating for a certain decision, that is mostly aligned with the
          principles laid out in the book, it felt a bit too utopic for the
          other stakeholders involved. That's mostly why companies do falset
          engage in creating products based on these types of principles in the
          first place. The consequence is that the problems that emerge are a
          direct byproduct of a structurally flawed product (company, service).
          And then, when trying to prioritize good service decisions,
          ultimately, they seem too idealistic. <br />
          <br />
          Good Services shows that principles regarding focus on the user and
          respect for the overall environment of the product or service in
          question have to be thought out before even creating the
          company/product/service. If you think about all the principles
          whenever you'd to design something, you are probably on a good path to
          creating a robust, thoughtful, and honest thing. <br />
          <br />
          The principles can be used in whatever stage of the product you're in.
          I guess it's never late to start. You can start applying them in
          feature design, product design or even a company design. It's a field
          guide book that you'd want to check constantly. <br />
          <br />
          What I liked most is that these principles are very much what I've
          been thinking of as system design. Some of the principles are
          especially about the type of incentives, behaviors and consequences of
          large and small order interactions between different parts of a
          product or services. These are a great reminder that the product
          you're designing is much bigger than it's landing page, home page,
          app, whatever. The experience is an overall bigger event that is a sum
          of all aspects and feelings your product provoked on the
          user/consumer/client. So, treat them with care and follow these
          principles.
        </p>
        <h2 className="h1">Oh, the type!</h2>
        <p className="paragraph-1">
          Can't talk about this book without mentioning the reading experience
          of holding a book with atypical typography. I guess it's using
          Helvetica with some semi-bold weight, the text isn't evenly
          distributed in the page grid, which is different. And through the
          book, there's some kind of posters highlighting some important
          passages.
        </p>
        <h2 className="h1">The 15 principles</h2>
        <p className="paragraph-1">
          You can
          <a
            href="https://good.services/15-principles-of-good-service-design"
            className="inline-link"
          >
            check more about the book here.
          </a>
          But, I'll be rewriting the principles down just for learnings and
          repetition sake:
        </p>
        <NumberedList order="1" title="Be easy to find" haveLink="false" />
        <NumberedList
          order="2"
          title="Clearly explain the purpose of your service"
          haveLink="false"
        />
        <NumberedList
          order="3"
          title="Set the expectations a user has of your service"
          haveLink="false"
        />
        <NumberedList
          order="4"
          title="Enable each user to complete the outcome they set out to do"
          haveLink="false"
        />
        <NumberedList
          order="5"
          title="Work in a way that is familiar"
          haveLink="false"
        />
        <NumberedList
          order="6"
          title="Require no prior kfalsewledge to use"
          haveLink="false"
        />
        <NumberedList
          order="7"
          title="Be agnostic of organisational structures"
          haveLink="false"
        />
        <NumberedList
          order="8"
          title="Require the minimum possible steps to complete"
          haveLink="false"
        />
        <NumberedList
          order="9"
          title="Be consistent throughout"
          haveLink="false"
        />
        <NumberedList order="10" title="Have no dead ends" haveLink="false" />
        <NumberedList
          order="11"
          title="Be usable by everyone, equally"
          haveLink="false"
        />
        <NumberedList
          order="12"
          title="Encourage the right behaviours from users and service providers"
          haveLink="false"
        />
        <NumberedList
          order="13"
          title="Respond to change quickly"
          haveLink="false"
        />
        <NumberedList
          order="14"
          title="Clearly explain why a decision has been made"
          haveLink="false"
        />
        <NumberedList
          order="15"
          title="Make it easy to get human assistance"
          haveLink="false"
        />
        <Star />
      </div>
      <Footer />
    </div>
  );
}
