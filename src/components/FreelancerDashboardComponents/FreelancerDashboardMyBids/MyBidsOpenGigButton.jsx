"use client";
import React, { useState } from "react";
import BidsOpenGigsModal from "./BidsOpenGigsModal";

export default function MyBidsOpenGigButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="py-2 px-3 w-full rounded-[12px] text-center cursor-pointer text-white bg-primary border border-primary hover:bg-white hover:text-primary duration-300 ease-in-out"
      >
        Place Bid
      </button>

      {isOpen && <BidsOpenGigsModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}
