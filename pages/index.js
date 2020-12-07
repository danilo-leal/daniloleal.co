import Head from 'next/head';
import NavBar from './components/NavBar';
import HomeHero from './components/HomeHero';
import HomeTags from './components/HomeTags';
import JobStrips from './components/JobStrips';
import Divider from './components/Divider';

export default function Home() {
  return (
    <body className="h-full pr-5 pl-5 pb-8 bg-white dark:bg-blackish">
      <NavBar />
      <div className="max-w-xl m-auto pt-12">
        <HomeHero />
        <HomeTags />
        <Divider />
        <JobStrips />
      </div>
    </body>
  );
}
