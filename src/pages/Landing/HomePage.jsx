import InvestmentPlanSection from '@/components/commonSections.jsx/InvestmentPlanSection';
import BannerSection from '@/components/HomeComponents/BannerSection';
import HowItWorksSection from '@/components/HomeComponents/HowItWorksSection';
import MarketPlaceSection from '@/components/HomeComponents/MarketPlaceSection';
import ServicesSection from '@/components/HomeComponents/ServicesSection';
import StatSection from '@/components/HomeComponents/StatSection';
import StoriesSection from '@/components/HomeComponents/StoriesSection';


const HomePage = () => {
    return (
        <>
            <BannerSection />
            <StatSection />
            <HowItWorksSection />
            <InvestmentPlanSection />
            <ServicesSection />
            <MarketPlaceSection />
            <StoriesSection />
        </>
    );
};

export default HomePage;