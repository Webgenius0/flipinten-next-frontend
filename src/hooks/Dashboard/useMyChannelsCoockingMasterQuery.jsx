export default function useMyChannelsCoockingMasterQuery() {
  const milestones = [
    {
      id: 1,
      milestone: "Milestone-1",
      deliverables:
        "Kickoff & Brand Setup - 8 videos, 6 shorts, 100 Watch Hours, 100 Subscribers",
      deliveryStatus: "Delivered on 20/11/2025",
      milestoneAmount: "25% - ¥66,250",
      paymentStatus: "Paid on 10/10/2025",
    },
    {
      id: 2,
      milestone: "Milestone-2",
      deliverables:
        "Early Traction - 6 videos, 6 shorts, 800 Watch Hours, 250 Subscribers",
      deliveryStatus: "In progress",
      milestoneAmount: "20% - ¥53,000",
      paymentStatus: "Paid on 25/11/2025",
    },
    {
      id: 3,
      milestone: "Milestone-3",
      deliverables:
        "Momentum - 6 videos, 6 shorts, 2,500 Watch Hours, 500 Subscribers",
      deliveryStatus: "Pending",
      milestoneAmount: "20% - ¥53,000",
      paymentStatus: "Pending",
    },
    {
      id: 4,
      milestone: "Milestone-4",
      deliverables:
        "Pre-Monetite - 5 videos, 4 shorts, 3,500 Watch Hours, 800 Subscribers",
      deliveryStatus: "Pending",
      milestoneAmount: "20% - ¥53,000",
      paymentStatus: "Pending",
    },
    {
      id: 5,
      milestone: "Milestone-5",
      deliverables:
        "Monetized - 4000 Watch Hours, 1000 Subscribers - VPP Approval",
      deliveryStatus: "Pending",
      milestoneAmount: "15% - ¥39,750",
      paymentStatus: "Pending",
    },
  ];
  return milestones;
}
