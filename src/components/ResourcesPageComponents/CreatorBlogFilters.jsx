"use client";

import useBlogFilterData from "@/hooks/landingPageHooks/useBlogFilterData";
import SearchSvg from "../svg/SearchSvg";
import { useState } from "react";

export default function CreatorBlogFilters() {
  const categories = useBlogFilterData();
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-12">
      {/* search */}
      <div className="w-[848px] mx-auto bg-neutral py-4 px-6 border border-[#EBECEF] rounded-[12px] flex items-center gap-3">
        <p className="w-6 h-6">
          <SearchSvg />
        </p>
        <input
          type="search"
          placeholder="Search blogs..."
          className="w-full outline-none"
        />
      </div>

      <div className="flex flex-wrap items-center gap-6 px-12 py-6 rounded-[12px] max-w-max mx-auto">
        {/* Filter Header */}
        {categories?.map((category, idx) => (
          <button
            onClick={() => setStep(category?.id)}
            key={idx}
            className={`bg-neutral py-3 px-6 border border-[#EBECEF] rounded-xl text-[#0D0D0D] font-medium text-xl flex items-center justify-center ${
              step === category?.id && "bg-primary text-white"
            }`}
          >
            {category?.name}
          </button>
        ))}
      </div>
    </div> 
  );
}
