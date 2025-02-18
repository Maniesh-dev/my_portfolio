import { PlusIcon } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'



const InfiniteAnimation = () => {
  return (
    <div className=' mt-[15px] md:-mt-[15px] xl:-mt-[33px] flex overflow-hidden'>
      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-3'>
          <p>Developer</p>
          <PlusIcon size={16} />
          <p>Creative</p>
          <PlusIcon size={16} />
          <p>Designer</p>
          <PlusIcon size={16} />
        </div>
        <div className='flex items-center gap-3'>
          <p>Developer</p>
          <PlusIcon size={16} />
          <p>Creative</p>
          <PlusIcon size={16} />
          <p>Designer</p>
          <PlusIcon size={16} />
        </div>
        <div className='flex items-center gap-3'>
          <p>Developer</p>
          <PlusIcon size={16} />
          <p>Creative</p>
          <PlusIcon size={16} />
          <p>Designer</p>
          <PlusIcon size={16} />
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-3'>
          <p>Developer</p>
          <PlusIcon size={16} />
          <p>Creative</p>
          <PlusIcon size={16} />
          <p>Designer</p>
          <PlusIcon size={16} />
        </div>
        <div className='flex items-center gap-3'>
          <p>Developer</p>
          <PlusIcon size={16} />
          <p>Creative</p>
          <PlusIcon size={16} />
          <p>Designer</p>
          <PlusIcon size={16} />
        </div>
        <div className='flex items-center gap-3'>
          <p>Developer</p>
          <PlusIcon size={16} />
          <p>Creative</p>
          <PlusIcon size={16} />
          <p>Designer</p>
          <PlusIcon size={16} />
        </div>
      </div>
    </div>
  )
}

export default InfiniteAnimation