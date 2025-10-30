import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import Badge from "../common/Badge/Badge";
import {
  ArrowRight,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import avatarImage from "@/assets/images/avatar2.svg";
import Image from "next/image";
import Brand from "../svg/Brand";
import Startup from "../svg/Startup";
import Saas from "../svg/Saas";

const smallCards = [
  {
    Icon: Brand,
    label: "Brand Partnership",
  },
  {
    Icon: Startup,
    label: "Tech Startup",
  },
  {
    Icon: Saas,
    label: "Saas Company",
  },
];

const AdvertisersHero = () => {
  return (
    <CommonSection sectionBG={"bg-card"} className={"flex justify-between"}>
      {/* left content  */}
      <div className="max-w-[550px] flex flex-col">
        <div className="space-y-5 flex-1">
          {/* badge  */}
          <Badge
            variant={"secondary"}
            className={
              "bg-brand-secondary/20 text-brand-secondary border-brand-secondary"
            }
          >
            <ShieldCheck size={18} />
            Creator Monetization Platform
          </Badge>

          {/* title  */}
          <h1 className="text-brand-primary font-semibold text-4xl">
            Book authentic{" "}
            <span className="text-primary">creator integrations</span> across
            niches
          </h1>

          {/* details  */}
          <p className="tex-lg text-color-primary">
            Connect with verified creators through our secure platform. Track
            real-time performance, ensure escrow safety, and achieve measurable
            ROI on every campaign.
          </p>
        </div>

        <div className="">
          {/* verified and escrow stats */}
          <div className="flex items-center gap-6 mb-6">
            <p className="py-1 text-lg font-medium text-neutral500 flex items-center gap-2">
              <Users />
              <span className="text-brand-secondary">10k+</span>
              Verified Creators
            </p>

            <p className="py-1 text-lg font-medium text-neutral500 flex items-center gap-2">
              <ShieldCheck />
              <span className="text-brand-secondary">1000+</span> Escrow
              Protected
            </p>
          </div>

          {/* actions  */}
          <div className="space-x-8">
            <Button size={'lg'}>
              Create Campaign
              <ArrowRight />
            </Button>

            <Button variant={"outline"} size={'lg'}>
              Learn How It Works
            </Button>
          </div>
        </div>
      </div>

      {/* right content  */}
      <div className="relative flex-1 max-w-[560px] bg-[#DBFEEF] rounded-[12px] p-6 space-y-6 grid grid-cols-2 gap-5">
        {/* container 1  */}
        <div className="space-y-3">
          {[...new Array(3)].map((_, idx) => {
            return (
              // card 1
              <div key={idx} className="space-y-2 p-3 rounded-[14px] bg-card">
                <div className="flex  items-center gap-3">
                  <Image src={avatarImage} alt="user" className="w-10" />
                  <div>
                    <p className="font-medium text-secondary">Sarah Chen</p>
                    <p className="text-xs text-neutral500">Tech Reviewer</p>
                  </div>
                </div>
                <p className="text-xs text-neutral500">
                  1.2M Followers 4.8% avg engagement
                </p>
              </div>
            );
          })}

          <div className="bg-card absolute bottom-0 left-0 w-[50%] h-20 -translate-x-12 translate-y-6 rounded-2xl" />
          <Button
            className={
              "rounded-md bg-brand-secondary border-brand-secondary hover:text-brand-secondary absolute bottom-0 left-0"
            }
          >
            98% Success Rate
          </Button>
        </div>

        {/* container 2  */}
        <div>
          <div className="bg-card absolute top-0 right-0 w-[50%] h-20 translate-x-11 -translate-y-5 rounded-2xl" />

          <Button className={"absolute top-0 right-0 rounded-md"}>
            Live campaigns: 247
          </Button>

          <div className="space-y-3 mt-12 ">
            {smallCards.map((item, idx) => {
              const { Icon, label } = item;
              return (
                // card 2
                <div
                  key={idx}
                  className="space-y-2 p-3 rounded-[14px] bg-card flex items-center justify-center flex-col gap-1"
                >
                  <Icon />
                  <p className="text-color-secondary font-medium">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CommonSection>
  );
};
export default AdvertisersHero;
