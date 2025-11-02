import BillingCard from "@/components/Dashboard/BillingAndTransactions/BillingCard";
import BillingHistoryTable from "@/components/Dashboard/BillingAndTransactions/BillingHistoryTable";
import React from "react";

export default function Billing() {
  return (
    <div className="space-y-8">
      <BillingCard />
      <BillingHistoryTable />
    </div>
  );
}
