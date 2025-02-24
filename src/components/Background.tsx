import React from 'react'
import Header from './Header'
import Image from 'next/image'
import HeroSection from './HeroSection'
import InfiniteAnimation from './InfiniteAnimation'
import BrakingBed from './BreakingBed'
import ContactBarcode from './ContactBarcode'

const Background = () => {
  return (
    <div>
      <div >  
        <Header/>
        <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col p-4 ">
          
          <HeroSection/>
          <ContactBarcode/>
        </div>
      </div>
      <div className="h-[350px] md:h-[400px] xl:h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col px-4 -mt-[7px]">
        <BrakingBed/>
        
      </div>
    </div>
  )
}

export default Background