import React from 'react'
import Header from './common/Header'
import Image from 'next/image'

const Hero = () => {
  return (
      <div id='home' className="bg-[url('/assets/images/png/hero-bg.png')] bg-cover bg-no-repeat bg-center lg:h-[853px] md:h-[641px] h-[444px] relative overflow-hidden">
          <Header />
          <div className='absolute lg:left-[1%] md:-left-[10%] -left-[35%] lg:top-[18%]'>
              <Image src="/assets/images/png/left-cloud.png" alt='left-cloud' width={166} height={85} />
              </div>
          <div className='absolute lg:right-[1%] md:-right-[3%] -right-[30%] lg:top-[18%] top-[16%] '> 
              <Image src="/assets/images/png/right-cloud.png" alt='left-cloud' width={166} height={85}/>
          </div>
          <div className="container max-w-[1140px] mx-auto px-4">
              <Image src="/assets/images/png/hero-heading.png" alt='hero-heading' width={899} height={225} className='xl:max-w-[899px] md:max-w-[612px] max-w-[282px] pb-[26px] mx-auto pt-[71px]' />
              <p className='font-regular text-xl text-center'>Own, support & celebrate art.</p>
              <div className="bg-[url('/assets/images/png/Button-bg.png')] md:text-base cursor-pointer hover:scale-110 transition-all duration-500 ease-linear text-xs bg-cover mt-[58px] w-[254px] max-sm:w-[188px] max-sm:h-[51px] h-[69px] bg-no repeat flex mx-auto justify-center items-center">
                 GET STARTED
              </div>
       </div>
      
    </div>
  )
}

export default Hero
