import Image from 'next/image'
import heroImg from '../../public/heroImage.png'
import HeroText from './HeroText'
import CreativeText from './CreativeText'
import InfiniteAnimation from './InfiniteAnimation'

const HeroSection = () => {

  return (
    <div className='overflow-hidden px-2'>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      </div>
      <HeroText/>
      <InfiniteAnimation/>
      <div>
        <Image src={heroImg} alt='Maniesh Sanwal' className='absolute -left-[160px] bottom-[75px] sm:bottom-[95px] sm:-left-[35px] xl:-bottom-[281px] xl:left-[320px] max-w-96 z-10 imgGradient'/>
      </div>
      <div className='absolute text-right md:w-[390px] md:bottom-[50px] md:right-[30px] xl:text-left xl:w-[400px] xl:-bottom-[300px] xl:right-[110px] right-[25px] -bottom-[80px] z-10 text-gray-400 font-medium'>
        <p className='mb-32'>M./</p>
        <p className='absolute top-[75px] right-0 md:hidden text-[#C14600] font-semibold'>./ Skilled in Both <br />.// Design & Development</p>
        <CreativeText/>
        <p className='mb-10 '>
          "With a strong focus on creative development, digital stories are crafted to engage. Expertise in interactive animations and detailed design enables the creation of websites that stand out and leave a lasting impact."
        </p>
        <p className='mb-10'>
          "Specializing in impressive online experiences, clients receive tailored solutions to elevate their digital presence. Each project aims to capture attention and engage audiences effectively."
        </p>
        <p className='mb-10 w-full'>
          "By delivering unique and impressive websites, clients can confidently showcase their brand and communicate in the digital space. Every vision deserves to shine online, and that’s the goal."
        </p>
      </div>
    </div>
  )
}

export default HeroSection