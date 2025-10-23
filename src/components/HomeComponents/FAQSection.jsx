import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import { faqData } from "@/data/faqData";

const FAQSection = () => {
  return (
    <CommonSection className={"max-w-[1720px]"}>
      <SectionHeading
        title={"Frequently Ask Questions"}
        subtitle={"See how has transformed logistics operations for our users"}
      />

      {/* faq accordion  */}
      <Accordion type="single" collapsible defaultValue={1}>
        <div className="grid grid-cols-2 gap-10">
          <div className="justify-between flex flex-col item-start">
            {faqData?.map((faq, idx) => {
              if (idx < faqData.length / 2) {
                return (
                  <AccordionItem key={idx} value={idx + 1}>
                    <AccordionTrigger>
                      {faq?.id}. {faq?.qs}
                    </AccordionTrigger>
                    <AccordionContent>{faq?.ans}</AccordionContent>
                  </AccordionItem>
                );
              }
            })}
          </div>
          <div className="justify-between flex flex-col item-start">
            {faqData?.map((faq, idx) => {
              if (idx >= faqData.length / 2) {
                return (
                  <AccordionItem key={idx} value={idx + 1}>
                    <AccordionTrigger>
                      {faq?.id}. {faq?.qs}
                    </AccordionTrigger>
                    <AccordionContent>{faq?.ans}</AccordionContent>
                  </AccordionItem>
                );
              }
            })}
          </div>
        </div>
      </Accordion>
    </CommonSection>
  );
};

export default FAQSection;
