import {
  Award,
  RefreshCw,
  ShieldCheck,
  SquareCheckBig,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

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
      color: "#0051FF",
      icon: Users,
      stat: "10,000+",
      title: "Active Creators",
      subtitle: "Earning through our platform",
    },
    {
      color: "#FFC300",
      icon: Star,
      stat: "4.9/5",
      title: "Creator Rating",
      subtitle: "Average Satisfaction score",
    },
    {
      color: "#2FA75F",
      icon: TrendingUp,
      stat: "$2.3M+",
      title: "Total Paid out",
      subtitle: "To creators this year",
    },
    {
      color: "#9200FF",
      icon: Award,
      stat: "10,000+",
      title: "brand partners",
      subtitle: "Verified advertisers",
    },
  ],

  freeLancerTrust: [
    {
      color: "#0051FF",
      icon: Users,
      stat: "2,500+",
      title: "Active Creators",
    },
    {
      color: "#FF6200",
      icon: Star,
      stat: "$1.2M+",
      title: "Creator Rating",
    },
    {
      color: "#2FA75F",
      icon: TrendingUp,
      stat: "98%",
      title: "Total Paid out",
    },
    {
      color: "#FFC300",
      icon: Award,
      stat: "4.9/5",
      title: "brand partners",
    },
  ],
};

export { trustData };
