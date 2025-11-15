import React from "react";

export default function useGetFreelancerTaskDetailsTableData() {
  const tasks = [
    {
      deliverable: "Final Video",
      format: "mp4",
      version: "V1",
      uploadedOn: "8 Sep 2025",
      status: "In Review",
      action: "Replace",
    },
    {
      deliverable: "TKT-2025001",
      format: "gvg",
      version: "V2",
      uploadedOn: "8 Sep 2025",
      status: "Approved",
      action: "Replace",
    },
    {
      deliverable: "TKT-2025001",
      format: "sxf",
      version: "—",
      uploadedOn: "—",
      status: "Pending",
      action: "Upload",
    },
  ];
  return {tasks}
}
