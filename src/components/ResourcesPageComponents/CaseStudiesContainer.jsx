import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "../common/Cards/CaseStudyCard";
import Image from "next/image";

const CaseStudiesContainer = () => {
  return (
    <CommonSection className={'grid grid-cols-2 gap-8'}>
      {caseStudies?.map((caseStudy, index) => {
        return <CaseStudyCard caseStudy={caseStudy} key={index} />;
      })}
    </CommonSection>
  );
};

export default CaseStudiesContainer;
