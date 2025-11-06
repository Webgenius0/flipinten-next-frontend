import CommonButton from "@/components/common/CustomButton/CommonButton";
import ClockSvg from "@/components/svg/ClockSvg";
import WarningSvg from "@/components/svg/DashboardSvg/WarningSvg";
import useGetFreelancerOverviewPendingRequestData from "@/hooks/FreelancerDashboardHooks/useGetFreelancerOverviewPendingRequestData";
import React from "react";

export default function FreelancerOverviewPendingRequest() {
  const pendingActions = useGetFreelancerOverviewPendingRequestData();
  return (
    <div className="bg-white p-6 rounded-2xl h-full">
      <h3 className="text-xl font-medium text-neutral600">Pending Actions</h3>

      <div className="mt-6 space-y-4">
        {pendingActions?.map((action, idx) => (
          <div key={idx} className="bg-neutral20 p-5 rounded-[12px] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {action?.approved ? (
                <div className="bg-[#2B67F6]/10 p-3 rounded-full w-fit">
                  <p className="w-5 h-5">
                    <ClockSvg fill={"#2B67F6"} />
                  </p>
                </div>
              ) : (
                <div className="bg-[#E52621]/10 p-3 rounded-full w-fit">
                  <p className="w-5 h-5">
                    <WarningSvg />
                  </p>
                </div>
              )}

              <p className="text-base text-neutral500 font-medium leading-6">
                {action?.message}
              </p>
            </div>

            <CommonButton
              text={action?.action}
              className={
                "w-20 text-sm py-1 text-center text-[#1CCC62] border border-[#1CCC62] rounded-sm"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
