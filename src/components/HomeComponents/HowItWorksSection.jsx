import React from 'react';
import CommonSection from '../common/CommonSection/CommonSection';
import SectionHeading from '../common/CommonSection/SectionHeading';
import howItWorks from '@/data/howItWorks';
import HowItWorksCard from '../common/Cards/HowItWorksCard';

const HowItWorksSection = () => {
    return (
        <CommonSection>
            <SectionHeading
                title={'How It Works'}
                subtitle={'Three simple ways to grow your YouTub presence and masimize your revenue potential'}
            />

            {/* procedures container  */}
            <div className='grid grid-cols-3 gap-10 mt-10'>
                {
                    howItWorks?.map((item, idx) => {
                        return <HowItWorksCard key={idx} item={item} />
                    })
                }
            </div>
        </CommonSection>
    );
};

export default HowItWorksSection;