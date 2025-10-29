import DashboardSidebarLinks from "@/components/Dashboard/DashboardSidebarLinks";
import LogoutIconSVG from "@/components/svg/DashboardNavIcons/LogoutIconSVG";
import LogoIcon from "@/components/svg/LogoIcon";
import React from "react";

export default function DashboardSidebar() {
  return (
    <aside className="w-full h-full flex flex-col justify-between p-8">
      <div className="w-full h-full flex flex-col gap-20">
        <LogoIcon />

        <DashboardSidebarLinks />
      </div>

      <div>
        <button className="w-full inline-flex items-center gap-3 text-lg font-medium text-primary bg-gray-50 px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer">
          <div>
            <LogoutIconSVG />
          </div>
          Logout
        </button>
      </div>
    </aside>
  );
}
