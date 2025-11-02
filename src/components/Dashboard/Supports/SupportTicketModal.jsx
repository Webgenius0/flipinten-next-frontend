"use client";
import Modal from "@/components/common/Modal/Modal";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
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

export default function SupportTicketModal({ isOpen, setIsOpen }) {
  // local hooks


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

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

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
          <div>
            <label className="text-xl font-medium"> Category</label>

            <Select onValueChange={(value) => setValue("country", value)}>
              <SelectTrigger
                className={`border text-neutral-400  w-full !h-12 mt-3 py-3 px-6 bg-card rounded-[12px] placeholder:text-neutral-400 ${
                  errors?.country ? "border-primary" : "border-neutral-400"
                }`}
              >
                <SelectValue placeholder="Select your country" />
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

            <input {...register("category")} type="hidden" />
          </div>


          <div>
            
          </div>
        </form>
      </div>
    </Modal>
  );
}
