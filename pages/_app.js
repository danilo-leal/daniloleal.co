import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import firebase from "firebase/app";
import firebaseConfig from "../firebase-config";

function MyApp({ Component, pageProps }) {
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>danilo leal</title>
        <meta
          property="og:title"
          name="danilo leal"
          content="explorer and designer"
          key="title"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
        <script
          async
          defer
          data-domain="daniloleal.co"
          src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <DefaultSeo {...SEO} />
      <body className="bg-white dark:bg-blackish">
        <Component {...pageProps} />
      </body>
    </ThemeProvider>
  );
}

export default MyApp;
