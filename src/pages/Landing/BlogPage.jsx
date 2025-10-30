import CommonSection from "@/components/common/CommonSection/CommonSection";
import BlogBlogs from "@/components/ResourcesPageComponents/BlogBlogs";
import BlogPageSection from "@/components/ResourcesPageComponents/BlogPageSection";
import BlogTrackRecord from "@/components/ResourcesPageComponents/BlogTrackRecord";
import React from "react";

export default function BlogPage() {
  return (
    <>
      <BlogPageSection />
      <BlogBlogs/>
      <BlogTrackRecord/>
    </>
  );
}
