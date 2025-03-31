import { SLIDER_DATA, SLIDER_DATA2 } from '@/utils/helper';
import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';


const LookFamiliar = () => {
  return (
      <div className="bg-[url('/assets/images/png/look-bg.png')] bg-[#203948] bg-cover bg-no-repeat -mt-[140px] lg:pb-[100px] pb-3 relative">
          <div className="container max-w-[1140px] mx-auto px-4">
              <p className='font-normal lg:text-xl text-base text-white md:pb-5 pb-3 text-center  pt-32'>PEAK AT THE SUNSET</p>
              <h3 className='font-normal lg:text-4xl leading-[204%] text-2xl text-white text-center lg:pb-[102px] md:pb-[85px] pb-12'>THEY SURE LOOK FAMILIAR </h3>
          </div>
          <div className="overflow-hidden py-[14px] pb-[30px] max-w-[1920px] mx-auto text-sm  relative">
              <Marquee gradient={false} speed={30} pauseOnHover>
                  {SLIDER_DATA.map((item, index) => (
                      <div key={index} className=" mr-6 flex items-center w-[175px] h-[193px]">
                         <Image  src={item.img} alt={item.alt} width={175} height={193} className='w-[175px] h-[193px]' />
                      </div>
                  ))}
              </Marquee>
          </div>
          <div className="overflow-hidden py-[14px] max-w-[1920px] mx-auto text-smrelative mb-24">
              <Marquee gradient={false} direction='right' speed={30} pauseOnHover>
                  {SLIDER_DATA2.map((item, index) => (
                      <div key={index} className=" mr-6 flex items-center w-[175px] h-[193px]">
                          <Image src={item.img} alt={item.alt} width={175} height={193} className='w-[175px] h-[193px]' />
                      </div>
                  ))}
              </Marquee>
          </div>
          <div className='absolute xl:bottom-[-8%] lg:bottom-[-6%] md:bottom-[-5%] bottom-[4%] '>
              <Image src="/assets/images/png/look-layer.png" alt='look-layer' width={1440} height={147}  />
  </div>
    </div>
  )
}

export default LookFamiliar
