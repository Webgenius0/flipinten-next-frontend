import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import { trustData } from "@/data/trustData";
import TrustCard from "../common/Cards/TrustCard";

const TrustSection = () => {
  return (
    <CommonSection sectionBG={"bg-card"}>
      <SectionHeading
        title={"Why Creators Trust Us"}
        subtitle={
          "Built for creators, by creators. We understand the challenges of monetization and provide the protection and support you need to succeed. "
        }
      />



      {/* trust cards container  */}
      <div className="grid grid-cols-3 gap-8">
        {trustData?.data?.map((trust, idx) => {
          return <TrustCard key={idx} trust={trust} />;
        })}
      </div>

    </CommonSection>
  );
};

export default TrustSection;
 