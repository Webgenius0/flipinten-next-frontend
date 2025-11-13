import FreelancerDashboardSidebar from "@/Shared/FreelancerDashboard/FreelancerDashboardSidebar";
import FreelancerDashboarTopbar from "@/Shared/FreelancerDashboard/FreelancerDashboarTopbar";
import React from "react";

export const metadata = {
  title: "freelancer-dashboard",
};
export default function layout({ children }) {
  return (
    <main className="w-full h-screen flex">
      <div className="w-[300px] h-screen">
        <FreelancerDashboardSidebar />
      </div>

      <div className="w-[calc(100%-300px)] h-screen flex flex-col">
        <div className="w-full h-[90px] bg-white">
          <FreelancerDashboarTopbar />
        </div>

        <div className="w-full h-[calc(100vh-90px)] bg-neutral-100 p-10 overflow-y-scroll custom-scrollbar">
          {children}
        </div>
      </div>
    </main>
  );
}
