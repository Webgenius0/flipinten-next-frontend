import useGetFreelancerTasks from "@/hooks/FreelancerDashboardHooks/FreelancerTasks/useGetFreelancerTasks";
import React from "react";
import UserAvatar from "@/assets/images/user-avatar.png";
import Image from "next/image";
import ClockSvg from "@/components/svg/ClockSvg";
import WhiteBox from "@/components/common/Box/WhiteBox";
import CommonButton from "@/components/common/CustomButton/CommonButton";
import Link from "next/link";

export default function FreelancerDashboardTasks() {
  const { tasks } = useGetFreelancerTasks();

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {tasks?.map((task, idx) => (
          <WhiteBox key={idx} className={"space-y-3"}>
            <div className="flex items-center gap-6 justify-between mb-5">
              <div>
                <p className="text-xl font-medium leading-relaxed">
                  {task?.title}
                </p>
                <p className="text-base text-neutral400">{task?.jobId}</p>
              </div>

              <div>
                <p
                  className={`text-[#1447E6] bg-[#1447E6]/20 py-1 px-6 rounded-xl`}
                >
                  {task?.status}
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={UserAvatar}
                  width={"36px"}
                  height={"36px"}
                  alt="user"
                  className="rounded-full"
                />
                <div>
                  <p className="text-[14px] text-[#404A60]">Assigned By</p>
                  <p className="font-medium">{task?.assignedBy}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#F88049]/15 p-2 w-fit rounded-xl">
                  <p className={'w-6 h-6'}>
                    <ClockSvg fill={"#F88049"} />
                  </p>
                </div>
                <div>
                  <p className="text-[14px] text-[#404A60]">Deadline</p>
                  <p className="font-medium">{task?.deadline}</p>
                </div>
              </div>
            </div>

            <hr className="my-5 border-neutral40" />

            <div className="mt-5 flex items-center gap-4 w-full">
              <Link
              href={'/freelancer-dashboard/freelancer-tasks-details'}
                className={
                  "w-full text-neutral500 cursor-pointer border border-neutral30 bg-neutral30 py-2 px-4 rounded-xl font-medium hover:bg-white hover:border-neutral500 duration-300 ease-in-out"
                }
              >View Tasks</Link>
              <CommonButton
                text={"Mark as Complete"}
                className={
                  "w-full text-white cursor-pointer border border-neutral30 bg-linear-to-t from-[#30B365] to-[#277647] py-2 px-4 rounded-xl font-medium hover:bg-white hover:border-neutral500 duration-300 ease-in-out"
                }
              />
            </div>
          </WhiteBox>
        ))}
      </div>
    </div>
  );
}
