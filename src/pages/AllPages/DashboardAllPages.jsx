import DashboardBillingSVG from "@/components/svg/DashboardNavIcons/DashboardBillingSVG";
import DashboardOverviewSVG from "@/components/svg/DashboardNavIcons/DashboardOverviewSVG";
import DashboardSupportSVG from "@/components/svg/DashboardNavIcons/DashboardSupportSVG";
import DashboardYoutubeServiceSVG from "@/components/svg/DashboardNavIcons/DashboardYoutubeServiceSVG";
import Link from "next/link";

import React from "react";

const DashboardNavLinks = [
  {
    title: "Dashboard Overview",
    icon: DashboardOverviewSVG,
    link: "/dashboard",
  },
  {
    title: "Dashboard Channel Plans",
    icon: DashboardYoutubeServiceSVG,
    link: "/dashboard/channel-plans",
  },
  {
    title: "Dashboard My Channels",
    icon: DashboardYoutubeServiceSVG,
    link: "/dashboard/my-channels",
  },
  {
    title: "Dashboard My Referrals",
    icon: DashboardYoutubeServiceSVG,
    link: "/dashboard/my-referrals",
  },
  {
    title: "Dashboard Billing & Transactions",
    icon: DashboardBillingSVG,
    link: "/dashboard/billing-transactions",
  },
  {
    title: "Dashboard Support",
    icon: DashboardSupportSVG,
    link: "/dashboard/support",
  },
];

export default function DashboardAllPages() {
  return (
    <div>
      <h3 className="text-xl font-medium my-4 underline leading-relaxed">Dashboard - YT Plans</h3>

      <ul className="w-full h-full flex flex-col overflow-y-scroll gap-3 no-scrollbar">
        {DashboardNavLinks?.map((item, index) => {
          const Icon = item.icon;
          
          return (
            <Link
              href={item.link}
              key={index}
              target="_blank"
              className={`text-[#5B6477] text-base font-medium hover:bg-[#F6F6F6] w-full items-center gap-3 p-3 rounded-lg cursor-pointer duration-300 inline-flex hover:text-red-500`}
            >
              <Icon active  />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
