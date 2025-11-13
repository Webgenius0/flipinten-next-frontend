import FreelancerMyBidsAnalytics from "@/components/FreelancerDashboardComponents/FreelancerDashboardMyBids/FreelancerMyBidsAnalytics";
import FreelancerMyBidsBidsTable from "@/components/FreelancerDashboardComponents/FreelancerDashboardMyBids/FreelancerMyBidsBidsTable";
import FreelancerMyBigsOpenGigs from "@/components/FreelancerDashboardComponents/FreelancerDashboardMyBids/FreelancerMyBigsOpenGigs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export default function FreelancerDashboardMyBids() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="gigs">
        <div
          className={"w-full mx-auto mb-12 bg-white border-none rounded-[12px]"}
        >
          {/* tab options */}
          <TabsList className={"w-full justify-between border-none"}>
            <TabsTrigger className={"rounded-xl"} value="gigs">
              Open Gigs
            </TabsTrigger>
            <TabsTrigger className={"rounded-xl"} value="bids">
              My Bids
            </TabsTrigger>
            <TabsTrigger className={"rounded-xl"} value="analytics">
              Analytics
            </TabsTrigger>
          </TabsList>
        </div>

        {/* tab 1 */}
        <TabsContent className={"space-y-12"} value="gigs">
          <FreelancerMyBigsOpenGigs />
        </TabsContent>

        {/* tab 2  */}
        <TabsContent className={"space-y-12"} value="bids">
          <FreelancerMyBidsBidsTable />
        </TabsContent>

        {/* tab 3 */}
        <TabsContent className={"space-y-12"} value="analytics">
          <FreelancerMyBidsAnalytics />
        </TabsContent>
      </Tabs>
    </div>
  );
}
