import React from "react";
import img from "../../../assets/images/brandProfile.png";

const details = {
  id: 1,
  title: "Tech Accessories Showcase",
  brand: "Anker",
  image: img,
  type: "Dual Type Sponsorship",
  duration: "Sep 1, 2025 – Sep 30, 2025",
  contractValue: 5000,
  status: "Active",
  deliverables: "3 videos posted",
  userShare: {
    percentage: "25%",
    amount: 1250,
  },
  platformShare: {
    percentage: "75%",
    amount: 2450,
  },
  paymentDue: 0,
  proofDocuments: 2,
  paymentStatus: "Received",
};

export default function MyChannelBrandEndormentDetails() {
  return (
    <div className="border border-[#C1C4CC] py-8 px-12 rounded-3xl">
        {/* profile */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[70px] h-[70px] rounded-[12px]">
            <img
              src={details?.image?.src}
              alt=""
              className="w-full h-full object-cover aspect-square"
            />
          </div>

          <div>
            <p className="text-2xl font-semibold">{details?.title}</p>
            <p className="text-neutral100 text-lg font-medium">
              {details?.brand}
            </p>
          </div>
        </div>

        <div className="bg-[#1CCC62] py-2 px-4 rounded-full w-fit flex items-center gap-2">
          <p className="w-2 h-2 rounded-full bg-white" />
          <p className="text-white">{details?.status}</p>
        </div>
      </div>

      {/* infos */}
      <div className="flex items-center justify-between my-8">
        <div>
            <p className="text-neutral100 text-base">Deal Type</p>
            <p className="text-xl font-semibold text-neutral700">{details?.type}</p>
        </div>

        <div>
            <p className="text-neutral100 text-base">Duration</p>
            <p className="text-xl font-semibold text-neutral700">{details?.duration}</p>
        </div>
        <div>
            <p className="text-neutral100 text-base">Contract Value</p>
            <p className="text-xl font-semibold text-neutral700">{details?.contractValue}</p>
        </div>
        <div>
            <p className="text-neutral100 text-base">Deliverables</p>
            <p className="text-xl font-semibold text-neutral700">{details?.deliverables}</p>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className={'text-[#1CCC62] bg-[#E8FFEF] p-8 flex flex-col justify-between rounded-3xl'}>
            <p className="text-xl ">Your Share {details?.userShare?.percentage}</p>
            <p className="text-[32px] font-semibold leading-10">{details?.userShare?.amount}</p>
        </div>
        <div className={'text-[#2B82FF] bg-[#EEF5FF] p-8 flex flex-col justify-between rounded-3xl'}>
            <p className="text-xl ">YTStart share {details?.platformShare?.percentage}</p>
            <p className="text-[32px] font-semibold leading-10">{details?.platformShare?.amount}</p>
        </div>
        <div className={'text-[#962CFF] bg-[#F6EDFF] p-8 flex flex-col justify-between rounded-3xl'}>
            <p className="text-xl ">Payment due</p>
            <p className="text-[32px] font-semibold leading-10">{details?.paymentDue}</p>
        </div>
      </div>
    </div>
  );
}
