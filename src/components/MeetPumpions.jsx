import React from 'react'
import Image from 'next/image'

const MeetPumpions = () => {
  return (
      <div className='bg-[#203948] pt-[150px]  -mt-1'>
          <div className="container max-w-[1140px] mx-auto px-4 pb-11">
        <div className="xl:bg-[url('/assets/images/png/meet-bg.png')] md:bg-[url('/assets/images/png/meet.png')] w-full max-sm:px-3 bg-[url('/assets/images/png/meet-sm.png')]   bg-no-repeat flex flex-col bg-cover max-md:h-[530px] justify-center items-center py-14 xl:w-[1140px] lg:w-[770px]  xl:h-[333px] h-[318px] mx-auto">
                  <h3 className='text-white xl:text-4xl md:text-2xl text-xl max-lg:pb-3 font-normal md:leading-[228%] leading-[135%] text-center'>MEET THE PUMPIONS</h3>
          <p className='text-white  text-center xl:max-w-[900px] lg:max-w-[750px] max-w-[700px] lg:text-base text-sm leading-[228%] pb-5'>They’re an exclusive collection of 1,000 utility-enabled (& weirdly familiar) PFPs. Each Pumpion unlocks a sunset club membership, exclusive merch, allowlists, giveaways, raffles and  contributes to supporting artists & animations studios all over the world.</p>
              </div>
          </div>
          <Image src="/assets/images/png/buzzle-layer.png" alt='layer' width={1440} height={194} className='w-full'/>
    </div>
  )
}

export default MeetPumpions
