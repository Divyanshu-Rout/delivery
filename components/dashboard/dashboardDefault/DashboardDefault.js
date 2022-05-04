import React from 'react'
import DashboardCards from './dashboardComp/DashboardCards'

const DashboardDefault = () => {
    return (
        <div className='w-full h-full pt-20'>
            <div className='flex flex-wrap px-10'>
                <DashboardCards color={`bg-amber-200`} text={`In transit`} number={`20`} icon={`tick`} />
                <DashboardCards color={`bg-emerald-200`} text={`Completed`} number={`58`} icon={`up-arrow`} />
            </div>
        </div>
    )
}

export default DashboardDefault