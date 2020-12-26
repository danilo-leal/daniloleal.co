import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>danilo leal</title>
        <meta
          property="og:title"
          name="danilo leal"
          content="Explorer and designer."
          key="title"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
        <script
          async
          defer
          data-domain="daniloleal.co"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <body className="bg-white dark:bg-blackish">
        <Component {...pageProps} />
      </body>
    </ThemeProvider>
  );
}

export default MyApp;
