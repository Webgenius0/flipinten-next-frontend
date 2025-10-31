import useMyChannelEarningsCardQuery from "@/hooks/Dashboard/useMyChannelEarningsCardQuery";
import React from "react";
import PaymentHistory from "./PaymentHistory";

export default function MyChannelEarnings() {
  const info = useMyChannelEarningsCardQuery();
  return (
    <div className="bg-white p-12 rounded-2xl">
      {/* card part 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {info?.map((data, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl w-full flex justify-between"
            style={{
              backgroundColor: `${data?.color}`,
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
          </div>
        ))}
      </div>

      {/* card part 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
        <div className="p-8 rounded-3xl w-full flex justify-between border border-[#C1C4CC] ">
          <div className="flex flex-col gap-6">
            <p className="text-lg font-medium text-neutral100">
              Your Share (50%)
            </p>
            <h6 className="text-[32px] leading-[39px] font-semibold text-[#1C1D20]">
              $1075
            </h6>
          </div>
        </div>

        <div className="p-8 rounded-3xl w-full flex justify-between border border-[#C1C4CC] ">
          <div className="flex flex-col gap-6">
            <p className="text-lg font-medium text-neutral100">
              YTStart Share (50%)
            </p>
            <h6 className="text-[32px] leading-[39px] font-semibold text-[#1C1D20]">
              $1075
            </h6>
          </div>
        </div>
      </div>

      <PaymentHistory />
    </div>
  );
}
