"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardOverviewSVG from "../svg/DashboardNavIcons/DashboardOverviewSVG";
import DashboardChannelPlansSVG from "../svg/DashboardNavIcons/DashboardYoutubeServiceSVG";
import DashboardBillingTransactionsSVG from "../svg/DashboardNavIcons/DashboardBillingSVG";
import DashboardSupportSVG from "../svg/DashboardNavIcons/DashboardSupportSVG";

export default function YtServicesDashboardSidebarLinks() {
  const pathname = usePathname();

  const DashboardNavLinks = [
    {
      title: "Overview",
      icon: DashboardOverviewSVG,
      link: "/yt-services-dashboard",
    },
    {
      title: "Packages",
      icon: DashboardChannelPlansSVG,
      link: "/yt-services-dashboard/packages",
    },
    {
      title: "My Orders",
      icon: DashboardChannelPlansSVG,
      link: "/yt-services-dashboard/my-orders",
    },
    {
      title: "Deliveries",
      icon: DashboardChannelPlansSVG,
      link: "/yt-services-dashboard/deliveries",
    },
    {
      title: "Billing & Transactions",
      icon: DashboardBillingTransactionsSVG,
      link: "/yt-services-dashboard/yt-billing-transactions",
    },
    {
      title: "Support",
      icon: DashboardSupportSVG,
      link: "/yt-services-dashboard/yt-support",
    },
  ];

  return (
    <ul className="w-full h-full flex flex-col overflow-y-scroll gap-1 no-scrollbar">
      {DashboardNavLinks?.map((item, index) => {
        const isActive = pathname === item.link;
        const Icon = item.icon;

        return (
          <Link
            href={item.link}
            key={index}
            className={`${
              isActive
                ? `text-red-500 text-base font-medium bg-[#FFF1F0]`
                : "text-[#5B6477] text-base font-medium hover:bg-[#F6F6F6]"
            } w-full items-center gap-3 p-3 rounded-lg cursor-pointer duration-300 inline-flex`}
          >
            <Icon active={isActive} />
            <span>{item.title}</span>
          </Link>
        );
      })}
    </ul>
  );
}
