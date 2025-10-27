import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import BadgeTable from "../Badge/BadgeTable";

const CaseStudyCard = ({ caseStudy }) => {
  const { image, title, description, stats, strategies, tags } = caseStudy;
  return (
    <div className="p-8 shadow-[0_0_30px_0_rgba(0,0,0,0.05)] rounded-2xl">
      <div className="aspect-video overflow-hidden rounded-xl">
        <Image
          alt={title}
          src={image}
          className="w-full h-full object-cover object-center "
        />
      </div>

      <div className="mt-5 space-y-6">
        {/* title and description  */}
        <h3 className="text-secondary text-lg font-semibold">{title}</h3>
        <p className="font-medium text-neutral100">{description}</p>

        {/* stats container  */}
        <div className="flex items-start justify-between">
          {stats[0]?.map((stat, index) => {
            return (
              <div key={index} className="text-center">
                <p className="text-lg text-secondary font-semibold">
                  {stat?.value}
                </p>
                <p className="text-neutral100 font-medium">{stat?.label}</p>
              </div>
            );
          })}
        </div>

        {/* stats container 2  */}
        <div className="grid grid-cols-2 bg-card gap-3 p-4 rounded-[12px]">
          {stats[1]?.map((stat, index) => {
            return (
              <div
                key={index}
                className="text-xs text-center flex items-center gap-2"
              >
                <p className="text-neutral500 font-medium">{stat?.label}:</p>
                <p className="text-secondary font-semibold">{stat?.value}</p>
              </div>
            );
          })}
        </div>

        {/* strategies container */}
        <div className=" flex flex-wrap gap-3">
          {strategies?.map((item, index) => {
            return <BadgeTable className={'rounded-xl text-neutral500 border-neutral500'} key={index}>{item}</BadgeTable>;
          })}
        </div>

        {/* button  */}
        <Button
          variant={"outline"}
          size={"lg"}
          className={"w-full border-neutral40 text-neutral400"}
        >
          View Full Case Study
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
