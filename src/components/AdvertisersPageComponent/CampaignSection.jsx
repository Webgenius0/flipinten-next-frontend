import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import CampaignBrief from "./CampaignBrief";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CampaignSection = () => {
  return (
    <CommonSection sectionBG={"bg-card"}>
      <SectionHeading
        className={"max-w-[756px]"}
        title={"Campaign Brief Builder"}
        subtitle={
          "Create detailed campaign briefs with our intuitive builder. Set objectives, define deliverables, and establish budgets with complete transparency."
        }
      />

      {/* campaign brief container  */}
      <CampaignBrief />

      {/* button  */}
      <div className=" mt-12 max-w-max mx-auto">
        <Button className={"!py-7 rounded-xl"}>
          Start Building Your campaign Brief <ArrowRight />
        </Button>
      </div>
    </CommonSection>
  );
};

export default CampaignSection;
