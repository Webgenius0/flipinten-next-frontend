import React from "react";

export default function useMyChannelEarningsCardQuery() {
  const info = [
    {
      id: 1,
      title: "Monitization Status",
      value: "Monitized",
      color: '#E8FFEF',
    },
    {
      id: 2,
      title: "Estimated Revenue",
      value: "2450",
      color: '#EEF5FF',
    },
    {
      id: 3,
      title: "Finalized Earnings (Monthly)",
      value: "52",
      color: '#F6EDFF',
    },
    {
      id: 4,
      title: "Profit Split Due",
      value: "$1070",
      color: '#FFE8E8',
    },
  ];
  return info;
}
