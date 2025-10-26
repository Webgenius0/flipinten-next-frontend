import React from "react";
import CircleIcon from "../svg/CircleIcon";
import { RefreshCw } from "lucide-react";
import { Button } from "../ui/button";

const PolicyCard = () => {
  return (
    <div className="bg-neutral flex items-center justify-between p-6 hover:shadow-xl transition-all duration-300 ease-in-out rounded-[12px]">
      <div className="flex items-center gap-3">
        <CircleIcon icon={RefreshCw} iconColor="#9000FF" bg="#F3E8FF" />

        <div>
          <p className="text-2xl font-bold text-black">100% Money-Back Guarantee</p>
          <p className="text-[#A8A8A8] font-medium text-lg">Complete protection for all your brand partnership earnings.</p>
        </div>
      </div>

      <Button
        variant={"outline"}
        className={"rounded-[8px] bg-[#F3E8FF] text-[#9000FF] border-[#9000FF]"}
      >
        Read Policy
      </Button>
    </div>
  );
};

export default PolicyCard;
