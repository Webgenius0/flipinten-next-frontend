import CommonButton from "@/components/common/CustomButton/CommonButton";
import DocumentsSvg from "@/components/svg/DashboardSvg/DocumentsSvg";
import ReloadSvg from "@/components/svg/DashboardSvg/ReloadSvg";
import useYtOverviewPendingActionsData from "@/hooks/YtSrvicesDashboardHooks/useYtOverviewPendingActionsData";
import React from "react";

export default function YtOverviewPendingAction() {
  const requests = useYtOverviewPendingActionsData();
  return (
    <div className="bg-white w-full p-8 rounded-2xl">
      <p className="text-2xl font-bold mb-4">Pending Actions</p>

      <div className="space-y-4">
        {requests?.map((request, idx) => (
          <div key={idx} className="bg-[#FAFAFB] p-5 rounded-[12px]">
            {request?.title ? (
              <div className="flex items-center gap-4 justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-fit p-3 rounded-full bg-[#1CCC62]/10">
                    <p className="w-6 h-6">
                      <DocumentsSvg fill={"#1CCC62"} />
                    </p>
                  </div>

                  <p className="text-xl font-medium">{request?.title}</p>
                </div>

                <div>
                  <CommonButton
                    text={"Approve"}
                    className={"w-[120px] py-2 px-4 rounded-xl bg-[#1CCC62] border border-[#1CCC62] text-white cursor-pointer hover:bg-white hover:text-[#1CCC62] duration-300 ease-in-out"}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 justify-between">
                <div className="w-fit p-3 rounded-full bg-neutral30">
                  <p className="w-6 h-6">
                    <ReloadSvg />
                  </p>
                </div>

                <div>
                    <CommonButton text={'View'} className={'w-[120px] py-2 px-4 rounded-xl bg-[#979CA8] border border-[#979CA8)] text-white cursor-pointer hover:bg-white hover:text-[#979CA8] duration-300 ease-in-out'}/>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
