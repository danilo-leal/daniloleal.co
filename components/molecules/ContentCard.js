import React from "react";
import MainLink from "../atoms/MainLink";

export default function ContentCard(props) {
  return (
    <div className="border border-gray-200 rounded-lg transition-all hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black opacity-80 hover:opacity-100">
      <img
        className="h-56 w-full object-cover object-center rounded-t-lg transition-opacity"
        src={props.cardCover}
        alt={props.altImg}
      />
      <div className="p-4 flex items-end justify-between">
        <div className="flex flex-col space-y-3">
          <h1 className="h2-medium">{props.cardTitle}</h1>
          <h2 className="text-sm text-gray-500">
            {props.cardSubtitle} • {props.cardInfo}
          </h2>
          <MainLink string="See this review" path={props.cardPage} />
        </div>
      </div>
    </div>
  );
}
