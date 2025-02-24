'use client'

import Link from 'next/link'
import React, { useRef } from 'react'
// import * motion from "motion/react-client"

const Navbar = () => {
  const eleRef = useRef(null)
  const linkAnimation = () => {
    const link = eleRef.current
    console.log(link)
  }
  return (
    <nav onClick={linkAnimation} ref={eleRef} className="fixed top-6 left-1/2 -translate-x-1/2 text-center border rounded-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 items-center justify-between px-4 py-2 gap-4 hidden md:flex">
      <Link href='/' className='border-r pr-3 uppercase text-sm hover:underline decoration-orange-900 hover:text-orange-700'>Index</Link>
      <Link href='/work' className='border-r pr-3 uppercase text-sm hover:underline decoration-orange-900 hover:text-orange-700'>Work</Link>
      <Link href='/about' className='border-r pr-3 uppercase text-sm hover:underline decoration-orange-900 hover:text-orange-700'>About</Link>
      <Link href='/contact' className='uppercase text-sm hover:underline decoration-orange-900 hover:text-orange-700 '>Contact</Link>
    </nav>
  )
}

export default Navbar