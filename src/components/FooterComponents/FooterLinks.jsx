import Link from "next/link";
import React from "react";

const FooterLinks = ({ footerData }) => {
  return (
    <div className="flex gap-10">
      {/* categories / Labels */}
      {footerData?.footerLinks?.map((footerLink, idx) => {
        return (
          <div key={idx}>
            <p className="text-lg font-semibold mb-6"> {footerLink?.label}</p>

            {/* links  */}
            <ul className="space-y-3">
              {footerLink?.links?.map((link, idx) => {
                return (
                  <li key={idx}>
                    <Link href={link?.link}>{link?.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default FooterLinks;
