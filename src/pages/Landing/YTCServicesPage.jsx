import FAQSectionCommon from "@/components/commonSections.jsx/FAQSectionCommon";
import PackagesSection from "@/components/ServicesComponents/PackagesSection";
import ProcessesSection from "@/components/ServicesComponents/ProcessesSection";
import YTCServicesTabs from "@/components/ServicesComponents/YTCServicesTabs";
import React from "react";

const YTCServicesPage = () => {
  return (
    <>
      <YTCServicesTabs />
      <PackagesSection />
      <ProcessesSection />

      <FAQSectionCommon/>
    </>
  );
};

export default YTCServicesPage;
