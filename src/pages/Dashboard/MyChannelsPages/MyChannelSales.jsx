import MyChannelBrandEndormentDetails from "@/components/Dashboard/MyChannels/MyChannelBrandEndormentDetails";
import React from "react";

export default function MyChannelSales() {
  return (
    <div className="bg-white p-12 rounded-2xl space-y-12">
      <p className="text-[32px] font-semibold text-neutral400">
        Brand Endorsements (25% / 75% Split)
      </p>
      <MyChannelBrandEndormentDetails />
      <MyChannelBrandEndormentDetails />
    </div>
  );
}
