import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ActionCard from "../common/Cards/ActionCard";
import { actionsData } from "@/data/actionsData";

const WorkSection = () => {
  return (
    <CommonSection sectionBG={"bg-card"}>
      <SectionHeading
        title={"See Our Work in Action"}
        subtitle={"Real results from real projects across all our services"}
      />

      {/* carousal container  */}
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        {/* contents  */}
        <CarouselContent>
          {actionsData?.map((action, idx) => {
            return (
              <CarouselItem key={idx} className={"basis-1/3"}>
                <ActionCard action={action} />
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* carousal buttons */}
        <div className="relative mt-16">
          <CarouselPrevious className={"left-1/2 -translate-x-18"} />
          <CarouselNext className={"right-1/2 translate-x-18"} />
        </div>
      </Carousel>
    </CommonSection>
  );
};
export default WorkSection;
