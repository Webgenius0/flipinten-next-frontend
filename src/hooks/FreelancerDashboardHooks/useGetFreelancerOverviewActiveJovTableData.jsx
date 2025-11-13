import React from "react";

export default function useGetFreelancerOverviewActiveJovTableData() {
  const jobList = [
    {
      id: 1,
      jobId: "Sup-2025-001",
      projectTitle: "Video Production",
      client: "Need changes in Video",
      status: "In progress",
      deadline: "8 Sep 2025",
      action: "View",
    },
    {
      id: 2,
      jobId: "TKT-2025001",
      projectTitle: "Channel Progress",
      client: "Video upload schedule inquiry..",
      status: "Revision",
      deadline: "8 Sep 2025",
      action: "Review",
    },
    {
      id: 3,
      jobId: "TKT-2025001",
      projectTitle: "Channel Progress",
      client: "Video upload schedule inquiry..",
      status: "Review",
      deadline: "8 Sep 2025",
      action: "View",
    },
  ];

  return {jobList};
}
