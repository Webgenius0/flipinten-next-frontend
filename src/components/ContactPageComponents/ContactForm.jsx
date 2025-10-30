"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import SendSvg from "../svg/SendSvg";

const countries = [
  {
    id: 1,
    name: "Argentina",
  },
  {
    id: 2,
    name: "Bangladesh",
  },
  {
    id: 1,
    name: "Canada",
  },
  {
    id: 1,
    name: "Denmark",
  },
  {
    id: 1,
    name: "England",
  },
];

export default function ContactForm() {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* name && email */}
      <div className="flex items-center gap-4">
        <div className="w-full">
          <label className="text-xl font-semibold leading-[30px]">Name</label>
          <input
            {...register("name")}
            type="text"
            placeholder="Enter your name"
            className={`border  w-full mt-3 py-3 px-6 bg-card rounded-[12px] placeholder:text-neutral-400 ${
              errors?.name ? "border-primary" : "border-neutral-400"
            }`}
          />
        </div>

        <div className="w-full">
          <label className="text-xl font-semibold leading-[30px]">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Enter your email"
            className={`border  w-full mt-3 py-3 px-6 bg-card rounded-[12px] placeholder:text-neutral-400 ${
              errors?.email ? "border-primary" : "border-neutral-400"
            }`}
          />
        </div>
      </div>

      {/* phone && country */}
      <div className="flex items-center gap-4">
        <div className="w-full">
          <label className="text-xl font-semibold leading-[30px]">Phone</label>
          <input
            {...register("phone")}
            type="number"
            placeholder="Enter phone number"
            className={`border  w-full mt-3 py-3 px-6 bg-card rounded-[12px] placeholder:text-neutral-400 ${
              errors?.phone ? "border-primary" : "border-neutral-400"
            }`}
          />
        </div>

        <div className="w-full">
          <label className="text-xl font-semibold leading-[30px]">
            Country
          </label>

          <Select onValueChange={(value) => setValue("country", value)}>
            <SelectTrigger
              className={`border text-neutral-400  w-full !h-12 mt-3 py-3 px-6 bg-card rounded-[12px] placeholder:text-neutral-400 ${
                errors?.country ? "border-primary" : "border-neutral-400"
              }`}
            >
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Country</SelectLabel>
                {countries?.map((country, idx) => (
                  <SelectItem key={idx} value={country?.name}>
                    {country?.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <input {...register("country", { required: true })} type="hidden" />
        </div>
      </div>

      {/* subject && type */}
      <div className="flex items-center gap-4">
        <div className="w-full">
          <label className="text-xl font-semibold leading-[30px]">
            Subject
          </label>
          <input
            {...register("subject")}
            type="text"
            placeholder="How can we help you..."
            className={`border  w-full mt-3 py-3 px-6 bg-card rounded-[12px] placeholder:text-neutral-400 ${
              errors?.subject ? "border-primary" : "border-neutral-400"
            }`}
          />
        </div>

        <div className="w-full">
          <label className="text-xl font-semibold leading-[30px]">Type</label>

          <Select onValueChange={(value) => setValue("type", value)}>
            <SelectTrigger
              className={`border text-neutral-400  w-full !h-12 mt-3 text-base py-3 px-6 bg-card rounded-[12px] placeholder:text-neutral-400 ${
                errors?.type ? "border-primary" : "border-neutral-400"
              }`}
            >
              <SelectValue placeholder="Select Inquiry type..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Type</SelectLabel>
                {countries?.map((country, idx) => (
                  <SelectItem key={idx} value={country?.name}>
                    {country?.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <input {...register("type", { required: true })} type="hidden" />
        </div>
      </div>

      {/* message */}
      <div className="w-full">
        <label className="text-xl font-semibold leading-[30px]">Message</label>
        <textarea
          {...register("message", { required: true })}
          placeholder="Enter your message..."
          className={`border  w-full h-40 mt-3  py-3 px-6 bg-card rounded-[12px] placeholder:text-neutral-400 ${
            errors?.name ? "border-primary" : "border-neutral-400"
          }`}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 px-8 rounded-xl bg-primary text-white flex items-center gap-3 justify-center border border-primary cursor-pointer hover:bg-white hover:text-primary duration-300 ease-in-out"
      >
        Send Message
        <p className="w-6 h-6">
          <SendSvg />
        </p>
      </button>
    </form>
  );
}
