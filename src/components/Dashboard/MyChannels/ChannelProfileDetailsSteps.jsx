import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyChannelPerformance from "./MyChannelPerformance";

export default function ChannelProfileDetailsSteps() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="performance">
        <div
          className={"w-full mx-auto mb-12 bg-white border-none rounded-[12px]"}
        >
          {/* tab options */}
          <TabsList className={"w-full justify-between border-none"}>
            <TabsTrigger className={"rounded-xl"} value="performance">
              Channel Performance
            </TabsTrigger>
            <TabsTrigger className={"rounded-xl"} value="earnings">
              Channel Earnings
            </TabsTrigger>
            <TabsTrigger className={"rounded-xl"} value="endorsements">
              Brand Endorsements
            </TabsTrigger>
            <TabsTrigger className={"rounded-xl"} value="sales">
              Product Sales
            </TabsTrigger>
          </TabsList>
        </div>

        {/* tab 1 */}
        <TabsContent className={"space-y-12"} value="performance">
          <MyChannelPerformance />
        </TabsContent>

        {/* tab 2  */}
        <TabsContent className={"space-y-12"} value="earnings">
          content 2
        </TabsContent>

        {/* tab 3 */}
        <TabsContent className={"space-y-12"} value="endorsements">
          content 3
        </TabsContent>
        {/* tab 3 */}
        <TabsContent className={"space-y-12"} value="sales">
          content 4
        </TabsContent>
      </Tabs>
    </div>
  );
}
