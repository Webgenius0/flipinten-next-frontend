import React from 'react'
import FreelancerOverviewEarningSnapshot from './FreelancerOverviewEarningSnapshot'

export default function FreelancerOverviewMiddleContent() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-8'>
          <div>
           <FreelancerOverviewEarningSnapshot/>
          </div>

          <div>
            content-2
          </div>
        </div>
        

        <div className='col-span-4'>
            content-3
        </div>
    </div>
  )
}
