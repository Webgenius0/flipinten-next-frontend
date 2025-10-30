import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import BlogTrackRecordSubscribe from "./BlogTrackRecordSubscribe";

export default function BlogTrackRecord() {
  return (
    <CommonSection className={"bg-card my-20 rounded-3xl"}>
      <SectionHeading
        title={"Our Track Record"}
        subtitle={
          "Get the latest YouTube strategies, case studies, and industry insights delivered to your inbox."
        }
        className={"text-nowrap"}
      />

      {/* subscribe */}
      <div className="w-1/2 mx-auto">
        <BlogTrackRecordSubscribe />
      </div>
    </CommonSection>
  );
}
