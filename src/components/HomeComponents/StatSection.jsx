import React from 'react';
import LogoIcon from '../svg/LogoIcon';
import { Star } from 'lucide-react';

const StatSection = () => {
    return (
        <div
            className='bg-card '
        >
            <div className='container py-6 mx-auto flex items-center justify-between'>
                <div className='flex items-center gap-12'>
                    {/* logo */}
                    <div className='flex flex-col gap-4'>
                        <LogoIcon size={124} />
                        <p className='text-secondary font-medium text-lg'>Verified Partner</p>
                    </div>

                    {/* ratings  */}
                    <div className='space-y-5'>
                        <div className='flex items-center gap-3'>
                            {
                                [...new Array(5)].map((_, idx) => <Star key={idx} size={32} fill='#FFC700' stroke='0' />)
                            }
                        </div>
                        <p className='text-secondary font-medium text-2xl'>4.9/5 Rating</p>
                    </div>
                </div>



                {/* stats  */}
                <div
                    className='flex items-center'
                >
                    <div className='text-center px-10'>
                        <p className='text-5xl font-semibold '>120+</p>
                        <p>Channels Launched</p>
                    </div>
                    <div className='text-center px-10 border-l border-r'>
                        <p className='text-5xl font-semibold '>$3-$15</p>
                        <p>Avg RPM</p>
                    </div>
                    <div className='text-center px-10'>
                        <p className='text-5xl font-semibold '>98%</p>
                        <p>On-Time Delivery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatSection;