import React from 'react';
import JobStrip from './JobStrip';

export default function JobTimeline() {
  return (
    <div className="relative">
      <div className="z-10 relative">
        <JobStrip company="Loggi" period="Since September 2019." />
        <JobStrip
          company="Nexa"
          period="May 2019 to September 2019."
          currentCompany="no"
        />
        <JobStrip
          company="iFood"
          period="February 2018 to May 2019."
          currentCompany="no"
        />
        <JobStrip
          company="Rapiddo Entegas"
          period="July 2017 to February 2018."
          currentCompany="no"
        />
      </div>
      <div className="z-0">
        <div className="absolute top-8 bg-gray-100 h-52 w-1 ml-0.5 dark:bg-black"></div>
      </div>
    </div>
  );
}
