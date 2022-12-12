import React from 'react'
import InvestItem from './InvestItem'
import { InvestDB } from './utils/InvestmentDB'

function LeftPart() {
  return (
    <div className='w-full col-span-2 min-h-[90vh] border-r border-gray-200 items-start justify-start flex flex-col'>
        {/* Top Section */}
            <div className='w-full items-start justify-start flex flex-col px-12 pt-12 pb-6'>
                <h1 className='font-bold text-xl xl:text-2xl pb-2'>Muhammad Saad Virk</h1>
                <p className='text-md text-gray-800'>Find all of your completed jobzzz information here!</p>
                <div className='w-full items-start justify-start flex flex-col px-6 pt-8 pb-4 bg-[#89F887] mt-6'>
                    <h1 className='font-bold'>Jobzzz Completed</h1>
                    <h1 className='text-3xl xl:text-5xl font-bold py-6'>Total: 663</h1>
                </div>
                <div className='w-full bg-black py-4 px-8 items-start justify-between flex shadow-2xl shadow-emerald-200'>
                    <span className='items-start justify-start text-white flex flex-col'>
                        <h3>Click <span className='cursor-pointer hover:underline'>here</span> to see all jobzzz!</h3>
                    </span>
                </div>
            </div>
        {/* Bottom Section */}
        <div className='w-full items-start justify-start flex flex-col px-12 py-6'>
            <h1 className='font-bold text-xl xl:text-2xl pb-2'>
                Recently Finished Jobzzz
            </h1>
            <div className='w-full space-y-5 overflow-y-auto max-h-[350px] py-6 scrollbar-hide'>
                {InvestDB.map((item) => (
                    <InvestItem item={item} key={item.id} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default LeftPart