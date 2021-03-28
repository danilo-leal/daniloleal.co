import Selfie from "../components/atoms/Selfie";
import Divider from "../components/atoms/Divider";
import IconsSocial from "../components/atoms/IconsSocial";
import NavBar from "../components/atoms/NavBar";
import MainLink from "../components/atoms/MainLink";
import ShowOffTemp from "../components/molecules/ShowOffTemp";
import CallOut from "../components/molecules/CallOut";
import MaterialBlocks from "../components/atoms/MaterialBlocks";

export default function MaterialUI() {
  return (
    <div className="global-wrapper">
      <NavBar />
      <div className="max-w-2xl m-auto pt-12 px-5">
        <div className="pb-8">
          <Selfie />
          <h1 className="h1">Hello Olivier and team! 👋</h1>
          <h2 className="paragraph-1 mb-3">
            First of all, I wanted to thank you for the opportunity of applying
            to be a part of your team. All conversations I had with Olivier were
            very nice, it was a pleasure getting to know you!
            <br />
            <br />
            My train of thought for this exercise was trying to come up with the
            ultimate problem MaterialUI as a company is trying to solve. From my
            day-to-day experience with the library in a huge company context,
            I'm inclined to believe that MaterialUI is the ultimate UI solution
            for anyone. If you think about the product kit as a whole, it's
            ultimately letting developers not worry anymore with UI building.
            <br />
            <br />
            The only product I left out is the Builder. My understanding,
            especially after talking to Olivier, is that this product is still
            not making much sense in the company portfolio. I really like the
            idea and believe that it has huge potential, though.
            <br />
            <br />
            I've built on top of the "building blocks" concept. The Material-UI
            product set solves problems for a broad range of needs: from
            experienced developers trying to build complex systems UIs to
            iterative designers and product people trying to get MVPs off of the
            ground.
            <br />
            <br />
          </h2>
          <MaterialBlocks />
          <div className="pt-8">
            <div className="pb-8">
              <Divider />
            </div>
            <h2 className="paragraph-1 mb-3">
              I've designed two main artifacts:
            </h2>
            <div className="py-4 grid gap-8">
              <div className="flex items-start">
                <div>
                  <h1 className="mb-2 dark:text-white">Figma File</h1>
                  <p className="paragraph-1 mb-4">
                    On the "assignment" page, you'll find the designs for the
                    hero sections of each product. For time's sake, I've only
                    designed in the desktop breakpoint.
                  </p>
                  <MainLink
                    string="Check it out"
                    path="https://www.figma.com/file/Qsu86kGJ7LK0R4rFV618Qo/materialUI?node-id=69%3A10714"
                  />
                </div>
              </div>
            </div>
            <div className="py-4 grid gap-8">
              <div className="flex items-start">
                <div>
                  <h1 className="mb-2 dark:text-white">Prototype</h1>
                  <p className="paragraph-1 mb-4">
                    For getting a feeling of how this would play out if it were
                    implemented, I've prototyped the products menu. You can
                    click it to go to each page.
                  </p>
                  <MainLink
                    string="Check it out"
                    path="https://cloud.protopie.io/p/be78918075"
                  />
                </div>
              </div>
            </div>
          </div>

          <Divider />
          <div className="pt-8">
            <h2 className="paragraph-1 mb-3">
              Thanks a lot. I hope you appreciate it! <br />
              Cheers,
            </h2>
            <svg
              className="stroke-current text-draplin"
              width="89"
              height="41"
              viewBox="0 0 89 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.5 32.5L21.1099 28.8901C22.0541 27.9459 23.6406 28.1744 24.2799 29.3466L24.5775 29.892C25.2571 31.1381 26.9824 31.2993 27.8812 30.2008L30.3313 27.2062C30.4433 27.0693 30.5715 26.9461 30.7207 26.8512C31.937 26.0777 34 25.4911 34 28.5C34 30.5267 34.9359 30.1199 35.9187 29.0834C36.826 28.1264 38.3743 27.9617 39.2614 28.9375L40.6074 30.4181C41.5331 31.4364 43.1828 31.2415 43.8173 30.0203C49.0324 19.9838 56.2802 3.47084 51.5 2C46.9421 0.597567 45.8927 17.5316 45.9275 29.3671C45.9327 31.1207 48.0371 31.9629 49.2771 30.7229L51.5 28.5M51.5 28.5C51.8333 34 53 43.5 55 37.5C57 31.5 53.5 29 51.5 28.5ZM60 24.5L61.2202 34.6684C61.3252 35.5435 62.4289 35.8647 62.987 35.1825L64.5581 33.2623C65.1095 32.5884 66.2201 32.8895 66.4127 33.7387C66.8851 35.8208 67.6314 37.8686 68.5 37C69.3599 36.1401 70.7846 34.3731 71.8911 32.9499C72.3759 32.3263 73.3636 32.4697 73.641 33.2093L74.0028 34.174C74.2453 34.8208 75.0552 35.0317 75.5692 34.5704C81.2045 29.5126 84.2606 24.2105 88.5 19.5M9.82763 8.10779V8.10779C6.81059 5.61873 2.38446 8.5011 3.44075 12.267L8.9148 31.7832C9.70832 34.6123 13.6745 34.7323 14.6376 31.9563L15.6775 28.9588C18.2761 21.4689 15.943 13.153 9.82763 8.10779Z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-2 pt-16">
          <svg
            className="w-5 h-5 stroke-current text-draplin"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
          <MainLink string="Back to the main home" path="/" />
        </div>
      </div>
    </div>
  );
}
