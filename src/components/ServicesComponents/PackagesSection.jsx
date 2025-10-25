import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import CommonCard from "../common/Cards/CommonCard";
import { TrendingUpIcon } from "lucide-react";
import { packagesData } from "@/data/packagesData";

const PackagesSection = () => {
  return (
    <CommonSection sectionBG={"bg-card"}>
      <SectionHeading
        title={"SEO & Promotion Packages"}
        subtitle={"Choose the perfect package for your needs"}
      />

      {/* container  */}
      <div className="grid grid-cols-3 gap-8">
        {packagesData?.map((service, idx) => {
          return <CommonCard Icon={TrendingUpIcon} key={idx} data={service} />;
        })}
      </div>
    </CommonSection>
  );
};

export default PackagesSection;
