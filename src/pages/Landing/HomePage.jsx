import InvestmentPlanSection from '@/components/commonSections.jsx/InvestmentPlanSection';
import BannerSection from '@/components/HomeComponents/BannerSection';
import HowItWorksSection from '@/components/HomeComponents/HowItWorksSection';
import ServicesSection from '@/components/HomeComponents/ServicesSection';
import StatSection from '@/components/HomeComponents/StatSection';


const HomePage = () => {
    return (
        <>
            <BannerSection />
            <StatSection />
            <HowItWorksSection />
            <InvestmentPlanSection />
            <ServicesSection />
        </>
    );
};

export default HomePage;