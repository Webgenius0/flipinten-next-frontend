import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import YtPackagesSeoAndPromotion from "@/components/YtServicesDashboard/YtServicesPackages/YtPackagesSeoAndPromotion";

export default function YtServicesDashPackages() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="seo">
        <div
          className={"w-full mx-auto mb-12 bg-white border-none rounded-[12px]"}
        >
          {/* tab options */}
          <TabsList className={"w-full justify-between border-none"}>
            <TabsTrigger className={"rounded-xl"} value="seo">
              SEO & Promotion
            </TabsTrigger>
            <TabsTrigger className={"rounded-xl"} value="videos">
              Yt Videos
            </TabsTrigger>
            <TabsTrigger className={"rounded-xl"} value="corporate">
              Corporate Video
            </TabsTrigger>
            <TabsTrigger className={"rounded-xl"} value="voiceover">
              Voiceover Service
            </TabsTrigger>
          </TabsList>
        </div>

        {/* tab 1 */}
        <TabsContent className={"space-y-12"} value="seo">
          <YtPackagesSeoAndPromotion />
        </TabsContent>

        {/* tab 2  */}
        <TabsContent className={"space-y-12"} value="videos">
          <YtPackagesSeoAndPromotion />
        </TabsContent>

        {/* tab 3 */}
        <TabsContent className={"space-y-12"} value="corporate">
          <YtPackagesSeoAndPromotion />
        </TabsContent>
        {/* tab 4 */}
        <TabsContent className={"space-y-12"} value="voiceover">
          <YtPackagesSeoAndPromotion />
        </TabsContent>
      </Tabs>
    </div>
  );
}
