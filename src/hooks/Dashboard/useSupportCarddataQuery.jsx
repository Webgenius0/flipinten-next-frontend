import ClockSvg from "@/components/svg/ClockSvg";
import DocumentsSvg from "@/components/svg/DashboardSvg/DocumentsSvg";
import RoundedQuestionSvg from "@/components/svg/DashboardSvg/RoundedQuestionSvg";
import React from "react";

export default function useSupportCarddataQuery() {
  const info = [
    {
      id: 1,
      title: "Total Tickets",
      value: "12",
      icon: <DocumentsSvg fill={'#2563EB'}/>,
      color: "#2563EB",
    },
    {
      id: 2,
      title: "Open",
      value: "3",
      icon: <RoundedQuestionSvg  className="group-hover:[&>path]:fill-black w-6 h-6"
          fillColor="currentColor"/>,
      color: "#FF4027",
    },
    {
      id: 3,
      title: "In Progress",
      value: "2",
      icon: (
        <RoundedQuestionSvg
          className="group-hover:[&>path]:fill-black w-6 h-6"
          fillColor="currentColor"
        />
      ),
      color: "#CA8A04",
    },
    {
      id: 4,
      title: "Resolved",
      value: "7",
      icon: (
        <ClockSvg
          className="group-hover:[&>path]:fill-black"
          fill="currentColor"
        />
      ),
      color: "#10AD41",
    },
  ];
  return info;
}
