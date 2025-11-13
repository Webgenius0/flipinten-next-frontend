import React from "react";

export default function useOverviewRecentTicketsQuery() {
  const tickets = [
    {
      id: 1,
      status: "Video uploaded",
      completion: "Completed",
      title: "How to Start YouTube Channel",
      time: "2 hours ago",
    },
    {
      id: 2,
      status: "Video uploaded",
      completion: "Completed",
      title: "How to Start YouTube Channel",
      time: "2 hours ago",
    },
    {
      id: 3,
      status: "Video uploaded",
      completion: "Completed",
      title: "How to Start YouTube Channel",
      time: "2 hours ago",
    },
  ];
  return tickets;
}
