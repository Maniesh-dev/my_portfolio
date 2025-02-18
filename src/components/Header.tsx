import React from 'react'
import Navbar from './Navbar'
import { InstagramIcon, LinkedinIcon, LucideGithub } from 'lucide-react'
import MobileNavbar from './MobileNavbar'

const Header = () => {
  return (
    <div className='absolute z-20 flex justify-between w-full p-4 md:p-8 items-center'>
      <div>Maniesh Sanwal</div>
      <Navbar/>
      <div className='hidden md:flex gap-4'>
        <InstagramIcon size={24} />
        <LinkedinIcon size={24} />
        <LucideGithub size={24} />
      </div>
      <MobileNavbar/>
    </div>
  )
}

export default Header