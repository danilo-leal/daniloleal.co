import React from 'react';
import CompanyStrip from '../atoms/CompanyStrip';

export default function JobTimeline() {
  return (
    <div className="relative">
      <div className="z-10 relative">
        <CompanyStrip
          company="Loggi"
          period="September 2019."
          companySite="https://www.loggi.com/"
        />
        <CompanyStrip
          company="Nexa"
          period="May 2019 to September 2019."
          currentCompany="no"
          companySite="https://www.linkedin.com/company/nexadigital/about/"
        />
        <CompanyStrip
          company="iFood"
          period="February 2018 to May 2019."
          currentCompany="no"
          companySite="https://www.ifood.com.br/"
        />
        <CompanyStrip
          company="Rapiddo Entegas"
          period="July 2017 to February 2018."
          currentCompany="no"
          companySite="https://www.linkedin.com/company/rapiddo/about/"
        />
      </div>
      <div className="z-0">
        <div className="absolute top-8 bg-gray-100 h-48 w-1 ml-0.5 dark:bg-black"></div>
      </div>
    </div>
  );
}
