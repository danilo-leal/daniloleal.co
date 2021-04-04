import React from "react";
import { useTheme } from "next-themes";
import MainLink from "../atoms/MainLink";

export default function SideGigCard(props) {
  const { theme, setTheme } = useTheme();
  const {
    sidegig,
    logo,
    logoAlt,
    description,
    darkImg,
    lightImg,
    imgAlt,
    linkString,
    path,
  } = props;

  const branding = {
    Coop: {
      bg: "bg-blue-50 dark:bg-black",
      lg: "bg-blue-500",
    },
    "Tailwind para Designers": {
      bg: "bg-yellow-50 dark:bg-black",
      lg: "bg-yellow-500",
    },
  };

  return (
    <div className="border border-gray-200 rounded-lg transition-all hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black opacity-80 hover:opacity-100 relative">
      <div
        className={`h-8 w-8 rounded-full flex flex-col items-center justify-center shadow-md absolute inset-y-4 right-0 mr-4 ${branding[sidegig].lg}`}
      >
        <img src={logo} alt={logoAlt} />
      </div>
      <div
        className={`h-56 w-full object-cover object-center rounded-t-lg transition-opacity overflow-hidden flex flex-col items-center border-b border-gray-200 dark:border-gray-700 
      ${branding[sidegig].bg}`}
      >
        {theme === "dark" ? (
          <img
            className="w-64 mt-16 shadow-2xl rounded-md border border-gray-800"
            src={darkImg}
            alt={imgAlt}
          />
        ) : (
          <img
            className="w-64 mt-16 shadow-2xl rounded-md border border-gray-200"
            src={lightImg}
            alt={imgAlt}
          />
        )}
      </div>
      <div className="p-4 flex items-end justify-between">
        <div className="flex flex-col space-y-3">
          <h2 className="h2-medium">{sidegig}</h2>
          <p className="text-sm text-gray-500">{description}</p>
          <MainLink string={linkString} path={path} />
        </div>
      </div>
    </div>
  );
}
