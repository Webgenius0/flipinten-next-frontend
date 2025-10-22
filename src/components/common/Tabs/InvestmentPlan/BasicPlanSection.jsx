import planData from '@/data/plandata';
import React from 'react';

const BasicPlanSection = () => {
    console.log(planData);
    return (
        <div className='text-secondary p-8 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-3xl'>
            <p className='text-color-primary text-lg font-medium mb-6'>{planData?.plan}</p>
            <div className='flex items-center justify-between mb-9'>
                <p className='text-2xl font-semibold'>Total Cost:</p>
                <p className='font-semibold text-3xl'>{planData?.totalCost}</p>
            </div>


            <div>
                {
                    planData?.planInfo?.map(info => {
                        console.log(info);
                        return (
                            <div className='border-b border-neutral40 py-2 flex items-center justify-between'>
                                <p className='text-lg'>{info?.label}:</p>
                                <p className='text-lg font-medium'>{info?.info}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default BasicPlanSection;