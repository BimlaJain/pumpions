import React from 'react'
import Image from 'next/image'

const Pumpmap = () => {
  return (
      <div className='lg:pt-[148px] pt-20'>
          <div className="container max-w-[1140px] mx-auto px-4">
              <div className="flex max-lg:flex-wrap justify-between gap-12 items-center">
                  <Image src="/assets/images/png/pumpmap.png" alt='pumpmap' width={407} height={374} className='max-md:w-full flex mx-auto' />
                  <div className="flex flex-col xl:max-w-[699px] lg:max-w-[550px] w-full max-lg:text-center">
                      <h2 className='text-4xl font-normal text-white pb-4'>PUMPMAP</h2>
                      <p className='font-normal md:text-sm text-xs text-white md:leading-[228%] leading-[150%] pb-4'>We want to avoid overpromising from the get go. For that, we are approaching roadmaps slightly differently. Pumpions will continue to evolve overtime as a brand and move closer to its biggest goal. To empower individuals with art.</p>
                      <p className='font-normal md:text-sm text-xs text-white md:leading-[228%] leading-[150%]'> By owning a Pumpion you will have access to a vibrant, positive, and rewarding community, meet like-minded and kind human beings, and most importantly, you will be supporting and celebrating the next generation of artists and animations studios.</p>
                  </div>
              </div>
          </div>
      
    </div>
  )
}

export default Pumpmap
