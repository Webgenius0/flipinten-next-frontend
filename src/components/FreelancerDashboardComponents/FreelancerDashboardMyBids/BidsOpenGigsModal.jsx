"use client";

import WhiteBox from "@/components/common/Box/WhiteBox";
import Modal from "@/components/common/Modal/Modal";
import ClockSvg from "@/components/svg/ClockSvg";
import React from "react";
import { useForm } from "react-hook-form";

const list = {
  id: 2,
  position: "Video Editor",
  description: "Edit engaging YouTube shorts for fitness channel",
  tools: {
    primary: "Adobe Resources",
    software: "After Effects",
  },
  payment: {
    amount: 200,
    currency: "$",
  },
  time: {
    delivery: "5 days",
    posted: "3h ago",
  },
  propossedFee: "500",
  timeline: 150,
  videoLink: "https://portfolio.com/my-work",
  buttons: ["View Details", "Place Bid"],
};

export default function BidsOpenGigsModal({ isOpen, setIsOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>

        <div>
            <h2 className="text-[32px] font-bold leading-relaxed">Place Your Bid</h2>
            <p className="text-2xl font-medium leading-relaxed">Submitting a bid for: Video Editor</p>
        </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <WhiteBox className={"my-8"}>
          <p className="text-xl font-medium leading-relaxed">
            {list?.position}
          </p>
          <p className="text-base text-neutral100">{list?.description}</p>

          <div className="flex items-center gap-3 mt-3">
            <p className="w-fit py-1 px-2 rounded-md bg-neutral40 text-sm">
              {list?.tools?.primary}
            </p>
            <p className="w-fit py-1 px-2 rounded-md bg-neutral40 text-sm">
              {list?.tools?.software}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-10">
            <p className="text-xl font-semibold text-[#1CCC62] leading-relaxed">
              $ {list?.payment?.amount}
            </p>

            <div className="flex items-center gap-2">
              <p className="w-6 h-6">
                <ClockSvg />
              </p>
              <p className="text-neutral500 text-lg font-medium">
                {list?.time?.delivery}
              </p>
            </div>

            <p className="text-neutral600 text-lg font-medium">
              Posted {list?.time?.posted}
            </p>
          </div>
        </WhiteBox>

        <div className="flex items-center gap-6">
          <div>
            <label className="text-xl font-medium">Proposed Fee</label>
            <input
              {...register("fee")}
              type="text"
              value={list?.propossedFee}
              placeholder={list?.propossedFee}
              readOnly
              className={`border text-neutral-400  w-full mt-3 py-3 px-6 bg-white rounded-[12px] placeholder:text-neutral-400 placeholder:font-normal ${
                errors?.fee ? "border-primary" : "border-neutral-400"
              }`}
            />
          </div>

          <div>
            <label className="text-xl font-medium">Timeline ( Days )</label>
            <input
              {...register("timeline")}
              type="text"
              value={list?.timeline}
              placeholder={list?.timeline}
              readOnly
              className={`border text-neutral-400  w-full mt-3 py-3 px-6 bg-white rounded-[12px] placeholder:text-neutral-400 placeholder:font-normal ${
                errors?.timeline ? "border-primary" : "border-neutral-400"
              }`}
            />
          </div>
        </div>

        <div>
          <label className="text-xl font-medium">Portfolio Sample (Link)</label>
          <input
            {...register("link")}
            type="text"
            readOnly
            value={list?.videoLink}
            placeholder={list?.videoLink}
            className={`border text-neutral-400  w-full mt-3 py-3 px-6 bg-white rounded-[12px] placeholder:text-neutral-400 placeholder:font-normal ${
              errors?.videoLink ? "border-primary" : "border-neutral-400"
            }`}
          />
        </div>

        <div>
          <label className="text-xl font-medium">
            Short Pitch (why you’re the right fit?)
          </label>
          <textarea
            {...register("description")}
            type="text"
            readOnly
            value={list?.description}
            placeholder={list?.description}
            className={`border text-neutral-400  w-full h-[120px] mt-3 py-3 px-6 bg-white rounded-[12px] placeholder:text-neutral-400 placeholder:font-normal ${
              errors?.description ? "border-primary" : "border-neutral-400"
            }`}
          />
        </div>
        <div>
          <label className="text-xl font-medium">
            Optional Note to Admin
          </label>
          <textarea
            {...register("note")}
            type="text"
            placeholder={"Any additonal option...."}
            className={`border text-neutral-400  w-full h-20 mt-3 py-3 px-6 bg-white rounded-[12px] placeholder:text-neutral-400 placeholder:font-normal ${
              errors?.note ? "border-primary" : "border-neutral-400"
            }`}
          />
        </div>

        <div className="w-full flex items-center gap-8">
            <button onClick={() => setIsOpen(false)} type="button" className={"w-full text-xl font-semibold text-neutral500 cursor-pointer border border-neutral400 py-3 px-6 rounded-xl hover:bg-white hover:border-neutral500 duration-300 ease-in-out"}>Cancel</button>


            <button type="submit" className={"w-full text-xl font-semibold text-white cursor-pointer border border-primary bg-primary py-3 px-6 rounded-xl hover:bg-white hover:text-primary duration-300 ease-in-out"}>Submit</button>
        </div>
      </form>
    </Modal>
  );
}
