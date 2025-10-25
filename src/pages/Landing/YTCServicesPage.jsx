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
    </>
  );
};

export default YTCServicesPage;
