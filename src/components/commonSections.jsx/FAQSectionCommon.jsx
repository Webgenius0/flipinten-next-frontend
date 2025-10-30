import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import { faqData } from "@/data/faqData";

const FAQSectionCommon = ({ isFalse }) => {
  return (
    <CommonSection>
      {!isFalse && <SectionHeading title={"Frequently Ask Questions"} />}
      {/* faq accordion  */}
      <Accordion
        type="single"
        collapsible
        defaultValue={1}
        className="space-y-6"
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
    </CommonSection>
  );
};

export default FAQSectionCommon;
