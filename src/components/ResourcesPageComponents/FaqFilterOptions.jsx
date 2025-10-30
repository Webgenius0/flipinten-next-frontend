"use client";
import React, { useState } from "react";

export default function FaqFilterOptions() {
  const categories = [
    {
      id: 1,
      name: "Plans",
    },
    {
      id: 2,
      name: "Services",
    },
    {
      id: 3,
      name: "Payment",
    },
    {
      id: 4,
      name: "Policies",
    },
  ];
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-wrap items-center gap-6 px-12 rounded-[12px] max-w-max mx-auto">
      {/* Filter Header */}
      {categories?.map((category, idx) => (
        <button
          onClick={() => setStep(category?.id)}
          key={idx}
          className={`bg-card py-3 px-6 border border-[#EBECEF] rounded-xl text-[#0D0D0D] font-medium text-xl flex items-center justify-center ${
            step === category?.id && "bg-primary text-white"
          }`}
        >
          {category?.name}
        </button>
      ))}
    </div>
  );
}
