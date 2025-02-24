import Image from 'next/image'
import React from 'react'
import heroImg from '../../public/heroImage.png'
import { ColourfulText } from './ui/colourful-text'

const BreakingBed = () => {

  const FIRST_NAME = 'MANIESH'
  const LAST_NAME = 'SANWAL'
  return (
    <div>
      <p className='hidden md:block z-1 absolute md:top-[50px] md:right-[150px] xl:top-[240px] xl:left-[100px]'>./ Skilled in Both <br />.// Design & Development</p>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      </div>
      <div className=" font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex flex-col justify-center items-center z-0">
      <div className="w-full mt-[125px] flex items-center justify-center relative overflow-hidden tracking-y-[20px] z-0">
        <p className="text-2xl sm:text-4xl md:text-5xl xl:text-7xl lg:text-[85px] font-bold text-center text-white font-sans mt-[73px] md:mt-[40px] xl:mt-[257px] uppercase flex flex-col items-center justify-center gap-[2px] heroText">
          <span>You Know The <ColourfulText text="BUSSINESS" /></span>
          <span><ColourfulText text="&"/> I Know The <ColourfulText text="CHEMISTRY" /></span>
          <span>let's <ColourfulText text="COOK" /> Together.</span>
        </p>
      </div>
        {/* <p className='mt-6 text-gray-700'> - Breaking Bed</p> */}
      </div>
    </div>
  )
}

export default BreakingBed