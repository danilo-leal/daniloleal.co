import React from "react";
import Divider from "../atoms/Divider";

export default function ShowOffTemp() {
  return (
    <div className="pt-4 grid sm:grid-cols-2 gap-4">
      <a
        className="hover:bg-gray-50 dark:hover:bg-black transition-all rounded-lg p-8 border border-solid border-gray-200 dark:border-gray-800 flex items-center justify-between"
        href="https://www.figma.com/file/Qsu86kGJ7LK0R4rFV618Qo/materialUI?node-id=1%3A3"
      >
        <div className="flex items-center space-x-6 ">
          <svg
            className="h-7 w-7 fill-current text-gray-400"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.3675 12.9152C31.6255 12.5001 30.7529 12.1377 30.4275 12.0061C30.3149 11.92 30.2429 11.8638 30.2429 11.8638C30.2429 11.8638 25.8461 8.52183 23.9073 7.65584C21.9685 6.78865 18.5963 4.90117 15.1736 5.00404C12.4691 5.08418 10.8016 5.61645 10.2184 5.76477C9.52706 5.9418 9.06431 6.14992 9.82205 6.5279C10.0754 6.65588 11.1563 7.33887 12.4691 8.13429C14.3854 9.29811 16.7971 10.6988 17.8454 10.9535C18.8474 11.1976 20.5003 11.5552 22.6114 11.5073C25.0208 11.4535 26.1929 12.5456 26.4294 12.9439C25.9981 12.2932 24.3566 11.7717 22.1666 11.9152C20.0589 12.0528 18.3644 11.9033 17.3781 11.5923C15.4449 10.9811 13.3732 10.0636 11.6314 9.19884C10.9153 9.42969 10.474 9.62465 10.206 9.74546C9.598 10.0182 9.02941 10.5098 9.88173 10.7646C10.4909 10.9476 16.1903 13.1137 17.8487 13.219C18.7923 13.2788 20.3393 13.3386 22.2443 12.9558C24.3993 12.5241 25.5219 13.4642 25.7853 13.829C25.112 14.9151 24.6718 16.1782 24.7979 17.5812C16.9176 16.1052 14.4023 15.3409 12.6233 15.0168C9.51243 14.4474 5.56158 17.2475 5.0763 20.7151C4.80158 22.6851 5.27447 24.5247 6.40151 26.228C7.6479 28.1131 9.28949 29.7374 9.52819 30.0843C9.68131 30.3785 9.63177 31.156 9.64191 31.6799C9.65317 32.2684 10.349 32.7959 10.7554 32.8354C10.9964 32.8593 15.6622 34.4071 15.6622 34.4071L22.5731 36.6665C22.5731 36.6665 22.6789 36.1606 22.6992 35.9465C22.7521 35.4034 22.3637 34.0638 20.7435 33.5626C18.3599 32.8007 17.8915 32.656 17.3837 32.4933C17.1101 32.406 17.3027 32.4012 17.7249 32.0459C18.4477 31.3952 19.0659 30.5185 19.3822 29.8032C20.793 26.6179 19.0174 23.7807 19.0174 23.7807C19.0174 23.7807 20.1253 25.0163 20.5419 27.1777C21.0621 29.8774 19.3395 32.0196 19.3395 32.0196L20.3674 32.3354C20.3674 32.3354 27.0081 25.2316 27.6566 24.4637C28.2038 23.8154 29.1563 23.4076 29.6405 23.2401C31.4116 22.6947 33.6274 21.6409 34.1903 21.2617C34.7533 20.8825 35.4435 19.5453 35.6169 19.2151C35.7903 18.8838 36.0166 18.4496 36.0616 17.9568C36.0762 17.7834 35.1305 16.4425 35.1305 16.4425C35.1305 16.4425 33.6161 13.7214 32.3675 12.9152ZM13.0409 34.8086C12.648 35.0562 12.5118 35.7153 13.0837 36.0717C13.5915 36.3552 15.2962 35.3624 15.2962 35.3624L13.5859 34.7895C13.5859 34.7895 13.3179 34.6699 13.0409 34.8086Z"
            />
          </svg>
          <div>
            <p className="dark:text-white font-medium mb-1">Loggi</p>
            <p className="text-gray-600">Current work</p>
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
      </a>
      <a
        className="hover:bg-gray-50 dark:hover:bg-black transition-all rounded-lg p-8 border border-solid border-gray-200 dark:border-gray-800 flex items-center justify-between"
        href="/cases/ifood"
      >
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
            <p className="dark:text-white font-medium mb-1">iFood</p>
            <p className="text-gray-600">2017 - 2019</p>
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
      </a>
      <a
        className="hover:bg-gray-50 dark:hover:bg-black transition-all rounded-lg p-8 border border-solid border-gray-200 dark:border-gray-800 flex items-center justify-between"
        href="/cases/livia"
      >
        <div className="flex items-center space-x-6 ">
          <svg
            className="w-6 h-6 fill-current text-gray-400"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.6723 2.39999C6.62642 2.39999 5.88454 2.61565 5.1366 3.02062C4.38866 3.42558 3.80168 4.01985 3.40167 4.77706C3.00167 5.53428 2.78865 6.28536 2.78865 8.35661V8.37415V11.8434V16.0437C2.78294 16.0477 2.77726 16.0519 2.77161 16.0562C2.71715 16.0977 2.67436 16.1408 2.57077 16.2769L2.11857 16.8707C2.04169 16.9716 2 17.0955 2 17.223C2 17.5416 2.25517 17.8 2.56994 17.8H2.78865V17.8H12.099V17.8H12.1164C14.1622 17.8 14.9041 17.5843 15.6521 17.1794C16.4 16.7744 16.987 16.1801 17.387 15.4229C17.787 14.6657 18 13.9146 18 11.8434V8.35661C18 6.28536 17.787 5.53428 17.387 4.77706C16.987 4.01985 16.4 3.42558 15.6521 3.02062C14.9041 2.61565 14.1622 2.39999 12.1164 2.39999H8.6723ZM10.2632 7.04652C10.102 7.04652 9.96084 7.08063 9.84428 7.14425C9.72772 7.20786 9.63575 7.30097 9.57291 7.41898C9.51008 7.53699 9.47639 7.67989 9.47639 7.84308V9.27864H8.00953C7.84662 9.27864 7.70397 9.31239 7.58617 9.37534C7.46837 9.43828 7.37541 9.53041 7.31191 9.64718C7.24841 9.76394 7.21436 9.90534 7.21436 10.0668C7.21436 10.2283 7.24841 10.3697 7.31191 10.4864C7.37541 10.6032 7.46837 10.6953 7.58617 10.7583C7.70397 10.8212 7.84662 10.855 8.00953 10.855H9.47639V12.4896C9.47639 12.6528 9.51008 12.7957 9.57291 12.9137C9.63575 13.0317 9.72772 13.1248 9.84428 13.1885C9.96084 13.2521 10.102 13.2862 10.2632 13.2862C10.4244 13.2862 10.5655 13.2521 10.6821 13.1885C10.7986 13.1248 10.8906 13.0317 10.9534 12.9137C11.0163 12.7957 11.05 12.6528 11.05 12.4896V10.855H12.648C12.8109 10.855 12.9536 10.8212 13.0714 10.7583C13.1892 10.6953 13.2821 10.6032 13.3456 10.4864C13.4091 10.3697 13.4432 10.2283 13.4432 10.0668C13.4432 9.90534 13.4091 9.76394 13.3456 9.64718C13.2821 9.53041 13.1892 9.43828 13.0714 9.37534C12.9536 9.31239 12.8109 9.27864 12.648 9.27864H11.05V7.84308C11.05 7.67989 11.0163 7.53699 10.9534 7.41898C10.8906 7.30097 10.7986 7.20786 10.6821 7.14425C10.5655 7.08063 10.4244 7.04652 10.2632 7.04652Z"
            />
          </svg>

          <div>
            <p className="dark:text-white font-medium mb-1">LiviaPro</p>
            <p className="text-gray-600">2019</p>
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
      </a>
      <a
        className="hover:bg-gray-50 dark:hover:bg-black transition-all rounded-lg p-8 border border-solid border-gray-200 dark:border-gray-800 flex items-center justify-between"
        href="https://www.figma.com/file/Qsu86kGJ7LK0R4rFV618Qo/materialUI?node-id=1%3A5"
      >
        <div className="flex items-center space-x-6 ">
          <svg
            className="h-6 w-6 stroke-current text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <p className="dark:text-white font-medium mb-1">Coop</p>
            <p className="text-gray-600">Side Gig, 2020</p>
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
      </a>
      <a
        className="hover:bg-gray-50 dark:hover:bg-black transition-all rounded-lg p-8 border border-solid border-gray-200 dark:border-gray-800 flex items-center justify-between"
        href="https://vestibulei.webflow.io/"
      >
        <div className="flex items-center space-x-6 ">
          <svg
            className="h-5 w-5 fill-current text-gray-400"
            viewBox="0 0 143 129"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M131.597 15.5779C131.798 15.7793 131.986 15.9668 132.174 16.1682L132.188 16.1613C144.158 28.7576 143.902 48.5908 131.611 60.8745L68.0948 124.347C66.3918 126.053 64.0769 127.008 61.6653 127L11.1334 126.903C6.15245 126.88 2.12025 122.851 2.09742 117.874L2.00011 67.3683C1.99173 64.9586 2.94772 62.6456 4.65529 60.944L63.6394 2L72.6753 11.0288L23.7003 60.0342L69.0262 105.331L122.547 51.8527C129.954 44.3306 129.905 32.2478 122.437 24.786C114.969 17.3242 102.877 17.2751 95.3487 24.6761L64.5291 55.4781C62.6996 57.0429 61.9026 59.5003 62.4656 61.8399C63.0287 64.1794 64.8568 66.0061 67.1982 66.5687C69.5396 67.1313 71.999 66.3348 73.565 64.5069L99.8458 38.2193L108.917 47.2828L82.6427 73.5357C75.0653 80.5768 63.2706 80.3653 55.9509 73.057C48.6312 65.7488 48.4104 53.9636 55.4514 46.3868L86.271 15.5779L86.8618 15.0014C99.23 3.25848 118.638 3.25848 131.006 15.0014L131.597 15.5779ZM14.7061 105.268L23.7421 114.332L60.025 114.311L14.7061 69.0143V105.268Z"
            />
          </svg>
          <div>
            <p className="dark:text-white font-medium mb-1">Vestibulei</p>
            <p className="text-gray-600">Side Gig, 2019</p>
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
      </a>
      <a
        className="hover:bg-gray-50 dark:hover:bg-black transition-all rounded-lg p-8 border border-solid border-gray-200 dark:border-gray-800 flex items-center justify-between"
        href="https://www.figma.com/file/Qsu86kGJ7LK0R4rFV618Qo/materialUI?node-id=1%3A4"
      >
        <div className="flex items-center space-x-6 ">
          <svg
            class="w-6 h-6 stroke-current text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
          <div>
            <p className="dark:text-white font-medium mb-1">Sampa</p>
            <p className="text-gray-600">Side Gig, 2020</p>
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
      </a>
    </div>
  );
}
