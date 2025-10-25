import { RefreshCw, ShieldCheck, SquareCheckBig } from "lucide-react";

const trustData = {
  data: [
    {
      bgColor: "#EFF6FF",
      iconColor: "#155DFC",
      iconBgColor: "#DBEAFE",
      icon: ShieldCheck,
      title: "Escrow Protection",
      subtitle: "Payments held securely until campaign is completed",
      details:
        "Your earnings are protected in our secure escrow system. Funds are only released after you successfully complete campaign deliverables.",
    },
    {
      bgColor: "#F0FDF4",
      iconColor: "#1CCC62",
      iconBgColor: "#DBFCE7",
      icon: SquareCheckBig,
      title: "Verified Brands Only",
      subtitle: "Work only with vetted advertisers",
      details:
        "Every brand on our platform is thoroughly vetted for legitimacy, payment history, and brand safety. No scams, no unreliable partners.",
    },
    {
      bgColor: "#FAF5FF",
      iconColor: "#9000FF",
      iconBgColor: "#F3E8FF",
      icon: RefreshCw,
      title: "Money-Back Guarantee",
      subtitle: "We stand by our promises",
      details:
        "a verified brand fails to pay for completed work, we'll cover the payment from our guarantee fund. Your time and effort are protected.",
    },
  ],

  stats: [
    {
      stat: "10,000+",
      title: "Active Creators",
      subtitle: "Earning through our platform",
    },
    {
      stat: "4.9/5",
      title: "Creator Rating",
      subtitle: "Average Satisfaction score",
    },
    {
      stat: "$2.3M+",
      title: "Total Paid out",
      subtitle: "To creators this year",
    },
    {
      stat: "10,000+",
      title: "brand partners",
      subtitle: "Verified advertisers",
    },
  ],
};

export { trustData };
