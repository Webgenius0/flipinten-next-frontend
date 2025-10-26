import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import { trustData } from "@/data/trustData";
import TrustCard from "../common/Cards/TrustCard";
import TrustStatCard from "../common/Cards/TrustStatCard";

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



      {/* trust stat cards container  */}
      <div className="grid grid-cols-4 gap-8 mt-8">
        {trustData?.stats?.map((data, idx) => {
          return <TrustStatCard key={idx} data={data} />;
        })}
      </div>
    </CommonSection>
  );
};

export default TrustSection;
 