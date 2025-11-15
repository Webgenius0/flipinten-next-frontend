import WhiteBox from "@/components/common/Box/WhiteBox";
import CommonButton from "@/components/common/CustomButton/CommonButton";
import DocumentsSvg from "@/components/svg/DashboardSvg/DocumentsSvg";
import useGetFreelancerTaskDetailsAssetsData from "@/hooks/FreelancerDashboardHooks/FreelancerTasks/useGetFreelancerTaskDetailsAssetsData";
import React from "react";

export default function FreelancerTaskDetailsAssetsProvided() {
  const { assets } = useGetFreelancerTaskDetailsAssetsData();
  return (
    <WhiteBox>
      <h3 className="text-2xl font-medium">Assets Provided</h3>
      <div className="mt-4 space-y-4">
        {assets?.map((asset, idx) => (
          <div key={idx} className="bg-neutral20 p-5 rounded-[12px] flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-[#EAEEFF] rounded-full">
                <p className="w-6 h-6">
                  <DocumentsSvg fill={"#002BFF"} />
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-xl font-medium">{asset?.title}</p>
                <p className="text-base text-neutral-400">{asset?.size}</p>
              </div>
            </div>

            <CommonButton
              text={"Download"}
              className={
                "py-3 px-6 rounded-xl border border-neutral-200 cursor-pointer bg-white hover:bg-gray-200 duration-300 ease-in-out"
              }
            />
          </div>
        ))}
      </div>
    </WhiteBox>
  );
}
