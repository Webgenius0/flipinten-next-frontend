import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import VerifyChannelCard from "../common/Cards/VerifyChannelCard";

const VerifyChannelSection = () => {
  return (
    <CommonSection>
      <SectionHeading
        title={"Verify & Connect Your Channel"}
        subtitle={
          "Connect your YouTube channel to get started with brand campaigns. We'll verify your stats and match you with relevant advertisers."
        }
      />

      {/* card  */}
      <div className="max-w-max mx-auto">
        <VerifyChannelCard />
      </div>
    </CommonSection>
  );
};

export default VerifyChannelSection;
