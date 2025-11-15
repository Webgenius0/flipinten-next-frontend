import FreelancerTaskDetailsAssetsProvided from '@/components/FreelancerDashboardComponents/FreelancerDashboardTasks/FreelancerTaskDetailsAssetsProvided'
import FreelancerTaskDetailsReference from '@/components/FreelancerDashboardComponents/FreelancerDashboardTasks/FreelancerTaskDetailsReference'
import FreelancerTaskDetailsTaskBrief from '@/components/FreelancerDashboardComponents/FreelancerDashboardTasks/FreelancerTaskDetailsTaskBrief'
import React from 'react'

export default function FreelancerDashboardTaskDetails() {

    
  return (
    <div className='w-full grid grid-cols-12  gap-8'>
        <div className='col-span-8'>
          <FreelancerTaskDetailsTaskBrief/>
        </div>
        

        <div className='col-span-4 space-y-6'>
            <FreelancerTaskDetailsAssetsProvided/>  
            <FreelancerTaskDetailsReference/>     
        </div>

    </div>
  )
}
