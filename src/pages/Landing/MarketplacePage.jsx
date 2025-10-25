import CreatorHero from "@/components/MarketplaceComponents/CreatorHero";
import HowMarketplaceWorksSection from "@/components/MarketplaceComponents/HowMarketplaceWorksSection";
import VerifyChannelSection from "@/components/MarketplaceComponents/VerifyChannelSection";
import React from "react";

const MarketplacePage = () => {
  return (
    <>
      <CreatorHero />
      <VerifyChannelSection />
      <HowMarketplaceWorksSection/>
    </>
  );
};

export default MarketplacePage;
