import WhiteBox from "@/components/common/Box/WhiteBox";
import EyeSvg from "@/components/svg/DashboardSvg/EyeSvg";
import LikeSvg from "@/components/svg/DashboardSvg/LikeSvg";
import ShareIncreaseSvg from "@/components/svg/DashboardSvg/ShareIncreaseSvg";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import useOverviewTopPerformingChannelsDataQuery from "@/hooks/Dashboard/useOverviewTopPerformingChannelsDataQuery";
import React from "react";

export default function DashboardOverviewTopChannels() {
    const channels = useOverviewTopPerformingChannelsDataQuery();
  return (
    <WhiteBox>
      <div className="flex items-center justify-between">
        <p className="text-[32px] font-semibold leading-[39px]">
          Top Performing Channels
        </p>

        <div>
          <Select>
            <SelectTrigger className="w-[180px] text-neutral300 text-base font-base">
              <SelectValue placeholder="Select Time"/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>days</SelectLabel>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="14">Last 14 days</SelectItem>
                <SelectItem value="30">Last 30 days</SelectItem>
               
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>


      <div className="mt-6 space-y-4">
        {
         channels?.map((channel, idx) => <div key={idx} className="p-5 rounded-[12px] bg-[#FAFAFB] flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div>
                    <p className="text-2xl font-bold bg-[#FFF1F0] px-5 py-3 rounded-full w-fit text-primary">{channel?.id}</p>
                </div>

                <div>
                    <p className="text-xl font-medium leading-[30px]">{channel?.name}</p>
                    <p className="text-lg text-neutral400">{channel?.subscribers}</p>
                </div>
            </div>


            <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                    <p className="w-6 h-6"><EyeSvg/></p>
                    <p className="text-neutral200 text-xl">{channel?.view}</p>
                </div>


                <div className="flex items-center gap-3">
                    <p className="w-6 h-6"><LikeSvg/></p>
                    <p className="text-neutral200 text-xl">{channel?.like}</p>
                </div>

                <div className="flex items-center gap-3">
                    <p className="w-6 h-6"><ShareIncreaseSvg/></p>
                    <p className="text-[#1CCC62] text-xl">+ {channel?.share}</p>
                </div>
            </div>
           
         </div>)
        }
      </div>
    </WhiteBox>
  );
}
