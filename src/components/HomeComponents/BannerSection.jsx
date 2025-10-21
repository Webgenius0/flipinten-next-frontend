import React from 'react';
import CommonSection from '../common/CommonSection';
import Badge from './Badge';
import ButtonArrow from '../common/ButtonArrow';
import BannerVideo from './BannerVideo';

const BannerSection = () => {
    return (
        <CommonSection
            className={'bg-gradient-linear'}
        >
            <div
                className='text-neutral flex flex-col items-center justify-center '
            >
                <Badge>
                    #1 AI Video Generator with Lifelike AI Avatars
                </Badge>

                <h1
                    className='font-semibold text-5xl mt-4 mb-8'
                >
                    Let us build your YouTube empire
                </h1>

                <p
                    className='font-medium text-2xl my-8 max-w-[950px] mx-auto text-center'
                >
                    Invest in channels or buy only the services you need—monetization, growth, and brand deals managed for you.
                </p>

                {/* <BannerVideo /> */}

                <div className='flex items-center gap-8'>
                    <ButtonArrow>
                        Get Started
                    </ButtonArrow>

                    <ButtonArrow variant={'secondary'}>
                        See Plans
                    </ButtonArrow>
                </div>

            </div>
        </CommonSection>
    );
};

export default BannerSection;    