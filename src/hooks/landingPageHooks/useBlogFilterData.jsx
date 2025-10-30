export default function useBlogFilterData() {
  const categories = [
    { id: 1, name: "All Post", active: true, color: "red" },
    { id: 2, name: "YouTube Strategy", active: false },
    { id: 3, name: "Creator Tips", active: false },
    { id: 4, name: "Industry News", active: false },
    { id: 5, name: "SEO & Growth", active: false },
    { id: 6, name: "Monetization", active: false },
  ];

  return categories;
}
