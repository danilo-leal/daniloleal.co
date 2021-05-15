import React from "react";
import { NextSeo } from "next-seo";
import AppBar from "../../../components/atoms/AppBar";
import Footer from "../../../components/molecules/Footer";
import BreadCrumb from "../../../components/atoms/BreadCrumb";
import Code from "../../../components/atoms/Code";
import CaseHeader from "../../../components/molecules/CaseHeader";

export default function DarkModeTailwindNext() {
  return (
    <article className="global-wrapper">
      <NextSeo
        title="Dark Mode with TailwindCSS and Next.js - danilo leal"
        canonical="https://daniloleal.co/my-world/thinking/darkmode-next-tailwind"
        openGraph={{
          url: "https://daniloleal.co/my-world/thinking/darkmode-next-tailwind",
          title: "Dark Mode with TailwindCSS and Next.js - danilo leal",
          images: [
            {
              url: "https://i.ibb.co/gzBcSTc/dark-mode.png",
              alt: "Dark Mode with TailwindCSS and Next.js - danilo leal",
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
          pathNameFour="Dark Mode with TailwindCSS and Next.js"
        />
        <CaseHeader
          title="Dark Mode with TailwindCSS and Next.js"
          summary="Posted at 24/01/2021"
        />
      </div>
      <div className="default-container">
        <p className="paragraph-1">
          This quick little piece is to teach you how to implement in a very
          streamlined fashion dark mode in your website using TailwindCSS and
          Next.js. Before getting it down, I was battling my brain out at trying
          to set up this. Especially with Next.js and all this server-side
          rendering stuff. Because of that, I was having trouble using your
          usual <code className="code-inline">local.storage</code> for saving
          the preferred theme on the browser's cache.
          <br />
          <br />I got a little overwhelmed because it seemed like a way much
          harder task, implementing dark-mode than I could've ever hoped for.
          But after researching all articles around and asking for help late at
          night from my dev friends, I got to a very, very, simple setup using
          these two frameworks.
        </p>
        <h2 className="h1">Next-themes setup</h2>
        <p className="paragraph-1">
          Basically, it all goes down to this library. It really does what it
          says it does: perfect dark mode in 2 lines of code. Easy peasy. Just
          install it at your project using any of these two:
        </p>
        <Code
          code={`$ npm install next-themes
# or
$ yarn add next-themes`}
        />
        <p className="paragraph-1">
          This usage setup is also available in the next-themes documentation
          but I'll just copy in here for instructional's sake. The next step is
          going to your <code className="code-inline">_app.js</code> file, which
          is created when setting up Next. Just wrap all of the elements in the
          return of your component function with the{" "}
          <code className="code-inline">ThemeProvider</code> just like that:
        </p>
        <Code
          code={`import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default`}
          language="javascript"
        />
        <h2 className="h1">TailwindCSS setup</h2>
        <p className="paragraph-1">
          It's so quick that this won't last more than two paragraphs too. Go to
          your <code className="code-inline">tailwind.config.js</code> file and
          change the dark mode property to class, just like that:
        </p>
        <Code
          code={`// tailwind.config.js
module.exports = {
  darkMode: 'class'
}`}
          language="javascript"
        />
        <p className="paragraph-1">
          You're done! Now, go back to the{" "}
          <code className="code-inline">_app.js</code> file and just add as an
          attribute to the ThemeProvider a class value:
        </p>
        <Code
          code={`// pages/_app.js
<ThemeProvider attribute="class">`}
          language="javascript"
        />
        <h2 className="h2">Setting up the toggle button</h2>
        <p className="paragraph-1">
          The last step is just setting a button up for toggling the themes
          whenever you want. We'll be using some of React's built-in features.
          It's simple, I promise you! Start by creating a{" "}
          <code className="code-inline">DarkModeButton.js</code> at you
          components folder. It may look like this by now:
        </p>
        <Code
          code={`import React from 'react'

export default function DarkModeButton() {
    return (
        <div>
            
        </div>
    )
}`}
          language="javascript"
        />
        <p className="paragraph-1">
          Now we're going to add two React Hooks. One for changing the theme
          itself, in charge of toggling between classes, and another for
          changing the icon displayed at the button whenever the light or dark
          theme is on. We're also going to use a Hook provided by the next-theme
          library. Don't forget to import these!
        </p>
        <Code
          code={`import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function DarkModeButton() {
	const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

    return (
        <div>
            
        </div>
    )
}`}
          language="javascript"
        />
        <p className="paragraph-1">
          Then, we just have to create the button itself using the{" "}
          <code className="code-inline">{`<button>`}</code> HTML tag at the
          return of the function. You can style it however you want by changing
          the utility classes. With Tailwind, to set how you want a given
          element to look like, when in the dark or light mode, just add the{" "}
          <code className="code-inline">dark</code> prefix at the utility class,
          like:
        </p>
        <Code
          code={`className="bg-gray-200 dark:bg-black"`}
          language="javascript"
        />
        <p className="paragraph-1">
          When in light mode, the background color will be the gray-200, and
          when in the dark mode it will be bg-black. Couldn't be easier :) This
          is the styling I've chosen for my button. It also includes the hover
          state.
        </p>
        <Code
          code={`import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800  dark:hover:bg-gray-700 transition-all rounded flex items-center justify-center h-7 w-7">
		</button>
  );
}`}
          language="javascript"
        />
        <p className="paragraph-1">
          Getting at the final steps, we just have to add an{" "}
          <code className="code-inline">onClick</code> event to the button,
          passing to it the <code className="code-inline">setTheme</code> hook
          we've previously declared in the function. And then, we can also use
          the mounted hook for changing the icons.
        </p>
        <Code
          code={`import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800  dark:hover:bg-gray-700 transition-all rounded flex items-center justify-center h-7 w-7"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 text-gray-800 dark:text-gray-200"
        >
          {theme === 'dark' ? (
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          ) : (
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          )}
        </svg>
      )}
    </button>
  );
}`}
          language="javascript"
        />
        <p className="paragraph-1">
          I'm using a sun and moon icon for representing light and dark themes.
          When in the dark theme, the sun icon is displayed indicating that,
          when clicking at it, the theme will change to the light one. <br />
          <br />
          The <code className="code-inline">mounted</code> hook is set at false
          by default, so your website will, at first load, be at the light mode.
          If you want to change that, just swap it to true instead. You can also
          change the <code className="code-inline">{`<path>`}</code> element to
          display different icons if you want it. The first{" "}
          <code className="code-inline">{`<path>`}</code> rendered is the icon
          displayed when in the dark mode. <br />
          <br />
          This implementation also avoids a common issue with dark mode that is
          the flashy-ness. This is a simple but yet elegant way of doing it.
          Tailwind also makes it a lot easier for us to control how we want each
          element to look like in a given theme. Instead of deciding which
          color, say your light gray color, goes to whenever the theme is dark,
          you can pinpoint in the exact component how it will render.
          <br />
          <br />
          This is especially important since its dark mode isn't only getting
          colors to the opposite side of the light spectrum. Great dark mode
          implementations preserve the interface depth, still displaying how
          components, elements, and sections relate to each other in the desired
          hierarchy.
          <br />
          <br />
          Hope you dig it! I wish I had found some article like this one when I
          was freaking out on how to this. There you have it! For the night
          owl's eye health sake, dark mode.
        </p>
      </div>
      <Footer />
    </article>
  );
}
