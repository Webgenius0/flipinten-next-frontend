import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import YtMyOrdersCorporateVideoOrders from "@/components/YtServicesDashboard/YtServicesMyOrders/YtMyOrdersCorporateVideoOrders";
import YtMyOrdersSeoOrders from "@/components/YtServicesDashboard/YtServicesMyOrders/YtMyOrdersSeoOrders";
import YtMyOrdersVoiceoverOrders from "@/components/YtServicesDashboard/YtServicesMyOrders/YtMyOrdersVoiceoverOrders";
import YtMyOrdersYtVideoOrders from "@/components/YtServicesDashboard/YtServicesMyOrders/YtMyOrdersYtVideoOrders";
import React from "react";

export default function YtServicesDashMyOrdersPage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="seo">
        <div
          className={"w-full mx-auto mb-12 bg-white border-none rounded-[12px]"}
        >
          {/* tab options */}
          <TabsList className={"w-full justify-between border-none"}>
            <TabsTrigger className={"rounded-xl"} value="seo">
              SEO Orders
            </TabsTrigger>
            <TabsTrigger className={"rounded-xl"} value="videos">
              Yt Videos Orders
            </TabsTrigger>
            <TabsTrigger className={"rounded-xl"} value="corporate">
              Corporate Video Orders
            </TabsTrigger>
            <TabsTrigger className={"rounded-xl"} value="voiceover">
              Voiceover Orders
            </TabsTrigger>
          </TabsList>
        </div>

        {/* tab 1 */}
        <TabsContent className={"space-y-12"} value="seo">
          <YtMyOrdersSeoOrders />
        </TabsContent>

        {/* tab 2  */}
        <TabsContent className={"space-y-12"} value="videos">
          <YtMyOrdersYtVideoOrders />
        </TabsContent>

        {/* tab 3 */}
        <TabsContent className={"space-y-12"} value="corporate">
          <YtMyOrdersCorporateVideoOrders />
        </TabsContent>
        {/* tab 4 */}
        <TabsContent className={"space-y-12"} value="voiceover">
          <YtMyOrdersVoiceoverOrders />
        </TabsContent>
      </Tabs>
    </div>
  );
}
