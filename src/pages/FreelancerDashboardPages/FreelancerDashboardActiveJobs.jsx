import WhiteBox from "@/components/common/Box/WhiteBox";
import CommonButton from "@/components/common/CustomButton/CommonButton";
import DocumentsSvg from "@/components/svg/DashboardSvg/DocumentsSvg";
import useGetFreelancerActiveJobs from "@/hooks/FreelancerDashboardHooks/FreelancerActiveJobs/useGetFreelancerActiveJobs";
import React from "react";

export default function FreelancerDashboardActiveJobs() {
  const {activeJobs} = useGetFreelancerActiveJobs();

  return (
    <div>
      <h3 className="text-2xl font-bold leading-relaxed">Active Jobs</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {activeJobs?.map((job, idx) => (
          <WhiteBox key={idx} className={"space-y-3"}>
            <div className="flex items-center gap-6 justify-between mb-5">
              <div>
                <p className="text-xl font-medium leading-relaxed">
                  {job?.title}
                </p>
                <p className="text-base text-neutral100">
                  Client :{job?.client}
                </p>

                <div className="flex items-center gap-3 mt-3">
                  {job?.skills?.map((skill, idx) => (
                    <p
                      key={idx}
                      className="w-fit py-1 px-2 rounded-md bg-neutral40 text-sm"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p
                  className={`text-[#1447E6] bg-[#1447E6]/20 py-1 px-6 rounded-xl`}
                >
                  {job?.status}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-between">
              <p className="text-lg text-[#404A60]">{job?.jobId}</p>
              <p className="text-xl font-semibold text-[#1CCC62]">
                {job?.jobId}
              </p>
            </div>
            <div className="flex items-center gap-3 justify-between">
              <p className="text-lg text-[#404A60]">{job?.startDate}</p>
              <p className="text-lg text-[#404A60]">{job?.endDate}</p>
            </div>

            <div className="flex items-center gap-3 justify-between">
              <p className="text-lg text-[#404A60]">Agreement</p>

              <div className="flex items-center gap-2">
                <p className="w-6 h-6">
                  <DocumentsSvg />
                </p>
                <p className="text-lg text-[#404A60]">{job?.agreement}</p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-4 w-full">
              <CommonButton
                text={"View Details"}
                className={
                  "w-full text-neutral500 cursor-pointer border border-neutral30 bg-neutral30 py-2 px-4 rounded-xl font-medium hover:bg-white hover:border-neutral500 duration-300 ease-in-out"
                }
              />
              <CommonButton
                text={"Message"}
                className={
                  "w-full text-neutral500 cursor-pointer border border-neutral30 bg-neutral30 py-2 px-4 rounded-xl font-medium hover:bg-white hover:border-neutral500 duration-300 ease-in-out"
                }
              />
              <CommonButton
                text={"Deliver"}
                className={
                  "w-full cursor-pointer border border-primary bg-primary text-white py-2 px-4 rounded-xl font-medium hover:bg-white hover:text-primary duration-300 ease-in-out"
                }
              />
            </div>
          </WhiteBox>
        ))}
      </div>
    </div>
  );
}
