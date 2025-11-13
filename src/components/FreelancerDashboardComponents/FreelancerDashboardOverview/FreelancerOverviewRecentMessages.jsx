import useGetFreelancerOverviewRecentMessagesData from "@/hooks/FreelancerDashboardHooks/useGetFreelancerOverviewRecentMessagesData";
import React from "react";
import Image from "next/image";
import CommonButton from "@/components/common/CustomButton/CommonButton";

export default function FreelancerOverviewRecentMessages() {
  const messages = useGetFreelancerOverviewRecentMessagesData();
  console.log(messages);

  return (
    <div className="bg-white p-6 rounded-2xl">
      <h3 className="text-xl font-medium text-neutral600">Recent Messages</h3>

      <div className="mt-6 space-y-4">
        {messages?.map((message, idx) => (
          <div key={idx} className="bg-neutral20 p-5 rounded-[12px] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={message?.avatar}
                alt={message?.name || "user"}
                width={"40px"}
                className="rounded-full"
              />

              <div className="text-base font-medium space-y-2 leading-6 text-neutral500">
                <p>{message?.name}</p>
                <p className="">{message?.message}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-end">
              <CommonButton
                text={message?.status}
                className={
                  "text-[#1CCC62] border border-[#1CCC62] rounded-sm cursor-pointer hover:bg-[#1CCC62] hover:text-white duration-300 ease-in-out px-8 py-1"
                }
              />

              <p className="text-base font-medium space-y-2 leading-6 text-neutral500">
                {message?.timeAgo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
