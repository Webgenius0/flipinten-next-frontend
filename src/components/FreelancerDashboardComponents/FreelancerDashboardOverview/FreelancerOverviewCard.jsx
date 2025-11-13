import ArrowSvg from "@/components/svg/ArrowSvg";
import ArrowThinSvg from "@/components/svg/DashboardSvg/ArrowThinSvg";
import TradeUpSvg from "@/components/svg/DashboardSvg/TradeUpSvg";
import useFreelancerOverviewCardDataQuery from "@/hooks/FreelancerDashboardHooks/useFreelancerOverviewCardDataQuery";
import React from "react";

export default function FreelancerOverviewCard() {
  const jobs = useFreelancerOverviewCardDataQuery();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {jobs?.map((job, idx) => (
        <div
          key={idx}
          className="p-6 rounded-3xl bg-white text-neutral600 group hover:bg-[#277647] hover:text-white duration-500 ease-in-out flex justify-between"
        >
          <div className="space-y-4">
            <p className="text-lg font-medium leading-7">{job?.title}</p>
            <p className="text-[40px] font-semibold leading-12">{job?.value}</p>
            <div className="flex items-center gap-2 ">
              <p className="w-5 h-5 text-[#277647] group-hover:text-white">
                <TradeUpSvg
                  className="group-hover:[&>path]:fill-white w-6 h-6"
                  fillColor="currentColor"
                />
              </p>
              <p>{job?.label}</p>
            </div>
          </div>

          <div>
            <div className="w-fit bg-white py-4.5 px-4 rounded-full border border-neutral600">
              <p className="w-4 h-3">
                <ArrowThinSvg />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
