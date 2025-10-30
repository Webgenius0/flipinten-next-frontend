import DashboardSidebar from "@/Shared/DashboardSidebar";
import DashboardTopbar from "@/Shared/DashboardTopbar";
import React from "react";

export const metadata = {
  title: "YT Start - Dashboard",
};

const layout = ({ children }) => {
  return (
    <main className="w-full h-screen flex">
      <div className="w-[300px] h-screen">
        <DashboardSidebar />
      </div>

      <div className="w-[calc(100%-300px)] h-screen flex flex-col">
        <div className="w-full h-[90px] bg-white">
          <DashboardTopbar />
        </div>

        <div className="w-full h-[calc(100vh-90px)] bg-neutral-100 p-10 overflow-y-scroll custom-scrollbar pb-10">
          {children}
        </div>
      </div>
    </main>
  );
};

export default layout;
