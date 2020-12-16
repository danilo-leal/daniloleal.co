import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>danilo leal</title>
        <meta property="og:title" content="danilo leal" key="title" />
        <script
          async
          defer
          data-domain="daniloleal.co"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <Head>
        <meta property="og:title" content="danilo leal" key="title" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
