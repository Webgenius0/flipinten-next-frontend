import WhiteBox from "@/components/common/Box/WhiteBox";
import CommonButton from "@/components/common/CustomButton/CommonButton";
import MicrophoneSvg from "@/components/svg/DashboardSvg/MicrophoneSvg";
import useYtPackagesBasicPlanData from "@/hooks/YtSrvicesDashboardHooks/useYtPackagesBasicPlanData";
import React from "react";

export default function YtSeoBasic() {
  const seoPlans = useYtPackagesBasicPlanData();
  return (
    <div className="grid grid-cols-1 h-full sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {seoPlans?.map((plan, idx) => (
        <WhiteBox key={idx}>
          <div className="w-full h-full flex flex-col gap-8 justify-between">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-primary/10 w-fit p-4 rounded-full">
                <p className="w-6 h-6">
                  <MicrophoneSvg />
                </p>
              </div>

              <p className="text-xl font-medium py-4">SEO and Promotions</p>
              <p className="text-[32px] font-semibold">
                {plan?.price}
                <span className="text-lg text-neutral200">/month</span>
              </p>
            </div>

            <div className="space-y-2">
              {plan?.features?.map((feature, idx) => (
                <ul key={idx} className="text-sm">
                  <li className="flex items-center gap-2">
                    <p className="w-2 h-2 rounded-full bg-neutral500" />
                    {feature}
                  </li>
                </ul>
              ))}
            </div>

            <div>
              <CommonButton text={'Get Satrted'} className={'w-full text-lg  text-white font-semibold bg-primary py-3 px-8 rounded-[30px] border border-primary cursor-pointer hover:bg-white hover:text-primary duration-300 ease-in-out'} />
            </div>
          </div>
        </WhiteBox>
      ))}
    </div>
  );
}
