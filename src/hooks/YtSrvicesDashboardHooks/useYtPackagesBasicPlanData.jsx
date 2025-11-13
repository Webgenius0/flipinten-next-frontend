
export default function useYtPackagesBasicPlanData() {
  const seoPlans = [
    {
      id: 1,
      title: "SEO & Promotions",
      price: "$300",
      features: [
        "Keyword research (5–7 keywords)",
        "Metadata optimization (5 videos)",
        "Thumbnail A/B suggestions",
        "1 Monthly SEO performance report",
      ],
    },
    {
      id: 2,
      title: "SEO & Promotions",
      price: "$600",
      features: [
        "Keyword research (15–20 keywords)",
        "Metadata optimization (10 videos)",
        "Advanced tag & playlists Strategy",
        "Backlink promotion (5–10 quality backlinks)",
        "2 Monthly SEO reports",
      ],
    },
    {
      id: 3,
      title: "SEO & Promotions",
      price: "$1,200",
      features: [
        "Keyword research (30+ keywords)",
        "Full channel audit + competitor analysis",
        "Optimization for 20 videos",
        "Backlink promotion (20+ backlinks + social signals)",
        "End-to-end growth strategy session",
        "Weekly reports + dedicated manager",
      ],
    },
  ];
  return seoPlans;
}
