import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { storiesData } from "@/data/storiesData";
import StoriesCard from "../common/Cards/StoriesCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const StoriesSection = () => {
  return (
    <CommonSection sectionBG={"bg-card"}>
      <SectionHeading
        title={"Success Stories"}
        subtitle={
          "See how we've helped creators achieve remarkable growth and revenue"
        }
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
          {storiesData?.map((story, idx) => {
            return (
              <CarouselItem key={idx}>
                <StoriesCard story={story} />
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* carousal buttons */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* button  */}
      <div className="mx-auto max-w-max mt-12">
        <Button>
          See all
          <ArrowRight />
        </Button>
      </div>
    </CommonSection>
  );
};

export default StoriesSection;
