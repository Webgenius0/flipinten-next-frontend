import AdvertisersHero from "@/components/AdvertisersPageComponent/AdvertisersHero";
import AdvertisersStatsSection from "@/components/AdvertisersPageComponent/AdvertisersStatsSection";
import CampaignSection from "@/components/AdvertisersPageComponent/CampaignSection";
import React from "react";

const AdvertisersPage = () => {
  return (
    <>
      <AdvertisersHero />
      <AdvertisersStatsSection/>
      <CampaignSection/>
    </>
  );
};

export default AdvertisersPage;
