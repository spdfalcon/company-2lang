import Image from 'next/image'
import React from 'react'

const ShowPortfolioMobile = () => {
  return (
    <div>
      <div className="mobile relative">
            <Image className="lg:hidden" alt="" src="/portfolio/mobile.png" width={195} height={398}></Image>
            <Image className="hidden lg:block" alt="" src="/portfolio/mobilelg.png" width={329} height={670}></Image>
            <div className="w-[171px] h-[303px] lg:w-[245px] lg:h-[435px] xl:w-[290px] xl:h-[520px]  bg-red-500 absolute top-11 lg:top-16 left-3 lg:left-5 rounded"></div>
          </div>
    </div>
  )
}

export default ShowPortfolioMobile
