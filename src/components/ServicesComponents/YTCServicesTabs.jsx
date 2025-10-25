import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import ServicesTabsContainer from "../common/Tabs/ServicesTabs/ServicesTabsContainer";

const YTCServicesTabs = () => {
  return (
    <CommonSection>
      <SectionHeading
        title={
          <>
            Professional <span className="text-primary">YouTube Services</span>
          </>
        }
        subtitle={
          "Take your channel to the next level with our professional SEO, video production, and voice-over services."
        }
      />

      <ServicesTabsContainer />
    </CommonSection>
  );
};

export default YTCServicesTabs;
