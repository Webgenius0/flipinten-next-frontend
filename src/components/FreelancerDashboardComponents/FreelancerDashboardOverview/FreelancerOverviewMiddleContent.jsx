import React from "react";
import FreelancerOverviewEarningSnapshot from "./FreelancerOverviewEarningSnapshot";
import FreelancerOverviewRecentMessages from "./FreelancerOverviewRecentMessages";
import FreelancerOverviewPendingRequest from "./FreelancerOverviewPendingRequest";

export default function FreelancerOverviewMiddleContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div className="col-span-8 space-y-8">
        <div>
          <FreelancerOverviewEarningSnapshot />
        </div>

        <div>
          <FreelancerOverviewRecentMessages />
        </div>
      </div>

      <div className="col-span-4">
        <FreelancerOverviewPendingRequest />
      </div>
    </div>
  );
}
