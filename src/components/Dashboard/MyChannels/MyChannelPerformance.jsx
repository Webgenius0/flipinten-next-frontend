import useMyChannelPerformanceQuery from "@/hooks/Dashboard/useMyChannelPerformanceQuery";
import React from "react";

export default function MyChannelPerformance() {
  const info = useMyChannelPerformanceQuery();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {info?.map((data, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-3xl w-full flex justify-between"
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
                  backgroundColor: `${data?.color}20`,
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
