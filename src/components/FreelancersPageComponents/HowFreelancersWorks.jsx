import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import HowItWorksCard from "../common/Cards/HowItWorksCard";
import { howFreelancersWorks } from "@/data/howItWorks";

const HowFreelancersWorks = () => {
  return (
    <CommonSection>
      <SectionHeading
        title={"How It Works"}
        subtitle={
          "From signup to earnings in 4 simple steps"
        }
      />

      {/* procedures container  */}
      <div className="grid grid-cols-4 gap-8 mt-10">
        {howFreelancersWorks?.map((item, idx) => {
          return (
            <HowItWorksCard
              className={"px-6 py-8 border-0"}
              idx={idx}
              key={idx}
              item={item}
            />
          );
        })}
      </div>
    </CommonSection>
  );
};

export default HowFreelancersWorks;
