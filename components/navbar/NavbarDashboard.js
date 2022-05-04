import React from 'react'
import { FaRegUserCircle, FaStream } from 'react-icons/fa'
import common from '../../styles/Common.module.css'

const NavbarDashboard = () => {
    return (
        <div className={`w-full bg-dark h-[60px] px-20 flex justify-between`}>
            <div className=' flex items-center'>
                <div className={`pr-20 text-[20px] text-white ${common.joshefinSans}`}>
                    PROJECT
                </div>
                <FaStream size={25} color='white' />
            </div>
            <div className='h-full flex items-center'>
                <div className='flex items-center cursor-pointer hover:scale-105'>
                    <FaRegUserCircle size={30} color='white' />
                    <div className={`pl-2 text-[20px] text-white ${common.joshefinSans}`}>
                        profile
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarDashboard