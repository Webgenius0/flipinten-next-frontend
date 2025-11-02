import BillingCard from "@/components/Dashboard/BillingAndTransactions/BillingCard";
import TransactionHistoryTable from "@/components/Dashboard/BillingAndTransactions/TransactionHistoryTable";
import React from "react";

export default function Transactions() {
  return (
    <div className="space-y-8">
      <BillingCard />
      <TransactionHistoryTable />
    </div>
  );
}
