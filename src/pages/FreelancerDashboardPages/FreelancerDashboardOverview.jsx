import FreelancerOverviewCard from "@/components/FreelancerDashboardComponents/FreelancerDashboardOverview/FreelancerOverviewCard";
import FreelancerOverviewMiddleContent from "@/components/FreelancerDashboardComponents/FreelancerDashboardOverview/FreelancerOverviewMiddleContent";
import React from "react";

export default function FreelancerDashboardOverview() {
  return (
    <div className="space-y-12">
      <FreelancerOverviewCard />
      <FreelancerOverviewMiddleContent />
    </div>
  );
}
