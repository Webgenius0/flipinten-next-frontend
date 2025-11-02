import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/common/CommonSection/SectionHeading";

export default function MyReferralFaq() {
  const faqData = [
    {
      id: 1,
      qs: "When do I get paid?",
      ans: "Referral bonuses are credited monthly, once YTStart confirms your referral’s earnings.",
    },
    {
      id: 2,
      qs: "Do I earn only from AdSense?",
      ans: "Referral bonuses are credited monthly, once YTStart confirms your referral’s earnings.",
    },
    {
      id: 3,
      qs: "How long do I keep earning?",
      ans: "Referral bonuses are credited monthly, once YTStart confirms your referral’s earnings.",
    },
  ];
  return (
    <div className="">
      <SectionHeading title={"Frequently Ask Questions"} />
      {/* faq accordion  */}

      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="1"
        >
          {faqData?.map((data, idx) => (
            <AccordionItem key={idx} value={idx+1}>
              <AccordionTrigger>{data?.qs}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {data?.ans}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
