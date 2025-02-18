import Header from '@/components/Header'
import Background from '@/components/Background'
import { Boxes } from '@/components/ui/BackgroundBoxes'
import React from 'react'

const page = () => {
  return (
    <div className='relative'> 
      <Background />
      <Boxes className='absolute top-0 right-0'/>
    </div>
  )
}

export default page