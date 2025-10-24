import Shield from '@/components/svg/Shield';
import React from 'react';

const HowItWorksCard = ({ item }) => {
    return (
        <div className=' group text-center p-8 shadow-[0_0_16px_0_rgba(134,134,134,0.15)] rounded-2xl border-l-2 hover:bg-primary hover:border-neutral hover:scale-105 hoer:border-neutral transition-all duration-200 border-primary'>
            <div className='max-w-max mx-auto '>
                <Shield />
            </div>
            <h2 className='mt-8 mb-4 text-2xl font-semibold text-color-primary  group-hover:text-neutral transition-colors duration-200 '>
                {item?.label}
            </h2>
            <p className='text-color-secondary group-hover:text-neutral transition-colors duration-200 '>
                {item?.description
                }</p>
        </div>
    );
};

export default HowItWorksCard;