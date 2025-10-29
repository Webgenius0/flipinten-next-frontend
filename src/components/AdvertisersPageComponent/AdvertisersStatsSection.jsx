import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import { statData } from "@/data/StatData";
import StatCard from "../common/Cards/StatCard";

const AdvertisersStatsSection = () => {
  return (
    <CommonSection className={"grid grid-cols-3"}>
      {statData?.map((statInfo, idx) => {
        return <StatCard statInfo={statInfo} key={idx} />;
      })}
    </CommonSection>
  );
};

export default AdvertisersStatsSection;
