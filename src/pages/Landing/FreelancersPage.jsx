import DemandingSkillsSection from "@/components/FreelancersPageComponents/DemandingSkillsSection";
import FreelancersBanner from "@/components/FreelancersPageComponents/FreelancersBanner";
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
    </>
  );
};

export default FreelancersPage;
