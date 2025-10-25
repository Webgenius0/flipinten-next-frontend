import FAQSectionCommon from "@/components/commonSections.jsx/FAQSectionCommon";
import PackagesSection from "@/components/ServicesComponents/PackagesSection";
import ProcessesSection from "@/components/ServicesComponents/ProcessesSection";
import WorkSection from "@/components/ServicesComponents/WorkSection";
import YTCServicesTabs from "@/components/ServicesComponents/YTCServicesTabs";
import React from "react";

const YTCServicesPage = () => {
  return (
    <>
      <YTCServicesTabs />
      <PackagesSection />
      <ProcessesSection />
      <WorkSection />
      <FAQSectionCommon />
    </>
  );
};

export default YTCServicesPage;
