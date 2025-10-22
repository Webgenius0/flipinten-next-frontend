import React from 'react';
import CommonSection from '../common/CommonSection/CommonSection';
import SectionHeading from '../common/CommonSection/SectionHeading';
import { servicesData } from '@/data/servicesData';
import CommonCard from '../common/Cards/CommonCard';
import { Mic } from 'lucide-react';

const ServicesSection = () => {
    return (
        <CommonSection
            sectionBG={'bg-card'}
        >
            <SectionHeading
                title={'YouTube Services'}
                subtitle={"Professional services to boost your channel's performance and engagement"}
            />

            {/* container  */}
            <div className='grid grid-cols-3 gap-8'>
                {
                    servicesData?.map((service, idx) => {
                        return <CommonCard Icon={Mic} key={idx} data={service} />
                    })
                }
            </div>
        </CommonSection>
    );
};

export default ServicesSection;