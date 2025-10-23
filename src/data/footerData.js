import Instagram from "@/components/svg/Instagram";
import Meta from "@/components/svg/Meta";
import TikTokIcon from "@/components/svg/TikTokIcon";
import YoutubeWhite from "@/components/svg/YoutubeWhite";


const footerData = {
  about:
    "Incluther Digital Assets Pvt. Ltd. is an independent company providing YouTube channel management services under ytstart.com and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with YouTube or Google LLC.",
  description:
    "Incluther Digital Assets Pvt. Ltd. provides YouTube channel management services only and does not offer investment, financial planning, or advisory services. Our services should not be construed as an investment opportunity, nor should any earnings projections be interpreted as guaranteed financial returns.",
  socialLinks: [
    { icon: Instagram, link: "/" },
    { icon: Meta, link: "/" },
    { icon: TikTokIcon, link: "/" },
    { icon: YoutubeWhite, link: "/" },
  ],
  footerLinks: [
    {
      label: "Company",
      links: [
        {
          label: "About ",
          link: "/",
        },
        {
          label: "careers",
          link: "/",
        },
        {
          label: "Press",
          link: "/",
        },
        {
          label: "Contract",
          link: "/",
        },
        {
          label: "Refer & Earn",
          link: "/",
        },
      ],
    },
    {
      label: "Products",
      links: [
        {
          label: "Plans",
          link: "/",
        },
        {
          label: "Service",
          link: "/",
        },
        {
          label: "Creator Marketplace",
          link: "/",
        },
        {
          label: "Advertisers",
          link: "/",
        },
        {
          label: "Freelancers",
          link: "/",
        },
      ],
    },
    {
      label: "Resources",
      links: [
        {
          label: "Case Studies ",
          link: "/",
        },
        {
          label: "Blog",
          link: "/",
        },
        {
          label: "FAQs",
          link: "/",
        },
        {
          label: "Guides",
          link: "/",
        },
        {
          label: "Status Page",
          link: "/",
        },
      ],
    },
  ],
  copyright:
    "© Year YTStart • Language/Currency switch • Trust badges (PCI, GST, DMCA, Google API/OAuth notice",
};

export { footerData };
