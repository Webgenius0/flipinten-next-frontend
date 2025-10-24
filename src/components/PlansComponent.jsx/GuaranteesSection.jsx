import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import { DollarSign, ShieldCheck } from "lucide-react";

const GuaranteesSection = () => {
  return (
    <CommonSection>
      <SectionHeading
        title={"Our Guarantees"}
        subtitle={"Industry-leading guarantees to protect your investment"}
      />

      <div className="grid grid-cols-2 gap-8">
        {/* Guarantee Card 1  */}
        <div className="hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out flex item-center gap-8 border p-6 rounded-[12px] border-neutral40">
          <div className="">
            <div className="bg-card-secondary max-w-max p-4 rounded-full">
              <ShieldCheck className="text-brand-secondary" />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="font-bold text-2xl">Money-back Guarantee</h3>
            <p className="text-lg font-medium text-neutral200">
              30 days satisfaction guarantee
            </p>
          </div>
        </div>

        {/* Guarantee Card 2  */}
        <div className="hover:scale-105 hover:shadow-lg transition-all duration-300 flex item-center gap-8 border p-6 rounded-[12px] border-neutral40">
          <div className="">
            <div className="bg-card-secondary max-w-max p-4 rounded-full">
              <DollarSign className="text-brand-secondary" />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="font-bold text-2xl">Double-Price Buyback</h3>
            <p className="text-lg font-medium text-neutral200">
              We buy back underperforming channels
            </p>
          </div>
        </div>
      </div>
    </CommonSection>
  );
};

export default GuaranteesSection;
