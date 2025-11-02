"use client";
import PlusSvg from "@/components/svg/DashboardSvg/PlusSvg";
import React, { useState } from "react";
import SupportTicketModal from "./SupportTicketModal";

export default function ButtonCreateTicket() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="py-4 px-6 rounded-[12px] flex items-center gap-3 cursor-pointer text-white bg-primary border border-primary hover:bg-white hover:text-primary duration-300 ease-in-out"
      >
        <p className="w-6 h-6">
          <PlusSvg
            className="group-hover:[&>path]:fill-black w-6 h-6"
            fillColor="currentColor"
          />
        </p>
        <p>Create New Tickets</p>
      </button>

      {isOpen && <SupportTicketModal isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </div>
  );
}
