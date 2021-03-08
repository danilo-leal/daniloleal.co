import Image from "next/image";
import Divider from "../components/atoms/Divider";
import IconsSocial from "../components/atoms/IconsSocial";
import NavBar from "../components/atoms/NavBar";
import HomeHero from "../components/molecules/HomeHero";
import HomeTags from "../components/molecules/HomeTags";
import CallOut from "../components/molecules/CallOut";

export default function Sketch() {
  return (
    <div className="global-wrapper">
      <NavBar />
      <div className="max-w-2xl m-auto pt-12 px-5">
        <HomeHero />
        <HomeTags />
        <Divider />
        <h1 className="h1">Selected works</h1>
        <div className="pt-4 grid grid-cols-2 gap-6">
          <div className="hover:bg-gray-50 dark:hover:bg-black transition-all rounded-lg p-8 border border-solid border-gray-200 dark:border-gray-800 flex space-y-3 justify-between">
            <div className="flex items-center space-x-6 ">
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current text-gray-400"
              >
                <title>iFood icon</title>
                <path d="M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998 0-2.29-2.175-3.293-4.244-3.293zm11.328 0c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293zM14.172 14.52l2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.913 8.913 0 01.23 14.541H0a9.598 9.598 0 008.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007 1.08 2.988 1.555-7.623-7.234-.02Z" />
              </svg>
              <div>
                <p className="dark:text-white font-medium">iFood</p>
                <p className="text-sm text-gray-600">Currently</p>
              </div>
            </div>
            <svg
              className="w-4 h-4 stroke-current text-draplin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>
          <div className="hover:bg-gray-50 dark:hover:bg-black transition-all rounded-lg p-8 border border-solid border-gray-200 dark:border-gray-800 flex space-y-3 justify-between">
            <div className="flex items-center space-x-6 ">
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current text-gray-400"
              >
                <title>iFood icon</title>
                <path d="M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998 0-2.29-2.175-3.293-4.244-3.293zm11.328 0c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293zM14.172 14.52l2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.913 8.913 0 01.23 14.541H0a9.598 9.598 0 008.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007 1.08 2.988 1.555-7.623-7.234-.02Z" />
              </svg>
              <div>
                <p className="dark:text-white font-medium">iFood</p>
                <p className="text-sm text-gray-600">Currently</p>
              </div>
            </div>
            <svg
              className="w-4 h-4 stroke-current text-draplin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>
          <div className="hover:bg-gray-50 dark:hover:bg-black transition-all rounded-lg p-8 border border-solid border-gray-200 dark:border-gray-800 flex space-y-3 justify-between">
            <div className="flex items-center space-x-6 ">
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current text-gray-400"
              >
                <title>iFood icon</title>
                <path d="M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998 0-2.29-2.175-3.293-4.244-3.293zm11.328 0c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293zM14.172 14.52l2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.913 8.913 0 01.23 14.541H0a9.598 9.598 0 008.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007 1.08 2.988 1.555-7.623-7.234-.02Z" />
              </svg>
              <div>
                <p className="dark:text-white font-medium">iFood</p>
                <p className="text-sm text-gray-600">Currently</p>
              </div>
            </div>
            <svg
              className="w-4 h-4 stroke-current text-draplin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>
          <div className="hover:bg-gray-50 dark:hover:bg-black transition-all rounded-lg p-8 border border-solid border-gray-200 dark:border-gray-800 flex space-y-3 justify-between">
            <div className="flex items-center space-x-6 ">
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current text-gray-400"
              >
                <title>iFood icon</title>
                <path d="M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998 0-2.29-2.175-3.293-4.244-3.293zm11.328 0c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293zM14.172 14.52l2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.913 8.913 0 01.23 14.541H0a9.598 9.598 0 008.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007 1.08 2.988 1.555-7.623-7.234-.02Z" />
              </svg>
              <div>
                <p className="dark:text-white font-medium">iFood</p>
                <p className="text-sm text-gray-600">Currently</p>
              </div>
            </div>
            <svg
              className="w-4 h-4 stroke-current text-draplin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>
        </div>
        <div className="pt-10 grid justify-center">
          <IconsSocial />
        </div>
      </div>
    </div>
  );
}
