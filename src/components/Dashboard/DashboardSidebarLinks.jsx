"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardOverviewSVG from "../svg/DashboardNavIcons/DashboardOverviewSVG";
import DashboardChannelPlansSVG from "../svg/DashboardNavIcons/DashboardYoutubeServiceSVG";
import DashboardBillingTransactionsSVG from "../svg/DashboardNavIcons/DashboardBillingSVG";
import DashboardSupportSVG from "../svg/DashboardNavIcons/DashboardSupportSVG";

export default function DashboardSidebarLinks() {
  const pathname = usePathname();

  const DashboardNavLinks = [
    {
      title: "Dashboard Overview",
      icon: DashboardOverviewSVG,
      link: "/dashboard",
    },
    {
      title: "Channel Plans",
      icon: DashboardChannelPlansSVG,
      link: "/dashboard/channel-plans",
    },
    {
      title: "My Channels",
      icon: DashboardChannelPlansSVG,
      link: "/dashboard/my-channels",
    },
    {
      title: "My Referrals",
      icon: DashboardChannelPlansSVG,
      link: "/dashboard/my-referrals",
    },
    {
      title: "Billing & Transactions",
      icon: DashboardBillingTransactionsSVG,
      link: "/dashboard/billing-transactions",
    },
    {
      title: "Support",
      icon: DashboardSupportSVG,
      link: "/dashboard/support",
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
