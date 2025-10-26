import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import { demandingSkills } from "@/data/demandingSkillsData";
import SkillsCard from "../common/Cards/SkillsCard";

const DemandingSkillsSection = () => {
  return (
    <CommonSection
    sectionBG={'bg-card'}
    >
      <SectionHeading
        title={"In-Demand Skills"}
        subtitle={"Earn competitive rates in these high-demand skill areas"}
      />

      {/* card container  */}
      <div className="grid grid-cols-2 gap-8">
        {demandingSkills?.map((demandingSkill, index) => {
          return <SkillsCard key={index} demandingSkill={demandingSkill} />;
        })}
      </div>
    </CommonSection>
  );
};

export default DemandingSkillsSection;
