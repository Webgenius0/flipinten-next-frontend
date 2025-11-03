import YtOverviewPendingAction from "@/components/YtServicesDashboard/YtServicesOverview/YtOverviewPendingAction";
import YtServicesOverviewCards from "@/components/YtServicesDashboard/YtServicesOverview/YtServicesOverviewCards";
import YtServicesOverviewPendingOrdersTable from "@/components/YtServicesDashboard/YtServicesOverview/YtServicesOverviewPendingOrdersTable";
import YtServicesRecentDeleveryTable from "@/components/YtServicesDashboard/YtServicesOverview/YtServicesRecentDeleveryTable";
import React from "react";

export default function YtServicesDashOverviewPage() {
  return (
    <div className="space-y-12">
      <YtServicesOverviewCards />
      <YtServicesRecentDeleveryTable />
      <YtServicesOverviewPendingOrdersTable />
      <YtOverviewPendingAction />
    </div>
  );
}
