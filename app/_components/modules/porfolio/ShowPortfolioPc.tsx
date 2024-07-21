import Image from 'next/image'
import React from 'react'

const ShowPortfolioPc = () => {
  return (
    <div>
      <div className="pc relative">
            <Image className="lg:hidden" alt="" src="/portfolio/pc.png" width={320} height={280}></Image>
            <Image className="hidden lg:block" alt="" src="/portfolio/pclg.png" width={809} height={698}></Image>
            <div className="w-[284px] h-[178px] lg:w-[627px] lg:h-[390px] xl:w-[730px] xl:h-[460px] bg-red-500 absolute top-3 left-5 lg:top-9 lg:left-10 rounded"></div>
          </div>
    </div>
  )
}

export default ShowPortfolioPc
