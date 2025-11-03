import React from "react";
import WhiteBox from "../../common/Box/WhiteBox";
import useOverviewRecentTicketsQuery from "@/hooks/Dashboard/useOverviewRecentTicketsQuery";
import useOverviewRecentTransactionsQuery from "@/hooks/Dashboard/useOverviewRecentTransactionsQuery";
import UploadSvg from "@/components/svg/DashboardSvg/UploadSvg";
import ArrowUploadSvg from "@/components/svg/DashboardSvg/ArrowUploadSvg";
import DownloadSvg from "@/components/svg/DashboardSvg/DownloadSvg";

export default function DashboardOverviewRecentInfo() {
  const tickets = useOverviewRecentTicketsQuery();
  const transactions = useOverviewRecentTransactionsQuery();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <WhiteBox>
        <p className="text-[32px] font-semibold leading-[39px]">
          Recent Tickets
        </p>
        <div>
          {tickets?.map((ticket, idx) => (
            <div
              key={idx}
              className="p-5 flex items-center justify-between border-b border-b-neutral30 my-4 last:border-none"
            >
              <div className="flex items-center gap-6">
                <p className="w-4 h-4 rounded-full bg-[#1CCC62]" />

                <div>
                  <p className="text-xl font-semibold leading-7">
                    {ticket?.status}
                  </p>
                  <p className="text-base font-medium leading-[30px] text-neutral400">
                    {ticket?.title}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="w-fit py-1 px-6 bg-[#1CCC62]/10 text-[#1CCC62] rounded-full text-base font-medium">
                  {ticket?.completion}
                </p>
                <p className="text-neutral200">{ticket?.time}</p>
              </div>
            </div>
          ))}
        </div>
      </WhiteBox>

      <WhiteBox>
        <p className="text-[32px] font-semibold leading-[39px]">
          Recent Transactions
        </p>
        <div>
          {transactions?.map((transaction, idx) => (
            <div
              key={idx}
              className="p-5 flex items-center justify-between border-b border-b-neutral30 my-4 last:border-none"
            >
              <div className="flex items-center gap-6">
                <div className="w-fit p-3 rounded-[12px] bg-[#1CCC62]/10">
                  <p className="w-5 h-5">
                    <DownloadSvg fillColor={"#1CCC62"} />
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xl font-semibold leading-7">
                    {transaction?.description}
                  </p>
                  <p className="w-fit py-1 px-6 bg-[#1CCC62]/10 text-[#1CCC62] rounded-full text-sm font-medium">
                    {transaction?.status}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="w-fit text-[#1CCC62] rounded-full text-xl font-medium">
                  {transaction?.amount}
                </p>
                <p className="text-neutral400 text-sm">{transaction?.time}</p>
              </div>
            </div>
          ))}
        </div>
      </WhiteBox>
    </div>
  );
}
