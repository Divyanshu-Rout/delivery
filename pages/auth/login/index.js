import Link from 'next/link';
import React, { useState as UseState, useEffect } from 'react'

const index = () => {

    const [email, setEmail] = UseState('');
    const [password, setPassword] = UseState('');
    const [adminLogin, setAdminLogIn] = UseState(false);

    const inputFeild = `transition duration-500 border-2 rounded-[5px] border-[rgba(0, 0, 0, 0.2)] bg-[#FAFBFE]  w-[340px] lg:w-full xl:w-full my-4 placeholder-[#3a3a3c] focus:placeholder-gray-800/50  xl:text-[14px] text-[12px]  p-2 focus:outline-none focus:border-gray-800/60  placeholder-[10px] focus:shadow-lg`

    const cta = 'w-[180px] py-3 bg-dark rounded-[5px] text-white transition duration-300 hover:scale-105'

    return (
        <div className={`min-h-screen bg-slate-300 flex items-center justify-center `}>
            <form className='w-[350px] bg-white rounded-[5px] px-4 py-10 shadow-xl'>
                {!adminLogin ? <div className='w-full flex justify-center'>EMPLOYEE LOG IN</div> : <div className='w-full flex justify-center'>ADMIN LOG IN</div>}
                <input
                    className={inputFeild}
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    placeholder='email*'
                    required
                />
                <input
                    className={inputFeild}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    placeholder='password*'
                    required
                />
                <Link href={'/dashboard'} passHref >
                    <div className='w-full flex justify-center'>
                        <button className={cta} type='submit'>LOG IN</button>
                    </div>
                </Link>
                {!adminLogin ? <div className='w-full pt-4 flex justify-center underline transition duration-300 hover:scale-105 hover:font-semibold cursor-pointer '>
                    <button onClick={() => setAdminLogIn(true)}>admin log in</button>
                </div> : <div className='w-full pt-4 flex justify-center underline transition duration-300 hover:scale-105 hover:font-semibold cursor-pointer '>
                    <Link href={`/dashboard`} passHref>
                        <button onClick={() => setAdminLogIn(false)}>
                            employee log in
                        </button>
                    </Link>
                </div>}
            </form>
        </div>
    )
}

export default index