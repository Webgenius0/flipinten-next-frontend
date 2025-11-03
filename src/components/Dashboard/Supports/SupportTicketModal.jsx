"use client";
import Modal from "@/components/common/Modal/Modal";
import ArrowSvg from "@/components/svg/ArrowSvg";
import UploadSvg from "@/components/svg/DashboardSvg/UploadSvg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const categories = [
  {
    id: 1,
    name: "category 1",
  },
  {
    id: 2,
    name: "category 2",
  },
  {
    id: 3,
    name: "category 3",
  },
  {
    id: 4,
    name: "category 4",
  },
];

const priorities = [
  {
    id: 1,
    name: "normal",
  },
  {
    id: 2,
    name: "moderate",
  },
  {
    id: 1,
    name: "high",
  },
];

export default function SupportTicketModal({ isOpen, setIsOpen }) {
  // local hooks
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [selectedDocument, setSelectedDocument] = useState();

  const handleDocuments = (e) => {
    const selected = e.target.files[0];
    setValue("document", selected);
    if (selected) {
      setSelectedDocument(selected?.name);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="">
        <h3 className="text-[32px] font-semibold leading-[38px] text-[#071431]">
          Creates New Ticket
        </h3>
        <p className="text-2xl leading-9 text-[#071431]">
          Fill in the details below to submit your support request.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {/* category */}
          <div>
            <label className="text-xl font-medium"> Category</label>

            <Select onValueChange={(value) => setValue("category", value)}>
              <SelectTrigger
                className={`border text-neutral-400  w-full !h-12 mt-3 py-3 px-6 bg-white rounded-[12px] placeholder:text-neutral-400 placeholder:font-normal ${
                  errors?.country ? "border-primary" : "border-neutral-400"
                }`}
              >
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="z-999999">
                <SelectGroup>
                  <SelectLabel>Country</SelectLabel>
                  {categories?.map((country, idx) => (
                    <SelectItem key={idx} value={country?.name}>
                      {country?.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <input
              {...register("category", { required: true })}
              type="hidden"
            />
          </div>

          {/* subject */}
          <div>
            <label className="text-xl font-medium">Subject</label>
            <input
              {...register("subject", { required: true })}
              type="text"
              placeholder="Brief description of your issue"
              className={`border text-neutral-400  w-full mt-3 py-3 px-6 bg-white rounded-[12px] placeholder:text-neutral-400 placeholder:font-normal ${
                errors?.subject ? "border-primary" : "border-neutral-400"
              }`}
            />
          </div>

          {/* description */}
          <div>
            <label className="text-xl font-medium">Description</label>
            <textarea
              {...register("description", { required: true })}
              type="text"
              placeholder="Brief description of your issue"
              className={`border text-neutral-400  w-full h-28 mt-3 py-3 px-6 bg-white rounded-[12px] placeholder:text-neutral-400 placeholder:font-normal ${
                errors?.description ? "border-primary" : "border-neutral-400"
              }`}
            />
          </div>

          {/* priority */}
          <div>
            <label className="text-xl font-medium">Priority</label>

            <Select onValueChange={(value) => setValue("priority", value)}>
              <SelectTrigger
                className={`border text-neutral-400  w-full !h-12 mt-3 py-3 px-6 bg-white rounded-[12px] placeholder:text-neutral-400 placeholder:font-normal ${
                  errors?.priority ? "border-primary" : "border-neutral-400"
                }`}
              >
                <SelectValue placeholder="Select your priority" />
              </SelectTrigger>
              <SelectContent className="z-999999">
                <SelectGroup>
                  <SelectLabel>Priority</SelectLabel>
                  {priorities?.map((priority, idx) => (
                    <SelectItem key={idx} value={priority?.name}>
                      {priority?.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <input
              {...register("priority", { required: true })}
              type="hidden"
            />
          </div>

          {/* attachment */}
          <div>
            <label>
              <p className="text-xl font-medium mb-3">Attachment (Optional)</p>
              <div className=" w-full h-[280px] rounded-3xl bg-white flex flex-col items-center justify-center gap-4">
                <p className="w-9 h-9">
                  <UploadSvg />
                </p>
                <p className="text-lg text-center font-medium">
                  {selectedDocument ? selectedDocument : "Upload documents"}
                </p>
                <p className="text-sm font-medium text-center">Max 5MB</p>

                <label
                  type="button"
                  htmlFor="attachment"
                  className="py-2 px-4 rounded-xl bg-primary border border-primary cursor-pointer text-white hover:text-primary hover:bg-white duration-300 ease-in-out"
                >
                  Choose File
                </label>
              </div>

              <input
                id="attachment"
                {...register("document")}
                type="file"
                onChange={handleDocuments}
                className="hidden"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-12 text-xl font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2  bg-primary border border-primary cursor-pointer text-white hover:text-primary hover:bg-white duration-300 ease-in-out"
          >
            Create Tickets
            <p className="w-6 h-4">
              <ArrowSvg
                className="group-hover:[&>path]:fill-black"
                fillColor="currentColor"
              />
            </p>
          </button>
        </form>
      </div>
    </Modal>
  );
}
