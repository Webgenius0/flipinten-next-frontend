import ClockSvg from "@/components/svg/ClockSvg";
import DocumentsSvg from "@/components/svg/DashboardSvg/DocumentsSvg";
import DollarSvg from "@/components/svg/DashboardSvg/DollarSvg";
import RoundedQuestionSvg from "@/components/svg/DashboardSvg/RoundedQuestionSvg";
import React from "react";

export default function useBillingCardDataQuery() {
  const info = [
    {
      id: 1,
      title: "Total Billed This Month",
      value: "4",
      icon: <DocumentsSvg fill={"#2563EB"} />,
      color: "#2563EB",
    },
    {
      id: 2,
      title: "Paid Amount",
      value: "$250",
      icon: <DollarSvg />,
      color: "#10AD41",
    },
    {
      id: 3,
      title: "Pending Dues",
      value: "$1000",
      icon: <RoundedQuestionSvg />,
      color: "#FF4027",
    },
    {
      id: 4,
      title: "Next Due Date",
      value: "15 Dec, 2025",
      icon: <ClockSvg fill={'#FFED3C'}/>,
      color: "#FFED3C",
    },
  ];
  return info;
}
