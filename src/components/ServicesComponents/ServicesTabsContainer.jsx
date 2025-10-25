import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceTab from "./ServiceTab";
import { youtubeServicesData } from "@/data/youtubeServicesData";

export function ServicesTabsContainer() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="seo">
        <div className={"max-w-max mx-auto mb-12"}>
          {/* tab options */}
          <TabsList>
            <TabsTrigger value="seo">SEO & Promotion</TabsTrigger>
            <TabsTrigger value="video">Video Production</TabsTrigger>
            <TabsTrigger value="voice">Voice Over</TabsTrigger>
          </TabsList>
        </div>

        {/* tab 1 */}
        <TabsContent className={"space-y-12"} value="seo">
          <ServiceTab service={youtubeServicesData?.seo} />
        </TabsContent>

        {/* tab 2  */}
        <TabsContent className={"space-y-12"} value="video">
          <ServiceTab service={youtubeServicesData?.video} />
        </TabsContent>

        {/* tab 3 */}
        <TabsContent className={"space-y-12"} value="voice">
          <ServiceTab service={youtubeServicesData?.voice} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ServicesTabsContainer;
