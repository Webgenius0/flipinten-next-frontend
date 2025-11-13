import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import YtSeoBasic from "./YtPackagesSeoAndPromotion/YtSeoBasic";

export default function YtPackagesSeoAndPromotion() {
  return (
    <div>
      <div className="text-center space-y-4">
        <h3 className="text-[40px] font-semibold leading-12">
          YouTube Services Packages
        </h3>
        <p className="text-lg text-neutral200 leading-7">
          Professional services to boost your channel's performance and
          engagement
        </p>
      </div>

      <div className="flex w-full flex-col gap-6 mt-8">
        <Tabs defaultValue="basic">
          <div className={"max-w-max mx-auto mb-12"}>
            {/* tab options */}
            <TabsList>
              <TabsTrigger className={"bg-card"} value="basic">
                Basic
              </TabsTrigger>
              <TabsTrigger className={"bg-card"} value="premium">
                Premium
              </TabsTrigger>
              <TabsTrigger className={"bg-card"} value="wealth">
                Wealth
              </TabsTrigger>
            </TabsList>
          </div>

          {/* tab 1 */}
          <TabsContent className={"space-y-12"} value="basic">
            <YtSeoBasic />
          </TabsContent>

          {/* tab 2  */}
          <TabsContent className={"space-y-12"} value="premium">
            <YtSeoBasic />
          </TabsContent>

          {/* tab 3 */}
          <TabsContent className={"space-y-12"} value="wealth">
            <YtSeoBasic />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
