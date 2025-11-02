import SupportTable from "@/components/Dashboard/Supports/SupportTable";
import SupportTopCard from "@/components/Dashboard/Supports/SupportTopCard";
import React from "react";

export default function SupportPage() {
  return (
    <div className="space-y-9">
      <SupportTopCard />
      <SupportTable/>
    </div>
  );
}
