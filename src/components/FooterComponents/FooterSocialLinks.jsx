import AppleStoreButton from "@/components/common/CustomButton/AppleStoreButton";
import GooglePlayButton from "@/components/common/CustomButton/GooglePlayButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";


const FooterSocialLinks = ({ footerData }) => {
  return (
    <div className="w-[520px]">
      <p className="text-lg font-semibold mb-6">Stay Connected</p>
      <div className="flex items-center gap-4 mb-8">
        <Input placeholder="example@email.com" />
        <Button>Subscribe</Button>
      </div>

      <div className="flex items-start justify-between">
        <div className="space-y-6">
          <p className="text-lg font-semibold mb-6">Contact</p>

          <div className="flex items-center gap-4">
            {footerData?.socialLinks?.map((social, idx) => {
              const { icon: Icon } = social;
              return (
                <Link key={idx} href={social?.link}>
                  <div className="hover:bg-primary/80 transition-colors ease-in-out duration-200 flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                    <Icon />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-lg font-semibold mb-5">Download our App</p>

          <div className="flex gap-2">
            <GooglePlayButton />
            <AppleStoreButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSocialLinks;
