import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_SOCIAL_ICONS } from '@/utils/helper'

const Footer = () => {
  return (
      <div className="bg-[url('/assets/images/png/footer-bg.png')] bg-no-repeat bg-center bg-cover md:pt-[182px] pt-[49px] pb-[55px]">
          <div className="container max-w-[1140px] mx-auto px-4">
              <Link href="#">
                  <Image src="/assets/images/png/hero-heading.png" alt='footer-text' width={322} height={81} className='flex mx-auto max-sm:w-[193px] max-sm:h-[42px]' />
              </Link>
              <p className='font-normal md:text-xs text-[8px] leading-[202%] text-white/70 max-w-[425px] mx-auto text-center max-sm:max-w-[198px] mx-auto'>Suspendisse vestibulum a tellus sit amet mattis</p>
              <div className="flex md:gap-[11px] gap-[5px] mx-auto justify-center pt-6">
                  {FOOTER_SOCIAL_ICONS.map((item, i) => (
                      <div key={i}>
                          <Link href={item.link} target="_blank">
                              <Image src={item.icon} alt={item.alt} width={35} height={35} className="hover:scale-110 transition-all duration-500 ease-linear max-sm:size-[15px]" /></Link>
                      </div>
                  ))}
             </div>

        </div>
    </div>
  )
}

export default Footer
