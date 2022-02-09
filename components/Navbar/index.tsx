import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import NavItem from "./NavItem"

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('')

  const {pathname} = useRouter()

  
  useEffect(() => {
    if(pathname === '/') setActiveItem('About')
    if(pathname === '/projects') setActiveItem('Projects')
    if(pathname === '/contact') setActiveItem('Contact')
    if(pathname === '/resume') setActiveItem('Resume')
  }, []);
  

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className='text-xl font-bold text-green-400 border-b-4 border-green-400 md:text-2x1'>{activeItem}</span>
      <div className='flex space-x-5 text-lg '>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/'/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects'/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Contact' route='/contact'/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume'/>
      </div>
    </div>
  )
}

export default Navbar
