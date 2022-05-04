import React from 'react'
import Image from 'next/image'
import NavbarDashboard from '../../components/navbar/NavbarDashboard'
import Mesh from '../../public/common/mesh.jpg'
import SidePanel from '../../components/dashboard/sidepanel/SidePanel'
import DashboardDefault from '../../components/dashboard/dashboardDefault/DashboardDefault'

const index = () => {

    return (
        <div className='min-h-screen relative flex'>
            <div className='fixed z-30 w-full'>
                <NavbarDashboard />
            </div>
            {/* <div className='absolute w-full h-full overflow-hidden top-0 left-0'>
                <Image
                    src={Mesh}
                    alt=''
                    layout='responsive'
                />
            </div> */}
            {/* section 1 form */}
            <div className='w-full grow flex'>
                <SidePanel />
                <div className='grow'>
                    <DashboardDefault />
                </div>
            </div>
        </div>
    )
}

export default index