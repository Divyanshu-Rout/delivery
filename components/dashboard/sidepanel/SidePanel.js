import React from 'react'
import common from '../../../styles/Common.module.css'
import { GiClover } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { BiStats } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'


const SidePanel = () => {

    //styles
    const sideTextStyle = `${common.joshefinSans} text-[20px] w-full text-center text-white cursor-pointer transition duration-300 hover:font-semibold hover:scale-105 py-4 px-16 flex justify-between items-center`

    return (
        <div className='w-[300px]  h-full bg-dark flex flex-col pt-20'>
            <div className={sideTextStyle}>
                <GiClover />
                <div>dashboard</div>
            </div>
            <div className={sideTextStyle}>
                <AiOutlineSearch />
                <div>search</div>
            </div>
            <div className={sideTextStyle}>
                <CgProfile />
                <div>users</div>
            </div>
            <div className={sideTextStyle}>
                <BiStats />
                <div>statistics</div>
            </div>

        </div>
    )
}

export default SidePanel