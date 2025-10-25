import React from "react";
import { Button } from "../ui/button";
import BadgeTable from "../common/Badge/BadgeTable";
import { Star } from "lucide-react";
import Image from "next/image";

const ServiceTab = ({ service }) => {
  const amount = 8132;
  const formattedAmount = amount.toLocaleString("en-IN");

  return (
    <div className="bg-card flex items-start justify-between border border-[#C1C4CC] h-full rounded-3xl p-12">
      <div className="max-w-[520px] flex-col">
        <div>
          {/* title and detail  */}
          <h1 className="text-secondary text-4xl font-semibold">
            {service?.label}
          </h1>
          <p className="mt-3 mb-8 text-lg">{service?.details}</p>

          {/* price and rating  */}
          <div className="flex items-center justify-between">
            <p className="text-3xl text-secondary">
              Starting from <span className="font-semibold">₹{formattedAmount}</span>
            </p>

            <div className="text-neutral500 max-w-max">
              <BadgeTable>
                <Star fill="" /> {service?.rating}/5 rating
              </BadgeTable>
            </div>
          </div>
        </div>

        {/* button  */}
        <div className="mt-10">
          <Button>Order Now</Button>
        </div>
      </div>

      {/* image  */}
      <div className="max-w-[526px] max-h-[320px] rounded-[8px] overflow-hidden">
        <Image src={service?.image} alt="Youtube Services" />
      </div>
    </div>
  );
};

export default ServiceTab;
