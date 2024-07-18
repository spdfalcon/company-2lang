import { SocialmediaProps } from '@/app/_types/types'
import Image from 'next/image'
import React from 'react'

const SocialMedia:React.FC<SocialmediaProps> = ({title , bg , iconsm , iconmd}) => {
  return (
    <div className=''>
      <div className={`relative w-[280px] md:w-[330px] h-[60px] md:h-[70px] ps-5 flex items-center  ${bg}  rounded-[18px]`}>
        <span className={`text-sm`} >{title}</span>
        <Image className='-translate-y-5' alt='' src={iconsm} width={90} height={90}></Image>
        <Image className='absolute top-1/2 -translate-y-1/2 -left-3 ' alt='' src={iconmd} width={28} height={28}></Image>
      </div>
    </div>
  )
}

export default SocialMedia
