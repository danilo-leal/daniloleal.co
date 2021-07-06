import React from "react";
import CompanyStrip from "../atoms/CompanyStrip";

export default function JobTimeline() {
  return (
    <div className="relative">
      <div className="z-10 relative">
        <CompanyStrip
          company="Material-UI"
          period="Design Lead • Since 07/2021."
          companySite="https://material-ui.com/"
        />
        <CompanyStrip
          company="Loggi"
          period="Senior Product Designer • 09/2019 to 07/2021."
          currentCompany="false"
          companySite="https://www.loggi.com/"
        />
        <CompanyStrip
          company="Nexa"
          period="Product Designer • 05/2019 to 09/2019."
          currentCompany="false"
          companySite="https://www.linkedin.com/company/nexadigital/about/"
        />
        <CompanyStrip
          company="iFood"
          period="Product Designer • 02/2018 to 05/2019."
          currentCompany="false"
          companySite="https://www.ifood.com.br/"
        />
        <CompanyStrip
          company="Rapiddo"
          period="Designer • 07/2017 to 02/2018."
          currentCompany="false"
          companySite="https://www.linkedin.com/company/rapiddo/about/"
        />
      </div>
      <div className="z-0">
        <div className="absolute top-8 bg-gray-100 h-64 w-1 ml-0.5 dark:bg-black"></div>
      </div>
    </div>
  );
}
