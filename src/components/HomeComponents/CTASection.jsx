import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import ButtonArrow from "../common/CustomButton/ButtonArrow";

const CTASection = () => {
  return (
    <CommonSection sectionBG={"bg-gradient-linear"}>
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="text-center max-w-[792px] text-neutral">
          <h1 className="text-4xl font-semibold">Start in 3 minutes</h1>
          <p className="mt-6 text-lg">
            Join hundreds of successful creators and investors who have built
            their YouTube empire with TubePilot. Your journey to YouTube success
            starts now
          </p>
        </div>
        <ButtonArrow variant={"secondary"} className={"text-secondary"}>
          GetStarted
        </ButtonArrow>
      </div>
    </CommonSection>
  );
};

export default CTASection;
