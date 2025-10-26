import AdvertisersHero from "@/components/AdvertisersPageComponent/AdvertisersHero";
import AdvertisersStatsSection from "@/components/AdvertisersPageComponent/AdvertisersStatsSection";
import CampaignSection from "@/components/AdvertisersPageComponent/CampaignSection";
import CTACampaignSection from "@/components/AdvertisersPageComponent/CTACampaignSection";
import PlansBannerSection from "@/components/PlansComponent.jsx/PlansBannerSection";
import React from "react";

const AdvertisersPage = () => {
  return (
    <>
      <AdvertisersHero />
      <AdvertisersStatsSection/>
      <CampaignSection/>
      <PlansBannerSection/>
      <CTACampaignSection/>
    </>
  );
};

export default AdvertisersPage;
