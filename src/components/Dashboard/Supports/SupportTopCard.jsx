import React from "react";
import ButtonCreateTicket from "./ButtonCreateTicket";
import useSupportCarddataQuery from "@/hooks/Dashboard/useSupportCarddataQuery";

export default function SupportTopCard() {
  const info = useSupportCarddataQuery();
  return (
    <div>
      {/* top title part */}
      <div className="flex items-center gap-4 justify-between">
        <div className="space-y-2">
          <h3 className="text-[32px] font-semibold leading-[38px] text-[#071431]">
            Support & Tickets
          </h3>
          <p className="text-2xl leading-9 text-[#071431]">
            Raise a ticket or view your previous support requests.
          </p>
        </div>

        <div>
          <ButtonCreateTicket />
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {info?.map((data, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl w-full flex justify-between bg-white"
          >
            <div className="flex flex-col gap-6">
              <p className="text-lg font-medium text-neutral100">
                {data?.title}
              </p>
              <h6 className="text-[32px] leading-[39px] font-semibold text-[#1C1D20]">
                {data?.value}
              </h6>
            </div>

            <div>
              <div
                className={`p-3 rounded-xl w-fit flex items-center justify-center`}
                style={{
                  backgroundColor: `${data?.color}30`,
                  color: `${data?.color}`,
                }}
              >
                <p className="w-6 h-6">{data?.icon}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
