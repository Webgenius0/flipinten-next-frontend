import DashboardAllPages from "@/pages/AllPages/DashboardAllPages";
import FreelancerDashboardAllPages from "@/pages/AllPages/FreelancerDashboardAllPages";
import YtServicesAllPages from "@/pages/AllPages/YtServicesAllPages";
import React from "react";

export default function page() {
  return (
    <div className="space-y-8">
      <DashboardAllPages />
      <hr className="border border-dashed" />
      <YtServicesAllPages />
      <hr className="border border-dashed"/>
      <FreelancerDashboardAllPages />
    </div>
  );
}
