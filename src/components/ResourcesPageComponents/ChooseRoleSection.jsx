import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import HowItWorksCard from "../common/Cards/HowItWorksCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { whatBringsYou } from "@/data/whatBringsYouData";

const ChooseRoleSection = () => {
  return (
    <CommonSection>
      <SectionHeading
        title={"What brings you here?"}
        subtitle={
          "Help us personalize your experience by selecting your primary goal"
        }
      />

      {/* procedures container  */}
      <div className="grid grid-cols-3 gap-8 mt-10">
        {whatBringsYou?.map((item, idx) => {
          return (
            <HowItWorksCard
              className={"px-6 py-8 border-neutral border-2 hover:border-primary hover:shadow-[0_0_30px_0_rgba(255,0,0,0.30)]"}
              idx={idx}
              key={idx}
              item={item}
            />
          );
        })}
      </div>

      {/* buttons  */}
      <div className="max-w-max mx-auto my-16">
        <Button size={"lg"}>
          Continue
          <ArrowRight />
        </Button>
      </div>

      {/* message  */}
      <p className="text-neutral500 text-lg text-center">
        Don't worry - you can access all features regardless of your selection.
        This just helps us show you the most relevant content first.
      </p>
    </CommonSection>
  );
};
export default ChooseRoleSection;
