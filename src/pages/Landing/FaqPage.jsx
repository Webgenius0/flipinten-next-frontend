import CommonSection from "@/components/common/CommonSection/CommonSection";
import FAQSectionCommon from "@/components/commonSections.jsx/FAQSectionCommon";
import FaqSections from "@/components/ResourcesPageComponents/FaqSections";
import HeadphoneSvg from "@/components/svg/HeadphoneSvg";
import QuestionsRoundedSvg from "@/components/svg/QuestionsRoundedSvg";
import Link from "next/link";
import React from "react";

export default function FaqPage() {
  return (
    <>
      <FaqSections />
      <FAQSectionCommon isFalse={true} />

      <CommonSection>
        <div className="bg-card p-6 rounded-[12px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="w-8 h-8">
              <QuestionsRoundedSvg />
            </p>
            <p className="text-2xl font-semibold text-[#1C1C1C]">
              Still have question?
            </p>
          </div>

          <Link
            href={"/contact"}
            className="bg-primary py-4 px-8 rounded-xl w-fit text-white font-medium flex items-center gap-3 border border-primary"
          >
            <p className="w-6 h-6">
              <HeadphoneSvg />
            </p>
            <p>Contact Support</p>
          </Link>
        </div>
      </CommonSection>
    </>
  );
}
