
export default function useGetMyBidsAnalyticsTableData() {
  const bidHistory = [
    {
      jobId: "$60 Optimization",
      amountBid: "$200",
      status: "Awarded",
      result: "Completed",
      date: "26 Aug 2025",
    },
    {
      jobId: "Thumbnail Design",
      amountBid: "$200",
      status: "Awarded",
      result: "Completed",
      date: "25 Aug 2025",
    },
    {
      jobId: "Script Writing",
      amountBid: "$200",
      status: "Rejected",
      result: "–",
      date: "26 Aug 2025",
    },
    {
      jobId: "Voice Dyer - Fitness Shorts",
      amountBid: "$200",
      status: "Awarded",
      result: "Completed",
      date: "25 Aug 2025",
    },
  ];
  return { bidHistory };
}
