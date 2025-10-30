import useCaseStudiesTrackData from '@/hooks/landingPageHooks/useCaseStudiesTrackData'
import React from 'react'

export default function CasestudiesTrackCard() {
    const stats = useCaseStudiesTrackData();
    console.log(stats);
  return (
    <div className='w-full flex items-center justify-between'>
       {
        stats?.map((info, idx) => <div className='w-full space-y-3'>
            <h3 className="text-brand-primary font-semibold text-4xl" >
                {info?.value}</h3>
            <p className="text-neutral200 tex-2xl">
                {info?.label}</p>
        </div>)
       }
    </div>
  )
}
