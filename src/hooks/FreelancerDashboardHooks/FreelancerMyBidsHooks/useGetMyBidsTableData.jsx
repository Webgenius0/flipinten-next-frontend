export default function useGetMyBidsTableData() {
  const lists = [
    {
      jobId: "YT-2043",
      role: "Video Editor",
      proposedFee: "$200",
      cta: "7 Days",
      status: "Shortlisted",
      lastUpdated: "3h ago",
      action: "View Details",
    },
    {
      jobId: "TKT-2025Q01",
      role: "SEO Audit",
      proposedFee: "$200",
      cta: "7 Days",
      status: "Awarded",
      lastUpdated: "1d ago",
      action: "View Details",
    },
    {
      jobId: "TKT-2025Q01",
      role: "Scriptwriting",
      proposedFee: "$200",
      cta: "7 Days",
      status: "Rejected",
      lastUpdated: "1d ago",
      action: "View Details",
    },
    {
      jobId: "TKT-2025Q01",
      role: "Scriptwriting",
      proposedFee: "$200",
      cta: "7 Days",
      status: "Identified",
      lastUpdated: "1d ago",
      action: "View Details",
    },
  ];
  return {lists};
}
