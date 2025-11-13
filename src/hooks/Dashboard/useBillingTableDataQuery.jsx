export default function useBillingTableDataQuery() {
  const billings = [
    {
      orderDate: "15 Sep 2025",
      orderId: "Adience upliv Aug 2025",
      channel: "TechWorld",
      invoiceId: "NAV-2025-003",
      amount: "$200",
      status: "Pending",
      action: "Xbox",
    },
    {
      orderDate: "15 Sep 2025",
      orderId: "Adience upliv Aug 2025",
      channel: "TechWorld",
      invoiceId: "NAV-2025-003",
      amount: "$200",
      status: "Paid",
      action: "Download",
    },
    {
      orderDate: "15 Sep 2025",
      orderId: "Adience upliv Aug 2025",
      channel: "TechWorld",
      invoiceId: "NAV-2025-003",
      amount: "$200",
      status: "Pending",
      action: "Download",
    },
  ];

  return billings;
}
