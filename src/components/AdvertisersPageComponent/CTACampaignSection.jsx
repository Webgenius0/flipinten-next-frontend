import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import { campaignSteps } from "@/data/campaignSteps";
import StepCard from "../common/Cards/StepCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CTACampaignSection = () => {
  return (
    <CommonSection sectionBG={"bg-card"}>
      <SectionHeading
        title={"Start your first campaign today"}
        subtitle={
          "Join thousands of brands who trust our platform for their creator marketing campaigns. Get started in minutes with our guided campaign wizard."
        }
      />



      {/* cards  */}
      <div className="flex items-center gap-6">
        {campaignSteps?.map((step, index) => {
          return (
            <StepCard
              step={step}
              index={index}
              length={campaignSteps.length}
              key={index}
            />
          );
        })}
      </div>



      {/* button  */}
      <div className=" mt-12 max-w-max mx-auto">
        <Button size={'lg'}>
          Create campaign <ArrowRight />
        </Button>
      </div>
    </CommonSection>
  );
};

export default CTACampaignSection;
