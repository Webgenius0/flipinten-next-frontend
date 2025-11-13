import CalendarColoredSvg from "@/components/svg/DashboardSvg/CalendarColoredSvg";
import useGetMyBidsAnalyticsCartData from "@/hooks/FreelancerDashboardHooks/FreelancerMyBidsHooks/useGetMyBidsAnalyticsCartData";
import React from "react";
import MyBidsAnalyticsTable from "./MyBidsAnalyticsTable";

export default function FreelancerMyBidsAnalytics() {
  const { lists } = useGetMyBidsAnalyticsCartData();
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {lists?.map((data, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl w-full flex justify-between bg-white"
          >
            <div className="flex flex-col gap-10 justify-between">
              <p className="text-lg font-medium text-neutral100">
                {data?.metric}
              </p>

              {data?.value && (
                <div className="space-y-1">
                  <h6 className="text-[32px] leading-[39px] font-semibold text-[#1C1D20]">
                    {data?.value}
                  </h6>
                  <p>{data?.description}</p>
                </div>
              )}

              {data?.option && (
                <div className="flex items-center gap-4">
                  {data?.option?.map((info, idx) => (
                    <p
                      key={idx}
                      className="w-fit text-neutral600 text-sm font-medium bg-neutral30 py-1 px-3 rounded-sm "
                    >
                      {info}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div
                className={`p-3 rounded-xl w-fit flex items-center justify-center`}
                style={{
                  backgroundColor: `${data?.color}30`,
                  color: `${data?.color}`,
                }}
              >
                <p className="w-5 h-5">
                  <CalendarColoredSvg
                    className="group-hover:[&>path]:fill-black w-6 h-6"
                    fillColor="currentColor"
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <MyBidsAnalyticsTable />
    </div>
  );
}
