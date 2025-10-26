import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import { trustData } from "@/data/trustData";
import TrustStatCard from "../common/Cards/TrustStatCard";

const WhyFreelancersChooseUs = () => {
  return (
    <CommonSection sectionBG={"bg-card"}>
      <SectionHeading
        title={"Why Freelancers Choose Us"}
        subtitle={
          "Built-in protections and tools to help you succeed"
        }
      />

      {/* trust stat cards container  */}
      <div className="grid grid-cols-4 gap-8 mt-8 mb-8">
        {trustData?.freeLancerTrust?.map((data, idx) => {
          return <TrustStatCard key={idx} data={data} />;
        })}
      </div>
    </CommonSection>
  );
};

export default WhyFreelancersChooseUs;
