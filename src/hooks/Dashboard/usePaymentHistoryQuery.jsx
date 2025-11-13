import React from "react";

export default function usePaymentHistoryQuery() {
  const paymentHistory = [
    {
      id: 1,
      description: "AdSense Revenue Share",
      date: "25 Aug 2025",
      amount: 220.99,
      status: "Paid",
    },
    {
      id: 2,
      description: "AdSense Revenue Share",
      date: "25 Aug 2025",
      amount: 220.99,
      status: "Paid",
    },
    {
      id: 3,
      description: "AdSense Revenue Share",
      date: "25 Aug 2025",
      amount: 220.99,
      status: "Paid",
    },
    {
      id: 4,
      description: "AdSense Revenue Share",
      date: "25 Aug 2025",
      amount: 220.99,
      status: "Paid",
    },
  ];
  return paymentHistory;
}
