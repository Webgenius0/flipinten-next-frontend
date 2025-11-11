import DashboardBillingSVG from "@/components/svg/DashboardNavIcons/DashboardBillingSVG";
import DashboardOverviewSVG from "@/components/svg/DashboardNavIcons/DashboardOverviewSVG";
import DashboardSupportSVG from "@/components/svg/DashboardNavIcons/DashboardSupportSVG";
import DashboardYoutubeServiceSVG from "@/components/svg/DashboardNavIcons/DashboardYoutubeServiceSVG";
import Link from "next/link";
import React from "react";

const DashboardNavLinks = [
  {
    title: "Freelancer - Overview",
    icon: DashboardOverviewSVG,
    link: "/freelancer-dashboard",
  },
//   {
//     title: "Freelancer - My Bids",
//     icon: DashboardYoutubeServiceSVG,
//     link: "/freelancer-dashboard/freelancer-my-bids",
//   },
//   {
//     title: "Freelancer - Active Jobs",
//     icon: DashboardYoutubeServiceSVG,
//     link: "/freelancer-dashboard/freelancer-active-jobs",
//   },
//   {
//     title: "Freelancer - Tasks",
//     icon: DashboardYoutubeServiceSVG,
//     link: "/freelancer-dashboard/freelancer-tasks",
//   },
//   {
//     title: "Freelancer - Assets",
//     icon: DashboardBillingSVG,
//     link: "/freelancer-dashboard/freelancer-assets",
//   },
//   {
//     title: "Freelancer - Message",
//     icon: DashboardSupportSVG,
//     link: "/freelancer-dashboard/freelancer-message",
//   },
//   {
//     title: "Freelancer - Earnings & Payouts",
//     icon: DashboardBillingSVG,
//     link: "/freelancer-dashboard/freelancer-earning-and-payouts",
//   },
//   {
//     title: "Freelancer - Performance",
//     icon: DashboardBillingSVG,
//     link: "/freelancer-dashboard/freelancer-performance",
//   },
//   {
//     title: "Frelancer - Disputes",
//     icon: DashboardBillingSVG,
//     link: "/freelancer-dashboard/freelancer-disputes",
//   },
//   {
//     title: "Freelancer - Supports",
//     icon: DashboardBillingSVG,
//     link: "/freelancer-dashboard/freelancer-supports",
//   },
//   {
//     title: "Freelancer - Settings & KYC",
//     icon: DashboardBillingSVG,
//     link: "/freelancer-dashboard/freelancer-settings",
//   },
//   {
//     title: "Freelancer - Announcements",
//     icon: DashboardBillingSVG,
//     link: "/freelancer-dashboard/freelancer-announcements",
//   },
];

export default function FreelancerDashboardAllPages() {
  return (
    <div>
      <h3 className="text-xl font-medium my-4 underline leading-relaxed">
       Freelancer Dashboard
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
