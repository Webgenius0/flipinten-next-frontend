import React, { Suspense } from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import FaqFilterOptions from "./FaqFilterOptions";

export default function FaqSections() {
  return (
    <CommonSection>
      <SectionHeading
        title={
          <>
            Frequently <span className="text-primary">Asked Questions</span>
          </>
        }
        subtitle={
          "Find answers about our plans, services, payments, and policies in one place."
        }
      />

      {/* filters  */}
      <Suspense fallback={<div>Loading filters...</div>}>
        <FaqFilterOptions />
      </Suspense>
    </CommonSection>
  );
}
