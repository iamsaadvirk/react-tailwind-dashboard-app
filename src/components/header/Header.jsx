import React from 'react'
import { BellIcon, ChipIcon, InboxIcon, LogoutIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <div className='bg-[#f0f5f5] w-full py-4 items-center justify-between flex px-12'>
        {/* Search */}
        
        <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-1'>
            {/* Icon */}
            <SearchIcon className='w-4 h-4' />
            <input type='text' placeholder='Search anything..' className='bg-transparent outline-none' />
        </div>
        {/* Logo */}
        <div className='w-full items-center justify-center flex space-x-4'>
            <ChipIcon className='w-6 h-6'/>
            <h1 className='text-xl text-gray-900 font-medium'>Jobzzz</h1>
        </div>
        {/* Top Menu Icons */}
        <div className='w-full items-center justify-end space-x-6 flex'>
            <BellIcon className='header-icon'/>
            <InboxIcon className='header-icon'/>
            <UserCircleIcon className='header-icon'/>
            <LogoutIcon className='header-icon'/>
        </div>
    </div>
  )
}

export default Header