import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import { monetizationData } from "@/data/monetizationData";

const MonetizationSection = () => {
  return (
    <CommonSection sectionBG={"bg-card"}>
      <SectionHeading title={"Your Journey to Monetization"} />

      <div className="grid grid-cols-5">
        {monetizationData?.map((item, idx) => {
          const { icon: Icon, month, task } = item;
          return (
            <div key={idx} className="text-center">
              <div>
                <div className="bg-primary/20 p-5 mx-auto max-w-max rounded-full">
                  <Icon className="text-primary" />
                </div>
              </div>

              <p className="font-semibold text-secondary mt-5">Month {month}</p>
              <p className="text-sm text-neutral600 mt-2">{task}</p>
            </div>
          );
        })}
      </div>
    </CommonSection>
  );
};

export default MonetizationSection;
