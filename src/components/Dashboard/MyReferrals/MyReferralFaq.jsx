import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/common/CommonSection/SectionHeading";
import CommonSection from "@/components/common/CommonSection/CommonSection";

export default function MyReferralFaq() {
    const faqData = [
        {
            id: 1,
            qs: 'When do I get paid?',
            ans: 'Referral bonuses are credited monthly, once YTStart confirms your referral’s earnings.'
        },
        {
            id: 2,
            qs: 'Do I earn only from AdSense?',
            ans: 'Referral bonuses are credited monthly, once YTStart confirms your referral’s earnings.'
        },
        {
            id: 1,
            qs: 'How long do I keep earning?',
            ans: 'Referral bonuses are credited monthly, once YTStart confirms your referral’s earnings.'
        },
    ]
  return (
    <div className="">
      <SectionHeading title={"Frequently Ask Questions"} />
      {/* faq accordion  */}
      <Accordion
        type="single"
        collapsible
        defaultValue={1}
        className="space-y-4"
      >
        {faqData?.map((faq, idx) => {
          if (idx < 4) {
            return (
              <AccordionItem
                className={
                  "border border-neutral data-[state=closed]:border-neutral30 transition-all duration-300 ease-in-out"
                }
                key={idx}
                value={idx + 1}
              >
                <AccordionTrigger>
                  {faq?.id}. {faq?.qs}
                </AccordionTrigger>
                <AccordionContent>{faq?.ans}</AccordionContent>
              </AccordionItem>
            );
          }
        })}
      </Accordion>
    </div>
  );
}
