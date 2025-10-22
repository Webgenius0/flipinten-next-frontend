import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import BasicPlanSection from "./BasicPlanSection";

export function InvestmentPlanContainer() {
    return (
        <div className="flex w-full flex-col gap-6">
            <Tabs defaultValue="basic">
                <div className={'max-w-max mx-auto mb-12'}>
                    <TabsList>
                        <TabsTrigger className={'bg-card'} value="basic">Basic</TabsTrigger>
                        <TabsTrigger className={'bg-card'} value="premium">Premium</TabsTrigger>
                        <TabsTrigger className={'bg-card'} value="wealth">Wealth</TabsTrigger>
                    </TabsList>
                </div>



                <TabsContent value="basic">
                    <BasicPlanSection />
                </TabsContent>
                <TabsContent value="premium">
                    ok2
                </TabsContent>
                <TabsContent value="wealth">
                    ok3
                </TabsContent>
            </Tabs>
        </div>
    )
}


export default InvestmentPlanContainer;