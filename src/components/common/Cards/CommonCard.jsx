import { Button } from '@/components/ui/button';
import { CircleQuestionMark } from 'lucide-react';
import React from 'react';

const CommonCard = ({ data, Icon=CircleQuestionMark }) => {
    return (
        <div
            className='space-y-6 bg-neutral text-secondary p-10 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] rounded-3xl'
        >
            <div className='space-y-4 flex flex-col items-center'>
                <div className='bg-card p-5 rounded-full max-w-max'>
                    <Icon className='text-primary' size={24} />
                </div>

                <p className='text-color-primary font-medium text-lg'>{data?.title}</p>
                <p className='text-3xl font-semibold text-color-primary'>{data?.price}
                    <span className='text-lg text-neutral400 font-normal'>/{data?.period}</span></p>
            </div>

            <ul className='space-y-2'>
                {
                    data?.features?.map((feature, idx) => {
                        return <li key={idx} className='list-disc list-inside'>{feature}</li>
                    })
                }
            </ul>

            <Button className={'w-full'}>
                Get Started
            </Button>
        </div>
    );
};

export default CommonCard;