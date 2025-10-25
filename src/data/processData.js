import { Box, Database, FileText, MessageSquarePlus } from "lucide-react";

const processData = [
  {
    label: "Intake",
    icon: FileText,
    feature: "Submit brief + goals",
    details:
      "Share your vision, target audience, and specific requirements with our team.",
  },
  {
    label: "Production",
    icon: Database,
    feature: "Content/SEO/VO",
    details:
      "Our experts get to work creating your content with industry-leading tools and techniques.",
  },
  {
    label: "Review",
    icon: MessageSquarePlus,
    feature: "client feedback & revision",
    details:
      "Review the work, provide feedback, and request any necessary revisions.",
  },
  {
    label: "Delivery",
    icon: Box,
    feature: "Final delivery + upload support",
    details:
      "Receive your completed work with full support for implementation.",
  },
];

export { processData };
