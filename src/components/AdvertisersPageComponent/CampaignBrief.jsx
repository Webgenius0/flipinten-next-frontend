import React from "react";
import Badge from "../common/Badge/Badge";
import { ShieldCheck } from "lucide-react";
import { campaignsData } from "@/data/campaignsData";
import CampaignCard from "../common/Cards/CampaignCard";
import PolicyCard from "../MarketplaceComponents/PolicyCard";
import CircleIcon from "../svg/CircleIcon";

const CampaignBrief = () => {
  return (
    <div className="bg-neutral p-12">
      {/* heading  */}
      <div className="flex justify-between items-center">
        <p className="text-color-secondary text-2xl font-semibold">
          Campaign Brief Preview
        </p>
        <Badge
          variant={"secondary"}
          className={
            "bg-brand-secondary/20 text-brand-secondary border-brand-secondary"
          }
        >
          <ShieldCheck size={18} />
          Escrow Protected
        </Badge>
      </div>

      {/* container  */}
      <div className="grid grid-cols-3 gap-8 mt-12">
        {campaignsData?.map((campaign, index) => {
          return <CampaignCard campaign={campaign} key={index} />;
        })}
      </div>

      {/* funds card  */}
      <div className="border border-neutral40 mt-8 bg-neutral flex items-center justify-between p-6 hover:shadow-xl transition-all duration-300 ease-in-out rounded-[12px]">
        <div className="flex items-center gap-3">
          <CircleIcon icon={ShieldCheck} iconColor="#1CCC62" bg="#DBFEEF" />

          <div>
            <p className="text-2xl font-bold text-black">
              Funds held in escrow
            </p>
            <p className="text-[#A8A8A8] font-medium text-lg">
              Payment released only upon successful campaign completion and
              approval
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignBrief;
