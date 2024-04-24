import Image from 'next/image'
import React from 'react'

export default function BgBlur() {
  return (
    <div className='absolute top-0 left-0 -z-10 w-full overflow-hidden'>
      <Image width={1709} height={2530} className='bg-cover bg-center blur-sm w-full' src="/home/bg.png" alt="" />
      <div className='bg-gradient-to-b from-background/80 from-10% via-background/85 via-30%  to-background to-60%  absolute top-0 left-0 w-full h-full'></div>
    </div>
  )
}
