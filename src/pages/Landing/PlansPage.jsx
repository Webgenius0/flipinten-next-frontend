import InvestmentPlanSection from "@/components/commonSections.jsx/InvestmentPlanSection";
import GuaranteesSection from "@/components/PlansComponent.jsx/GuaranteesSection";
import MonetizationSection from "@/components/PlansComponent.jsx/MonetizationSection";
import PlansBannerSection from "@/components/PlansComponent.jsx/PlansBannerSection";
import React from "react";

const PlansPage = () => {
  return (
    <>
      <PlansBannerSection />
      <InvestmentPlanSection />
      <GuaranteesSection />
      <MonetizationSection />
    </>
  );
};

export default PlansPage;
