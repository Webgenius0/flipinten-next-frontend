import WhiteBox from "@/components/common/Box/WhiteBox";
import CalendarSvg from "@/components/svg/CalendarSvg";
import React from "react";
import FreelancerTaskDetailsTable from "./FreelancerTaskDetailsTable";

export default function FreelancerTaskDetailsTaskBrief() {
  const brief = {
    objective:
      "Create a 60-second upbeat summer ad highlighting product close-ups. The video should convey energy, freshness, and positivity while maintaining brand consistency with the Coca-Cola visual identity.",
    deliverables: [
      "Final Video (mp4, 1080p)",
      "Thumbnail (.png)",
      "Subtitle (Srt)",
    ],
    startDate: "12 Oct, 2025",
    endDate: "12 Oct, 2026",
  };
  return (
    <div className="space-y-8">
      <WhiteBox className={"space-y-8"}>
        <h2 className="text-[32px] font-semibold">Task Brief</h2>

        <div>
          <h3 className="text-2xl font-medium text-[#101010]  mb-3">
            Objective
          </h3>
          <p className="text-neutral500 text-xl leading-relaxed">
            {brief?.objective}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-medium text-[#101010]  mb-3">
            Deliverable
          </h3>

          <div className="flex items-center gap-3 mt-3">
            {brief?.deliverables?.map((deliver, idx) => (
              <p
                key={idx}
                className="w-fit py-1 px-2 rounded-md bg-neutral40 text-sm"
              >
                {deliver}
              </p>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 w-full bg-neutral20 p-6 rounded-[12px]">
            <div className="bg-[#3A73FF]/15 p-2 w-fit rounded-xl">
              <p className={"w-6 h-6"}>
                <CalendarSvg fillColor={"#3A73FF"} />
              </p>
            </div>

            <div>
              <p className="text-sm">Start Date</p>
              <p className="text-lg font-semibold">{brief?.startDate}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full bg-neutral20 p-6 rounded-[12px]">
            <div className="bg-[#F54900]/15 p-2 w-fit rounded-xl">
              <p className={"w-6 h-6"}>
                <CalendarSvg fillColor={"#F54900"} />
              </p>
            </div>

            <div>
              <p className="text-sm">End Date</p>
              <p className="text-lg font-semibold">{brief?.endDate}</p>
            </div>
          </div>
        </div>
      </WhiteBox>

      <WhiteBox>
        <h3 className="text-2xl font-semibold">Deliverables & Upload </h3>
        <div>
            <FreelancerTaskDetailsTable/>
        </div>
      </WhiteBox>
    </div>
  );
}
