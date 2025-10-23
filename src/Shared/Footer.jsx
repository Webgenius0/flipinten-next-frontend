import CommonSection from "@/components/common/CommonSection/CommonSection";
import FooterLinks from "@/components/FooterComponents/FooterLinks";
import FooterSocialLinks from "@/components/FooterComponents/FooterSocialLinks";
import LogoIcon from "@/components/svg/LogoIcon";
import { footerData } from "@/data/footerData";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <CommonSection
        sectionBG={"bg-secondary"}
        className={"text-neutral max-w-[1440px]"}
      >
        <div className="flex item-start justify-between">
          {/* about  */}
          <div className="max-w-[374px] space-y-6">
            <LogoIcon variant={"secondary"} />
            <p>{footerData?.about}</p>
          </div>

          {/* links  */}
          <FooterLinks footerData={footerData} />

          {/* email and social icons */}
          <FooterSocialLinks />
        </div>

        {/* bottom description */}
        <div className="py-12 text-center">
          <p>{footerData?.description}</p>
        </div>

        {/* copyright  */}
        <div className="text-center pt-4 border-t border-neutral/20">
          {footerData?.copyright}
        </div>
      </CommonSection>
    </footer>
  );
};

export default Footer;
