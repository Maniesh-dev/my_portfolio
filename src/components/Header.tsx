import React from 'react'
import Navbar from './Navbar'
import { InstagramIcon, LinkedinIcon, LucideGithub } from 'lucide-react'
import MobileNavbar from './MobileNavbar'
import Image from 'next/image'
import logo from '../app/msText.png'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='absolute z-20 flex justify-between w-full p-4 md:p-8 items-center'>
      <div className='flex items-center gap-4'>
        <Image src={logo} alt='Maniesh Sanwal' className='w-[50px]'/> <p className='hidden xl:block h-full'>|</p>
        <p className='font-bold hidden xl:block text-gray-600'> Web Designer + Full Stack Developer</p>
      </div>
      <Navbar/>
      <div className='hidden md:flex gap-4'>
        <Link href='https://www.instagram.com/chaisuttacode/' target='_blank'>
          <InstagramIcon size={24} />
        </Link>
        <Link href='https://www.linkedin.com/in/manieshsanwal/' target='_blank'>
          <LinkedinIcon size={24} />
        </Link>
        <Link href='https://github.com/Maniesh-dev' target='_blank'>
          <LucideGithub size={24} />
        </Link>
      </div>
      <MobileNavbar/>
    </div>
  )
}

export default Header
        