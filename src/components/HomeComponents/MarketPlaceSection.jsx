import React from 'react';
import CommonSection from '../common/CommonSection/CommonSection';
import SectionHeading from '../common/CommonSection/SectionHeading';
import marketplaceImage from '@/components/assets/images/marketplace.png'
import Image from 'next/image';
import YoutubeStudio from '../svg/YoutubeStudio';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const MarketPlaceSection = () => {
    return (
        <CommonSection
            className={'relative'}
        >
            <SectionHeading
                title={'Marketplace'}
                subtitle={'Connect creators with investors and advertisers in our thriving marketplace'}
                className={'text-left'}
            />

            <div className='flex  justify-between'>
                <div className='space-y-9'>
                    <div className='p-6 flex items-start gap-6'>
                        <div className='bg-card p-8 rounded-full'>
                            <YoutubeStudio />
                        </div>
                        <div>
                            <h3 className='text-secondary font-semibold text-2xl'>For Creators</h3>
                            <p className='font-medium text-lg text-neutral90 mt-2 mb-6'>List your channel and  earn from endorsements</p>
                            <Button
                                className={'w-50'}
                            >
                                List Channel
                            </Button>
                        </div>
                    </div>

                    <div className='p-6 flex items-start gap-6'>
                        <div className='bg-card p-8 rounded-full'>
                            <YoutubeStudio />
                        </div>
                        <div>
                            <h3 className='text-secondary font-semibold text-2xl'>For Advertisers</h3>
                            <p className='font-medium text-lg text-neutral90 mt-2 mb-6'>Book campaigns with top creators</p>
                            <Button
                                className={'w-50'}
                            >
                                Book campaigns
                            </Button>
                        </div>
                    </div>

                </div>
                <Image
                    className='absolute right-55 top-30'
                    src={marketplaceImage}
                    alt='marketplace'
                />
                <Image
                    className='z-1 border-12 border-neutral rounded-[40px]'
                    src={marketplaceImage}
                    alt='marketplace'
                />
            </div>

            <div className='flex justify-center mt-12'>
                <Button>
                    See all
                    <ArrowRight />
                </Button>
            </div>
        </CommonSection>
    );
};

export default MarketPlaceSection;