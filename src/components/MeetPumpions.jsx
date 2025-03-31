import React from 'react'
import Image from 'next/image'

const MeetPumpions = () => {
  return (
      <div id='about' className='bg-[#203948] xl:pt-[150px] lg:pt-[101px] pt-[30px]  -mt-1'>
      <div className="container max-w-[1140px] mx-auto  pb-11 relative">
        <Image
          width={9999}
          height={333}
          src="/assets/images/png/meet-bg.png"
          alt="img bg"
          className="absolute min-h-[333px] w-full max-lg:min-h-[318px] max-md:min-h-[530px]"
        />
        <div className=" w-full max-sm:px-3   bg-no-repeat flex flex-col bg-cover max-md:h-[530px] justify-center items-center py-14 xl:w-[1140px] lg:w-[770px]  xl:h-[333px] h-[318px] mx-auto">
          <h3 className='text-white relative z-10 lg:text-4xl text-2xl max-lg:pb-3 lg:pt-5 font-normal md:leading-[228%] leading-[135%] text-center'>MEET THE PUMPIONS</h3>
          <p className='text-white  text-center relative z-10 xl:max-w-[900px] lg:max-w-[750px] max-w-[700px] lg:text-base text-sm leading-[228%] pb-5'>They’re an exclusive collection of 1,000 utility-enabled (& weirdly familiar) PFPs. Each Pumpion unlocks a sunset club membership, exclusive merch, allowlists, giveaways, raffles and  contributes to supporting artists & animations studios all over the world.</p>
              </div>
          </div>
          <Image src="/assets/images/png/buzzle-layer.png" alt='layer' width={1440} height={194} className='w-full'/>
    </div>
  )
}

export default MeetPumpions
