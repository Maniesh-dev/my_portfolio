"use client";
import React, { useEffect, useRef, useState } from 'react'
import * as motion from "motion/react-client"
import localFont from 'next/font/local';

const torwelten = localFont({ src: '../fonts/TorweltenMono.ttf' });

const HeroText = () => {
  const FIRST_NAME = 'MANIESH'
  const LAST_NAME = 'SANWAL'
  const randomLetters = 'QWERTYUIOPASDFGH!@#$%^&*JKLZXCVBNM'.split('');
  const FIRST_NAME_ref = useRef<HTMLParagraphElement>(null);
  const LAST_NAME_ref = useRef<HTMLParagraphElement>(null);
  
  const textAnimate = () => {
    
    let iteration = 0
    const interval = setInterval(() => {
      FIRST_NAME_ref.current?.childNodes.forEach((letter: any) => {
        letter.innerText = randomLetters[Math.floor(Math.random() * randomLetters.length)];
      })
      LAST_NAME_ref.current?.childNodes.forEach((letter: any) => {
        letter.innerText = randomLetters[Math.floor(Math.random() * randomLetters.length)];
      })
      iteration++
      if (iteration >= 30) {
        clearInterval(interval)
        FIRST_NAME_ref.current?.dataset.value && 
        (FIRST_NAME_ref.current.innerHTML = FIRST_NAME_ref.current.dataset.value)
        LAST_NAME_ref.current?.dataset.value && 
        (LAST_NAME_ref.current.innerHTML = LAST_NAME_ref.current.dataset.value)
        // textRotate()
      }
    }, 30)

    
    
  }

  // const textRotate = () => {
  //   FIRST_NAME_ref.current?.childNodes.forEach((letter: any) => {
  //     letter.style.transform = `rotate(${Math.random() * 20 - 20}deg)`
  //     letter.style.transition = 'transform 1s'
  //   })
  //   LAST_NAME_ref.current?.childNodes.forEach((letter: any) => {
  //     letter.style.transform = `rotate(${Math.random() * 20 - 20}deg)`
  //     letter.style.transition = 'transform 1s'  
  //   })
  // }

  useEffect(() => {
    textAnimate()
    // textRotate()
  }, [])


  return (
    <div className="h-[180px] sm:h-[340px] xl:h-[372px] flex justify-center items-center flex-col gap-4" onMouseEnter={textAnimate}>
      <p ref={FIRST_NAME_ref} className={`${torwelten.className} text-4xl sm:text-6xl md:text-8xl`} data-value={FIRST_NAME}>
        {
          FIRST_NAME.split('').map((letter, index) => (
            <span  key={index} className='uppercase'>{letter}</span>
          ))
        }
      </p>
      <p className={`${torwelten.className} text-4xl sm:text-6xl md:text-8xl`} ref={LAST_NAME_ref} data-value={LAST_NAME}>
        {
          LAST_NAME.split('').map((letter, index) => (
            <span key={index} className='uppercase'>{letter}</span>
          ))
        }
      </p>
    </div>
  )
}

export default HeroText