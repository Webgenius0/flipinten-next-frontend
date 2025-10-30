import blocks from "@/assets/images/blocks.png";
import CommonSection from "../common/CommonSection/CommonSection";
import SectionHeading from "../common/CommonSection/SectionHeading";
import Image from "next/image";

const PlansBannerSection = () => {
  return (
    <CommonSection>
      <SectionHeading
        title={
          <>
            Own a YouTube Channel{" "}
            <span className="text-primary">That Earns Like an Asset</span>
          </>
        }
        subtitle={
          "From idea to monetization—done for you. Choose your investment level and watch your channel grow into a revenue-generating asset."
        }
      />
      <div className="border border-neutral50 rounded-4xl overflow-hidden">
        <Image src={blocks} alt="plans" />
      </div>
    </CommonSection>
  );
};

export default PlansBannerSection;
