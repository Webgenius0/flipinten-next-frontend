import CommonSection from "@/components/common/CommonSection/CommonSection";
import SectionHeading from "@/components/common/CommonSection/SectionHeading";
import ServicesTabsContainer from "@/components/ServicesComponents/ServicesTabsContainer";
import React from "react";

const YTCServicesPage = () => {
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

export default YTCServicesPage;
