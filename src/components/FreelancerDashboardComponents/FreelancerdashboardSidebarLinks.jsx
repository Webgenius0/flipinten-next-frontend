"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardOverviewSVG from "../svg/DashboardNavIcons/DashboardOverviewSVG";
import DashboardChannelPlansSVG from "../svg/DashboardNavIcons/DashboardYoutubeServiceSVG";
import DashboardBillingTransactionsSVG from "../svg/DashboardNavIcons/DashboardBillingSVG";
import DashboardSupportSVG from "../svg/DashboardNavIcons/DashboardSupportSVG";

export default function FreelancerdashboardSidebarLinks() {
  const pathname = usePathname();

  const DashboardNavLinks = [
    {
      title: "Overview",
      icon: DashboardOverviewSVG,
      link: "/freelancer-dashboard",
    },
    {
      title: "My Bids",
      icon: DashboardChannelPlansSVG,
      link: "/freelancer-dashboard/freelancer-my-bids",
    },
    {
      title: "Active Jobs",
      icon: DashboardChannelPlansSVG,
      link: "/freelancer-dashboard/freelancer-active-jobs",
    },
    {
      title: "Tasks",
      icon: DashboardChannelPlansSVG,
      link: "/freelancer-dashboard/freelancer-tasks",
    },
    {
      title: "Assets",
      icon: DashboardBillingTransactionsSVG,
      link: "/freelancer-dashboard/freelancer-assets",
    },
    {
      title: "Message",
      icon: DashboardSupportSVG,
      link: "/freelancer-dashboard/freelancer-message",
    },
    {
      title: "Earnings & Payouts",
      icon: DashboardBillingTransactionsSVG,
      link: "/freelancer-dashboard/freelancer-earning-and-payouts",
    },
    {
      title: "Performance",
      icon: DashboardBillingTransactionsSVG,
      link: "/freelancer-dashboard/freelancer-performance",
    },
    {
      title: "Disputes",
      icon: DashboardBillingTransactionsSVG,
      link: "/freelancer-dashboard/freelancer-disputes",
    },
    {
      title: "Supports",
      icon: DashboardBillingTransactionsSVG,
      link: "/freelancer-dashboard/freelancer-supports",
    },
    {
      title: "Settings & KYC",
      icon: DashboardBillingTransactionsSVG,
      link: "/freelancer-dashboard/freelancer-settings",
    },
    {
      title: "Announcements",
      icon: DashboardBillingTransactionsSVG,
      link: "/freelancer-dashboard/freelancer-announcements",
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
