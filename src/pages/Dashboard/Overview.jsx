import DashboardOverviewBalanceCard from "@/components/Dashboard/DashboardOverview/DashboardOverviewBalanceCard";
import DashboardOverviewRecentInfo from "@/components/Dashboard/DashboardOverview/DashboardOverviewRecentInfo";
import DashboardOverviewTopChannels from "@/components/Dashboard/DashboardOverview/DashboardOverviewTopChannels";

export default function Overview() {
  return (
    <div className="space-y-12">
      <DashboardOverviewBalanceCard />
      <DashboardOverviewTopChannels />
      <DashboardOverviewRecentInfo />
    </div>
  );
}
