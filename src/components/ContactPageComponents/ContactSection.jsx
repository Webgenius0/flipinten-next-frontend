import React from "react";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";

export default function ContactSection() {
  return (
    <CommonSection>
      <SectionHeading
        title={
          <>
            Get <span className="text-primary">In Touch</span>
          </>
        }
        subtitle={
          "Have questions about our services? Need help with your account? Our support team is here to help you succeed."
        }
      />
    </CommonSection>
  );
}
