import React from 'react'
import { useRecoilState } from 'recoil';
import { ActiveTabState } from '../../atoms/ActiveTabState';
import { navLinks } from './utils/NavDB'

function NavBar() {
  return (
    <nav className='col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between'>
      <div className='w-full space-y-8'>
        {
          navLinks.slice(0,5).map(((link) => (
            <NavItem link={link} key={link.id} />
          )))
        }
        <div className='w-full border-t border-gray-200' />
        {
          navLinks.slice(5,7).map(((link) => (
            <NavItem link={link} key={link.id} />
          )))
        }
      </div>
    </nav>
  )
}

function NavItem({link}) {

    const [activeNavItem, setActiveNavItem] = useRecoilState(ActiveTabState);
  
    return(
    <div 
      onClick={() => setActiveNavItem(link.id)}
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${activeNavItem === link.id && "border-gray-900"}`}>
      <span>{link.icon}</span>
      <h1 className={`text-gray-600 group-hover:text-black xl:flex hidden ${activeNavItem === link.id && "text-black"}`}>{link.title}</h1>
    </div>
  ) 
}
export default NavBar