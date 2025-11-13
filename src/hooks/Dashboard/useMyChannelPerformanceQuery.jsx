import CalenderBlueSvg from "@/components/svg/DashboardSvg/CalenderBlueSvg";
import React from "react";

export default function useMyChannelPerformanceQuery() {
  const info = [
    {
      id: 1,
      title: "Videos",
      value: "59",
      icon: (
        <CalenderBlueSvg
          className="group-hover:[&>path]:fill-black w-6 h-6"
          fillColor="currentColor"
        />
      ),
      color: "#2563EB",
    },
    {
      id: 2,
      title: "Shorts",
      value: "52",
      icon: (
        <CalenderBlueSvg
          className="group-hover:[&>path]:fill-black w-6 h-6"
          fillColor="currentColor"
        />
      ),
      color: "#8D1BFF",
    },
    {
      id: 3,
      title: "Subscribers",
      value: "98K",
      icon: (
        <CalenderBlueSvg
          className="group-hover:[&>path]:fill-black w-6 h-6"
          fillColor="currentColor"
        />
      ),
      color: "#FF2222",
    },
    {
      id: 4,
      title: "Total Views",
      value: "1.9M",
      icon: (
        <CalenderBlueSvg
          className="group-hover:[&>path]:fill-black w-6 h-6"
          fillColor="currentColor"
        />
      ),
      color: "#10AD41",
    },
  ];

  return info;
}
