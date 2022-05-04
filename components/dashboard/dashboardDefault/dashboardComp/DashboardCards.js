import React from 'react'
import { MdDoneAll } from 'react-icons/md'
import { ImArrowUpRight2 } from 'react-icons/im'

const DashboardCards = ({ color, number, text, icon }) => {

    return (
        <div className={`w-[150px] h-[100px] px-[13px] py-[10px] rounded-xl ${color} mx-10 text-[#3a3a3c]`}>
            <div className='w-full flex justify-between items-center '>
                <div className='text-[30px] font-semibold'>{number}</div>
                {icon === 'tick' ? <MdDoneAll /> : <ImArrowUpRight2 />}
            </div>
            <div>{text}</div>
        </div>
    )
}

export default DashboardCards