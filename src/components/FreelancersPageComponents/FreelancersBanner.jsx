import CommonSection from "@/components/common/CommonSection/CommonSection";
import SectionHeading from "@/components/common/CommonSection/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const FreelancersBanner = () => {
  return (
    <CommonSection sectionBG={"bg-card"}>
      <SectionHeading
        className={"max-w-[646px]"}
        title={
          <>
            Work on YouTube{" "}
            <span className="text-primary">Projects That Matter</span>
          </>
        }
        subtitle={
          "Connect with verified creators through our secure platform. Track real-time performance, ensure escrow safety, and achieve measurable ROI on every campaign."
        }
      />

      {/* actions  */}
      <div className="space-x-8 max-w-max mx-auto">
        <Button size={"lg"}>
          Become A Freelancer
          <ArrowRight />
        </Button>

        <Button variant={"outline"} size={"lg"}>
          Learn More
        </Button>
      </div>
    </CommonSection>
  );
};

export default FreelancersBanner;
