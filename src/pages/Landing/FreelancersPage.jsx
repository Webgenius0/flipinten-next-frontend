import DemandingSkillsSection from "@/components/FreelancersPageComponents/DemandingSkillsSection";
import FreelancersBanner from "@/components/FreelancersPageComponents/FreelancersBanner";
import FreelancersStoriesSection from "@/components/FreelancersPageComponents/FreelancersStoriesSection";
import HowFreelancersWorks from "@/components/FreelancersPageComponents/HowFreelancersWorks";
import WhyFreelancersChooseUs from "@/components/FreelancersPageComponents/WhyFreelancersChooseUs";
import React from "react";

const FreelancersPage = () => {
  return (
    <>
      <FreelancersBanner />
      <HowFreelancersWorks />
      <WhyFreelancersChooseUs />
      <DemandingSkillsSection />
      <FreelancersStoriesSection />
    </>
  );
};

export default FreelancersPage;
