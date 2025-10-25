import React from 'react';
import CommonSection from '../common/CommonSection/CommonSection';
import SectionHeading from '../common/CommonSection/SectionHeading';
import HowItWorksCard from '../common/Cards/HowItWorksCard';
import { howMarketplaceWorks } from '@/data/howItWorks';


const HowMarketplaceWorksSection = () => {
    return (
        <CommonSection>
            <SectionHeading
                title={'How It Works'}
                subtitle={'Three simple ways to grow your YouTub presence and masimize your revenue potential'}
            />

            {/* procedures container  */}
            <div className='grid grid-cols-4 gap-8 mt-10'>
                {
                    howMarketplaceWorks?.map((item, idx) => {
                        return <HowItWorksCard className={'px-6 py-8'} idx={idx} key={idx} item={item} />
                    })
                }
            </div>
        </CommonSection>
    );
};


export default HowMarketplaceWorksSection;