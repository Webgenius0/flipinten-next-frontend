import React, { Suspense } from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import CreatorBlogFilters from "./CreatorBlogFilters";

export default function BlogPageSection() {
  return (
    <CommonSection sectionBG={"bg-card"}>
      <SectionHeading
        title={
          <>
            YouTube <span className="text-primary">Creator Blog</span>
          </>
        }
        subtitle={
          "Insights, strategies, and case studies to help you succeed on YouTube. Learn from our experience helping thousands of creators grow their channels."
        }
      />

      {/* filters  */}
      <Suspense fallback={<div>Loading filters...</div>}>
        <CreatorBlogFilters />
      </Suspense>
    </CommonSection>
  );
}
