import YtSupportTable from "@/components/YtServicesDashboard/YtServicesSupport/YtSupportTable";
import YtSupportTop from "@/components/YtServicesDashboard/YtServicesSupport/YtSupportTop";
import React from "react";

export default function YtServicesDashSupportPage() {
  return (
    <div className="space-y-9">
      <YtSupportTop />
      <YtSupportTable />
    </div>
  );
}
