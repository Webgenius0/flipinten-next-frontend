"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function BlogTrackRecordSubscribe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="flex items-center gap-5">
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Enter your email"
            className={`w-full py-5 px-8 rounded-[12px] border ${
              errors?.email ? "border-primary" : "border-[#6A7283]"
            }`}
          />

          <button
            type="submit"
            className="py-5 px-12 rounded-[12px] bg-primary text-xl text-white border border-primary cursor-pointer hover:bg-white hover:text-primary duration-500 ease-in-out"
          >
            Subscribe
          </button>
        </div>
      </div>
    </form>
  );
}
