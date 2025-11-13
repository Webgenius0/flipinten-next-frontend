import React from "react";

export default function useGetMyBidsAnalyticsCartData() {
  const lists = [
    {
      metric: "Success Rate",
      value: "35%",
      description: "Won 5 out of 16 bids", 
      color: '#1CCC62',
    },
    {
      metric: "Top Categories",
      option: ["Video Editing", "SEO"],
      description: null,
    },
    {
      metric: "Average bid",
      value: "$170",
      description: "Per project",
      color: '#9333EA',
    },
    {
      metric: "Next Payout",
      value: "$400",
      description: "Due QCI",
      color: "#CA8A04"
    },
  ];

  return { lists };
}
