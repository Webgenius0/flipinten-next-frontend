import MyReferralFaq from "@/components/Dashboard/MyReferrals/MyReferralFaq";
import MyReferralRecentPayouts from "@/components/Dashboard/MyReferrals/MyReferralRecentPayouts";
import MyReferralsCards from "@/components/Dashboard/MyReferrals/MyReferralsCards";
import MyReferralsCode from "@/components/Dashboard/MyReferrals/MyReferralsCode";
import MyReferralsTable from "@/components/Dashboard/MyReferrals/MyReferralsTable";
import React from "react";

export default function MyReferralsPage() {
  return (
    <div className="space-y-12">
      <MyReferralsCards />
      <MyReferralsCode />
      <MyReferralsTable />
      <MyReferralRecentPayouts />
      <MyReferralFaq />
    </div>
  );
}
