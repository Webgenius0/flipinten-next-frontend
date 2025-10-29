import FAQSectionCommon from "@/components/commonSections.jsx/FAQSectionCommon";
import CreatorHero from "@/components/MarketplaceComponents/CreatorHero";
import HowMarketplaceWorksSection from "@/components/MarketplaceComponents/HowMarketplaceWorksSection";
import TrustSection from "@/components/MarketplaceComponents/TrustSection";
import VerifyChannelSection from "@/components/MarketplaceComponents/VerifyChannelSection";
import React from "react";

const MarketplacePage = () => {
  return (
    <>
      <CreatorHero />
      <VerifyChannelSection />
      <HowMarketplaceWorksSection/>
      <TrustSection/>
      <FAQSectionCommon/>
    </>
  );
};

export default MarketplacePage;
