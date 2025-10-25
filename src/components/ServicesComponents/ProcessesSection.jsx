import React from 'react';
import CommonSection from '../common/CommonSection/CommonSection';
import SectionHeading from '../common/CommonSection/SectionHeading';
import { processData } from '@/data/processData';
import ProcessCard from '../common/Cards/ProcessCard';

const ProcessesSection = () => {
    return (
        <CommonSection>
            <SectionHeading
            title={"Our Process"}
            />
            

            
            {/* procedures container  */}
            <div className='grid grid-cols-4 gap-10 mt-10'>
                {
                    processData?.map((item, idx) => {
                        return <ProcessCard key={idx} process={item} />
                    })
                }
            </div>
        </CommonSection>
    );
};

export default ProcessesSection;