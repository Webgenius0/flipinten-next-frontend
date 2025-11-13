import ButtonCreateTicket from "@/components/Dashboard/Supports/ButtonCreateTicket";
import React from "react";

export default function YtSupportTop() {
  return (
    <div className="flex items-center gap-4 justify-between">
      <div className="space-y-2">
        <h3 className="text-[32px] font-semibold leading-[38px] text-[#071431]">
          Support & Tickets
        </h3>
        <p className="text-2xl leading-9 text-[#071431]">
          Raise a ticket or view your previous support requests.
        </p>
      </div>

      <div>
        <ButtonCreateTicket />
      </div>
    </div>
  );
}
