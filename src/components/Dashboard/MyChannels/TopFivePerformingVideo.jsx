import React from "react";
import useTopPerformingVideoQuery from "./../../../hooks/Dashboard/useTopPerformingVideoQuery";
import EyeSvg from "@/components/svg/DashboardSvg/EyeSvg";
import LikeSvg from "@/components/svg/DashboardSvg/LikeSvg";
import GoSvg from "@/components/svg/DashboardSvg/GoSvg";

export default function TopFivePerformingVideo() {
  const topVideos = useTopPerformingVideoQuery();
  
  return (
    <div>
      <p className="text-2xl font-medium">Top 5 Performing Video</p>
      <div className="mt-6 space-y-6">
        {topVideos?.map((video, idx) => (
          <div
            key={idx}
            className="bg-[#FAFAFB] rounded-[12px] p-5 flex items-center gap-4 justify-between"
          >
            <div className="flex items-center gap-4">
              <div>
                <div className="py-2.5 px-5 bg-card rounded-full w-fit">
                  <p className="text-2xl font-bold text-primary">{idx + 1}</p>
                </div>
              </div>

              <div className="text-xl">
                <p className="font-medium">{video?.title}</p>
                <div className="flex items-center gap-6 mt-1">
                  <div className="flex items-center gap-2">
                    <p className="w-8 h-8">
                      <EyeSvg />
                    </p>
                    <p className="text-neutral200">{video?.views}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="w-8 h-8">
                      <LikeSvg />
                    </p>
                    <p className="text-neutral200">{video?.likes}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
                <p className="w-6 h-6"><GoSvg/></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
