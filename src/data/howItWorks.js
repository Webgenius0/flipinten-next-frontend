import { DollarSign, icons, ListCheck, UserPlus, Video } from "lucide-react";

const howItWorks = [
  {
    label: "Invest in Channels",
    description:
      "Choose from our curated channel investment plans. We handle everything from content creation to monetization strategies.",
  },
  {
    label: "Order Services",
    description:
      "Get individual services like SEO optimization, professional video production, and high-quality voice-overs.",
  },
  {
    label: "Monetize via Brand Deals",
    description:
      "Connect with advertisers and secure profitable brand endorsements and product placements for maximum revenue.",
  },
];


const howMarketplaceWorks = [
  {
    icon: UserPlus,
    label: "List Channel",
    description:
      "Connect your YouTube channel and select your content categories (gaming, tech, lifestyle, etc.) to help us match you with relevant brand campaigns.",
  },
  {
    icon: ListCheck,
    label: "Approve Campaigns",
    description:
      "Browse campaign offers from verified brands. You have full control - only accept campaigns that align with your content and values.",
  },
  {
    icon: Video,
    label: "Deliver Content",
    description:
      "Create your sponsored content following campaign guidelines. Enable YouTube's Paid Promotion toggle and include proper #ad disclosures for compliance.",
  },
  {
    icon: DollarSign,
    label: "Get Paid",
    description:
      "Once your content is approved by the advertiser, funds are released from escrow directly to your account. Fast, secure, and guaranteed payments.",
  },
];


const howFreelancersWorks = [
  {
    icon: UserPlus,
    label: "Create Profile",
    description:
      "Showcase your skills, portfolio, and set your rates",
  },
  {
    icon: ListCheck,
    label: "Get Verified",
    description:
      "Complete skill assessments and verification process",
  },
  {
    icon: Video,
    label: "Browse Projects",
    description:
      "Find projects that match your skills and availability",
  },
  {
    icon: DollarSign,
    label: "Deliver & Earn",
    description:
      "Complete projects on time and get paid automatically",
  },
];

export default howItWorks;
export { howMarketplaceWorks, howFreelancersWorks };
