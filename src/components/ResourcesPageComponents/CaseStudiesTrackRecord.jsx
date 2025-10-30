import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import CasestudiesTrackCard from "../common/Cards/CasestudiesTrackCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesTrackRecord() {
  return (
    <CommonSection sectionBG={"bg-card"}>
      <SectionHeading
        title={"Our Track Record"}
        subtitle={"Consistent results across all niches and investment levels"}
      />

      {/* card container */}
      <div className="mt-16">
        <CasestudiesTrackCard />

        {/* button */}
        <div className="max-w-max mx-auto mt-16">
          <Button onClick={'hello'} size={"lg"}>
            Start Your Success Story
            <ArrowRight />
          </Button>
        </div>
      </div>
    </CommonSection>
  );
}
