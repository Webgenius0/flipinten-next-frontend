import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Billing from "./BillinAndTransactions/Billing";
import Transactions from "./BillinAndTransactions/Transactions";

export default function BillingAndTransactionsPage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="billing">
        <div
          className={
            "max-w-max mx-auto mb-12 bg-card rounded-[12px] border border-neutral30"
          }
        >
          {/* tab options */}
          <TabsList className={"border-none"}>
            <TabsTrigger className={"bg-card rounded-[12px]"} value="billing">
              Billing
            </TabsTrigger>
            <TabsTrigger
              className={"bg-card rounded-[12px]"}
              value="transactions"
            >
              Transaction
            </TabsTrigger>
          </TabsList>
        </div>

        {/* tab 1 */}
        <TabsContent className={"space-y-12"} value="billing">
          <Billing />
        </TabsContent>

        {/* tab 2  */}
        <TabsContent className={"space-y-12"} value="transactions">
          <Transactions />
        </TabsContent>
      </Tabs>
    </div>
  );
}
