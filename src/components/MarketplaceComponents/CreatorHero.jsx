import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import Badge from "../common/Badge/Badge";
import { ArrowRight, DollarSign, TrendingUp, Triangle } from "lucide-react";
import { Button } from "../ui/button";
import avatarImage from "@/components/assets/images/avatar.svg";
import Image from "next/image";
import PlayCircle from "../svg/PlayCircle";

const CreatorHero = () => {
  return (
    <CommonSection sectionBG={"bg-card"} className={"flex justify-between"}>
      {/* left content  */}
      <div className="max-w-[660px] flex flex-col">
        <div className="space-y-5 flex-1">
          {/* badge  */}
          <Badge variant={"secondary"}>
            <DollarSign size={18} />
            Creator Monetization Platform
          </Badge>

          {/* title  */}
          <h1 className="text-brand-primary font-semibold text-4xl">
            Monetize Your Channel with{" "}
            <span className="text-primary">Brand Endorsements</span>
          </h1>

          <h2 className="text-color-primary text-3xl font-semibold">
            _We Handle everything.
          </h2>

          {/* details  */}
          <p className="tex-lg text-color-primary">
            Earn from brand campaigns while we take care of contracts, payments,
            and compliance. Focus on creating great content while we connect you
            with premium advertisers.
          </p>
        </div>

        <div className="space-y-6">
          {/* actions  */}
          <div className="space-x-8 mt-12">
            <Button size={'lg'}>
              List Your Channel
              <ArrowRight />
            </Button>

            <Button variant={"outline"} size={'lg'}>
              Learn How It Works
            </Button>
          </div>

          {/* partnered numbers  */}
          <div className="relative">
            {[...new Array(4)].map((_, idx) => {
              return (
                <Image
                key={idx}
                  src={avatarImage}
                  alt="user"
                  className="absolute"
                  style={{ transform: `translate(${idx * 15}px)` }}
                />
              );
            })}

            <p className="translate-x-25 py-1 text-lg font-medium text-neutral500">
              <span className="text-brand-secondary">1000+</span> Creators
              already partnered
            </p>
          </div>
        </div>
      </div>

      {/* right content  */}
      <div className="relative flex-1 max-w-[560px] bg-neutral rounded-[12px] p-8 space-y-6">
        {/* top content */}
        <div className="flex justify-between items-center bg-card p-4 rounded-2xl">
          <div className="flex gap-4 items-center">
            {/* circle  */}
            <PlayCircle />

            <div>
              <p className="text-secondary font-medium text-[20px]">
                TechReviews Pro
              </p>
              <p className="text-lg text-neutral500">947k subscribers</p>
            </div>
          </div>

          <Badge
            variant={"secondary"}
            className={
              "text-brand-secondary bg-brand-secondary/20 border-brand-secondary"
            }
          >
            <DollarSign size={18} />
            Brand Deal
          </Badge>
        </div>

        {/* earning stat  */}
        <div className="flex items-center flex-col gap-6 bg-brand-secondary/20 p-8 rounded-xl text-brand-secondary font-medium">
          <p>This Month’s Earnings</p>
          <p className="text-3xl font-bold">$14,450</p>
          <p>+24% from last month</p>
        </div>

        {/* stats  */}
        <div className="text-center flex justify-between">
          <div>
            <p className="text-2xl font-semibold text-secondary">15</p>
            <p className="font-medium text-neutral500">Active Campaigns</p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-secondary">98%</p>
            <p className="font-medium text-neutral500">Success Rate</p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-secondary">$2,4k</p>
            <p className="font-medium text-neutral500">Avg per Deal</p>
          </div>
        </div>

        {/* decorations  */}
        <div className="absolute left-0 -translate-x-1/2 w-12 h-12 bg-brand-secondary rounded-full text-neutral flex items-center justify-center">
          <TrendingUp
            fill={"white"}
            className="scale-90 absolute translate-x-0.5"
            color="white"
          />
        </div>
       <PlayCircle className={'absolute top-0 -translate-y-1/2 right-0 translate-x-1/2 '}/>
      </div>
    </CommonSection>
  );
};

export default CreatorHero;
