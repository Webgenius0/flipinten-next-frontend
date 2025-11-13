import DollarSvg from "@/components/svg/DashboardSvg/DollarSvg";
import GoSvg from "@/components/svg/DashboardSvg/GoSvg";
import useReferralsRecentPayoutsDataQuery from "@/hooks/Dashboard/useReferralsRecentPayoutsDataQuery";
import React from "react";

export default function MyReferralRecentPayouts() {
  const paymentHistory = useReferralsRecentPayoutsDataQuery();
  return (
    <div className="p-12 bg-white rounded-3xl">
      <div className="flex items-center justify-between gap-5">
        <p className="text-2xl font-bold text-[#0D0D0D] leading-9">
          Recent Payouts
        </p>
        <div className="py-2 px-4 rounded-xl flex items-center gap-3 bg-[#F5F6F7]">
          <p className="text-lg font-medium leading-[27px]">
            View All Transaction
          </p>
          <p className="w-6 h-6">
            <GoSvg />
          </p>
        </div>
      </div>

      <div className="space-y-6 mt-6">
        {paymentHistory?.map((payment, idx) => (
          <div
            key={idx}
            className="bg-[#FAFAFB] rounded-[12px] p-5 flex items-center gap-4 justify-between text-xl"
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#2FA75F26] rounded-full p-3 w-fit">
                <p className="w-6 h-6">
                  <DollarSvg />
                </p>
              </div>
              <div className="leading-[30px] space-y-1">
                <p className="font-medium text-[#0D0D0D]">{payment?.date}</p>
                <p className="text-neutral200">{payment?.description}</p>
              </div>
            </div>

            <div className="space-y-1">
              <p
                className={`text-2xl font-bold ${
                  payment?.status?.toLowerCase() === "paid" && "text-[#1CCC62]"
                }`}
              >
                {payment?.amount}
              </p>
              <p
                className={`text-sm font-semibold py-1.5 px-4 text-center  ${
                  payment?.status?.toLowerCase() === "paid" &&
                  "text-[#1CCC62] bg-[#1CCC62]/10 rounded-3xl"
                }`}
              >
                {payment?.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
