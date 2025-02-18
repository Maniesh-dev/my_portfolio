"use client";
import React, { useEffect, useRef } from 'react'

const HeroText = () => {
  const FIRST_NAME = 'MANIESH'
  const LAST_NAME = 'SANWAL'
  const randomLetters = 'QWERTYUIOPASDFGH!@#$%^&*JKLZXCVBNM'.split('');
  const FIRST_NAME_ref = useRef<HTMLParagraphElement | null>(null);
  const LAST_NAME_ref = useRef<HTMLParagraphElement | null>(null);
  
  const textAnimate = () => {
    console.log(FIRST_NAME_ref.current)
    console.log(LAST_NAME_ref.current)
    
    FIRST_NAME_ref.current?.childNodes.forEach((letter: any) => {
      letter.style.transform = `rotate(${Math.random() * 20 - 20}deg)`
      letter.style.transition = 'transform 1s'
    })
    LAST_NAME_ref.current?.childNodes.forEach((letter: any) => {
      letter.style.transform = `rotate(${Math.random() * 20 - 20}deg)`
      letter.style.transition = 'transform 1s'  
    })

  }

  useEffect(() => {
    textAnimate()
  }, [])


  return (
    <div className=" font-bold relative flex flex-col justify-center items-center">
      <p ref={FIRST_NAME_ref} className='flex md:-mb-[80px] md:mt-[4%] xl:-mb-[113px] xl:mt-[4.5%] sm:-mb-[55px] sm:mt-[9%] mt-10 -mb-[23px]' >
        {
          FIRST_NAME.split('').map((letter, index) => (
            <span  key={index} className='uppercase heroText md:text-[130px] xl:text-[160px] sm:text-[100px] text-[55px]'>{letter}</span>
          ))
        }
      </p>
      <p className='flex' ref={LAST_NAME_ref}>
        {
          LAST_NAME.split('').map((letter, index) => (
            <span key={index} className='uppercase heroText md:text-[130px] xl:text-[160px] sm:text-[100px] text-[55px]'>{letter}</span>
          ))
        }
      </p>
    </div>
  )
}

export default HeroText