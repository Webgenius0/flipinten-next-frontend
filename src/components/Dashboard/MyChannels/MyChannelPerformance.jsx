import ClockSvg from "@/components/svg/ClockSvg";
import GlobeSvg from "@/components/svg/DashboardSvg/GlobeSvg";
import useMyChannelPerformanceQuery from "@/hooks/Dashboard/useMyChannelPerformanceQuery";
import React from "react";
import TopFivePerformingVideo from "./TopFivePerformingVideo";

export default function MyChannelPerformance() {
  const info = useMyChannelPerformanceQuery();
  return (
    <div className="bg-white p-12 rounded-2xl">
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {info?.map((data, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl w-full flex justify-between"
            style={{
              backgroundColor: `${data?.color}10`,
            }}
          >
            <div className="flex flex-col gap-6">
              <p className="text-lg font-medium text-neutral100">
                {data?.title}
              </p>
              <h6 className="text-[32px] leading-[39px] font-semibold text-[#1C1D20]">
                {data?.value}
              </h6>
            </div>

            <div>
              <div
                className={`p-3 rounded-xl w-fit flex items-center justify-center`}
                style={{
                  backgroundColor: `${data?.color}30`,
                  color: `${data?.color}`,
                }}
              >
                <p className="w-6 h-6">{data?.icon}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <p className="w-6 h-6">
              <ClockSvg />
            </p>
            <p className="text-2xl font-medium">Watch Hours</p>
          </div>

          <div className="mt-4 mb-2 relative">
            <div className="w-full bg-[#EACDCD] h-2 rounded-full" />
            <div className="w-1/3 bg-primary h-2 rounded-full absolute inset-0 " />
          </div>
          <p className="text-neutral200">52% of 15,000 hours target</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <p className="w-6 h-6">
              <GlobeSvg />
            </p>
            <p className="text-2xl font-medium">Geography</p>
          </div>
          <p className="text-neutral200">
            United States (45%), India (22%), UK (15%), Canada (10%), Others (8%)
          </p>
        </div>
      </div>

      <TopFivePerformingVideo/>
    </div>
  );
}
