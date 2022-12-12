import React from 'react'

function PortfolioItem({ item }) {
    const { title, desc, icon } = item;
  return (
    <div className='w-full items-center justify-center flex bg-white shadow-2xl shadow-gray-200 py-2 px-2'>
        {/* icon+text */}
        <div className='w-full items-center justify-center flex space-x-4'>
            <div className='bg-[#DBEEF4] rounded-full py-2 px-2'>
                <span> { icon }</span>
            </div>
            <div className='w-full space-y-1'>
                <h1 className='font-bold'>{ title }</h1>
                <p className='text-xs'>{ desc }</p>
            </div>
        </div>
    </div>
  )
}

export default PortfolioItem