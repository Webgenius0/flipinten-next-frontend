import MoneyDollarSvg from "@/components/svg/DashboardSvg/MoneyDollarSvg";
import PencilScaleSvg from "@/components/svg/DashboardSvg/PencilScaleSvg";
import ThreepersonSvg from "@/components/svg/DashboardSvg/ThreepersonSvg";
import React from "react";

export default function useMyReferralsCardDataQuery() {
  const info = [
    {
      id: 1,
      title: "Total Referrals",
      value: "4",
      icon: <ThreepersonSvg />,
      color: "#2563EB",
    },
    {
      id: 2,
      title: "Activ Referrals",
      value: "2",
      icon: <PencilScaleSvg />,
      color: "#10AD41",
    },
    {
      id: 3,
      title: "Total Referral Earnings",
      value: "$275",
      icon: (
        <MoneyDollarSvg
          className="group-hover:[&>path]:fill-black w-6 h-6"
          fillColor="currentColor"
        />
      ),
      color: "#8D1BFF",
    },
    {
      id: 4,
      title: "Pending Next Payout",
      value: "$125",
      icon: (
        <MoneyDollarSvg
          className="group-hover:[&>path]:fill-black w-7 h-7"
          fillColor="currentColor"
        />
      ),
      color: '#CA8A04',
    },
  ];
  return info;
}
