import WhiteBox from "@/components/common/Box/WhiteBox";
import CommonButton from "@/components/common/CustomButton/CommonButton";
import ClockSvg from "@/components/svg/ClockSvg";
import useGetOpenGigs from "@/hooks/FreelancerDashboardHooks/FreelancerMyBidsHooks/useGetOpenGigs";
import React from "react";
import MyBidsOpenGigButton from "./MyBidsOpenGigButton";

export default function FreelancerMyBigsOpenGigs() {
  const listings = useGetOpenGigs();
  return (
    <div>
      <h3 className="text-2xl font-bold leading-relaxed">Available Gigs</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {listings?.map((list, idx) => (
          <WhiteBox key={idx}>
            <p className="text-xl font-medium leading-relaxed">
              {list?.position}
            </p>
            <p className="text-base text-neutral100">{list?.description}</p>

            <div className="flex items-center gap-3 mt-3">
              <p className="w-fit py-1 px-2 rounded-md bg-neutral40 text-sm">
                {list?.tools?.primary}
              </p>
              <p className="w-fit py-1 px-2 rounded-md bg-neutral40 text-sm">
                {list?.tools?.software}
              </p>
            </div>

            <div className="my-10 flex items-center justify-between">
              <p className="text-xl font-semibold text-[#1CCC62] leading-relaxed">
                $ {list?.payment?.amount}
              </p>

              <div className="flex items-center gap-2">
                <p className="w-6 h-6">
                  <ClockSvg />
                </p>
                <p className="text-neutral500 text-lg font-medium">
                  {list?.timeline?.delivery}
                </p>
              </div>

              <p className="text-neutral500 text-lg font-medium">
                Posted {list?.timeline?.posted}
              </p>
            </div>

            <div className="mt-3 flex items-center gap-4 w-full">
              <CommonButton
                text={"View Details"}
                className={
                  "w-full text-neutral500 cursor-pointer border border-neutral30 bg-neutral30 py-2 px-4 rounded-xl font-medium hover:bg-white hover:border-neutral500 duration-300 ease-in-out"
                }
              />
              <MyBidsOpenGigButton />
            </div>
          </WhiteBox>
        ))}
      </div>
    </div>
  );
}
