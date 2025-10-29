const filterOptions = [
  {
    label: "niche",
    options: [
        { value: "all", label: "All Niches" },
      { value: "tech", label: "Tech & Gadgets" },
      { value: "gaming", label: "Gaming" },
      { value: "education", label: "Education & Tutorials" },
      { value: "lifestyle", label: "Lifestyle & Vlogs" },
      { value: "music", label: "Music & Covers" },
      { value: "fitness", label: "Fitness & Health" },
      { value: "food", label: "Food & Cooking" },
      { value: "travel", label: "Travel & Adventure" },
      { value: "finance", label: "Finance & Investing" },
      { value: "entertainment", label: "Entertainment & Reviews" },
    ],
  },
  {
    label: "plan",
    options: [
      { value: "all", label: "All Plans" },
      { value: "starter", label: "Starter Plan (0–1k subs)" },
      { value: "growth", label: "Growth Plan (1k–10k subs)" },
      { value: "pro", label: "Pro Plan (10k–100k subs)" },
      { value: "creator", label: "Creator Plan (100k+ subs)" },
    ],
  },
  {
    label: "sort by revenue",
    options: [
      { value: "all", label: "Select Revenue" },
      { value: "0-100", label: "$0 – $100 / month" },
      { value: "100-500", label: "$100 – $500 / month" },
      { value: "500-1000", label: "$500 – $1,000 / month" },
      { value: "1000-5000", label: "$1,000 – $5,000 / month" },
      { value: "5000+", label: "$5,000+ / month" },
    ],
  },
];

export { filterOptions };
