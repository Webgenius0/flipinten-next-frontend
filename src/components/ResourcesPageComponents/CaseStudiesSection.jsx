import React, { Suspense } from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import CaseStudiesFilters from "./CaseStudiesFilters";
import CaseStudiesContainer from "./CaseStudiesContainer";
import CaseStudiesTrackRecord from "./CaseStudiesTrackRecord";

const CaseStudiesSection = () => {
  return (
    <>
      {/* heading and filter section  */}
      <CommonSection sectionBG={"bg-card"}>
        <SectionHeading
          title={
            <>
              Success Stories{" "}
              <span className="text-primary">& Case Studies</span>
            </>
          }
          subtitle={
            "Real results from real channels. See how our clients have built successful YouTube channels across different niches and investment levels."
          }
        />

        {/* filters  */}
        <Suspense fallback={<div>Loading filters...</div>}>
          <CaseStudiesFilters />
        </Suspense>
      </CommonSection>

      {/* case studies container  */}
      <CaseStudiesContainer />

      {/* track record */}
      <CaseStudiesTrackRecord />
    </>
  );
};

export default CaseStudiesSection;
