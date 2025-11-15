import WhiteBox from "@/components/common/Box/WhiteBox";
import CommonButton from "@/components/common/CustomButton/CommonButton";
import DocumentsSvg from "@/components/svg/DashboardSvg/DocumentsSvg";
import useGetFreelancerTaskDetailsReference from "@/hooks/FreelancerDashboardHooks/FreelancerTasks/useGetFreelancerTaskDetailsReference";
import React from "react";

export default function FreelancerTaskDetailsReference() {
  const { reference } = useGetFreelancerTaskDetailsReference();
  return (
    <WhiteBox>
      <h3 className="text-2xl font-medium">Reference</h3>
      <div className="mt-4 space-y-4">
        {reference?.map((data, idx) => (
          <div
            key={idx}
            className="bg-neutral20 p-5 rounded-[12px] flex items-center justify-between gap-10"
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-[#EAEEFF] rounded-full">
                <p className="w-6 h-6">
                  <DocumentsSvg fill={"#002BFF"} />
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-xl font-medium">{data?.title}</p>
                <p className="text-base text-neutral-400">{data?.link}</p>
              </div>
            </div>

            <CommonButton
              text={"Open"}
              className={
                "text-lg font-semibold cursor-pointer hover:underline duration-300 ease-in-out"
              }
            />
          </div>
        ))}
      </div>
    </WhiteBox>
  );
}
