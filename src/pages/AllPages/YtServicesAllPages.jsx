import DashboardBillingSVG from "@/components/svg/DashboardNavIcons/DashboardBillingSVG";
import DashboardOverviewSVG from "@/components/svg/DashboardNavIcons/DashboardOverviewSVG";
import DashboardSupportSVG from "@/components/svg/DashboardNavIcons/DashboardSupportSVG";
import DashboardYoutubeServiceSVG from "@/components/svg/DashboardNavIcons/DashboardYoutubeServiceSVG";
import Link from "next/link";
import React from "react";

const DashboardNavLinks = [
  {
    title: "YT-Services Overview",
    icon: DashboardOverviewSVG,
    link: "/yt-services-dashboard",
  },
  {
    title: "YT-Services Packages",
    icon: DashboardYoutubeServiceSVG,
    link: "/yt-services-dashboard/packages",
  },
  {
    title: "YT-Services My Orders",
    icon: DashboardYoutubeServiceSVG,
    link: "/yt-services-dashboard/my-orders",
  },
  {
    title: "YT-Services Deliveries",
    icon: DashboardYoutubeServiceSVG,
    link: "/yt-services-dashboard/deliveries",
  },
  {
    title: "YT-Services Billing & Transactions",
    icon: DashboardBillingSVG,
    link: "/yt-services-dashboard/yt-billing-transactions",
  },
  {
    title: "YT-Services Support",
    icon: DashboardSupportSVG,
    link: "/yt-services-dashboard/yt-support",
  },
];

export default function YtServicesAllPages() {
  return (
    <div>
      <h3 className="text-xl font-medium my-4 underline leading-relaxed">
        YT Services Dashboard
      </h3>

      <ul className="w-full h-full flex flex-col overflow-y-scroll gap-3 no-scrollbar">
        {DashboardNavLinks?.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              href={item.link}
              key={index}
              target="_blank"
              className={`text-[#5B6477] text-base font-medium hover:bg-[#F6F6F6] w-full items-center gap-3 p-3 rounded-lg cursor-pointer duration-300 inline-flex hover:text-red-500 `}
            >
              <Icon active />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
