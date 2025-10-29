import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import { freelancerStories } from "@/data/freelancerStoriesData";
import FreelancerCard from "../common/Cards/FreelancerCard";

const FreelancersStoriesSection = () => {
  return (
    <CommonSection>
      <SectionHeading
        title={"Freelancer Success Stories"}
        subtitle={
          "See how freelancers are building successful careers on our platform"
        }
      />

      {/* cards container  */}
      <div className="grid grid-cols-3 gap-8">
        {freelancerStories.map((freelancer, index) => {
          return <FreelancerCard key={index} freelancer={freelancer} />;
        })}
      </div>
    </CommonSection>
  );
};

export default FreelancersStoriesSection;
