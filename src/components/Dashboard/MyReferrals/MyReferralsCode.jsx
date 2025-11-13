import CommonButton from "@/components/common/CustomButton/CommonButton";
import CopySvg from "@/components/svg/DashboardSvg/CopySvg";
import ShareSvg from "@/components/svg/DashboardSvg/ShareSvg";
import React from "react";

export default function MyReferralsCode() {
  return (
    <div className="w-full bg-card p-12 rounded-3xl">
      <div className="flex items-center gap-3">
        <p className="w-6 h-6">
          <ShareSvg />
        </p>
        <p className="text-lg font-semibold text-[#0D0D0D]">
          Your Referral Code
        </p>
      </div>

      <div className="w-full mt-8 text-[#0D0D0D] flex items-center gap-9 ">
        <div className="w-full">
          <p className=" text-base">Your Referral Code</p>
          <div className="mt-3 border border-neutral50 py-4 px-6 rounded-xl bg-white text-lg">
            <p>YT126XH</p>
          </div>
        </div>

        <div className="w-full">
          <p className=" text-base">Tracking Link</p>
          <div className="mt-3 border border-neutral50 py-4 px-6 rounded-xl bg-white text-lg">
            <p>YT126XH</p>
          </div>
        </div>
      </div>

      <div className="my-6 flex items-center gap-4">
        <CommonButton
          iconLeft={
            <CopySvg
              className="group-hover:[&>path]:fill-black w-5 h-5"
              fillColor="currentColor"
            />
          }
          iconClass={"w-5 h-5"}
          text={"Copy Code"}
          className={
            "py-2 px-5 rounded-xl bg-primary flex items-center gap-2 text-base font-medium text-white cursor-pointer border border-primary hover:bg-white hover:text-primary duration-300 ease-in-out "
          }
        />

        <CommonButton
          iconLeft={
            <ShareSvg
              className="group-hover:[&>path]:fill-black w-5 h-5"
              fillColor="currentColor"
            />
          }
          iconClass={"w-5 h-5"}
          text={"Share Code"}
          className={
            "py-2 px-5 rounded-xl bg-white flex items-center gap-2 text-base font-medium text-neutral500 cursor-pointer border border-[#EBECEF] hover:bg-[#EBECEF] duration-300 ease-in-out "
          }
        />
      </div>

      <div className="p-4 rounded-[12px] border border-[#EBECEF] bg-white">
        <p className="text-base font-medium text-neutral500">
          💡 Pro Tip: Share your referral link on social media, with friends, or
          in YouTube communities to maximize your earnings!
        </p>
      </div>
    </div>
  );
}
