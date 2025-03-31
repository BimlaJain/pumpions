import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_SOCIAL_ICONS } from '@/utils/helper'

const Footer = () => {
  return (
      <div className="bg-[url('/assets/images/png/footer-bg.png')] bg-no-repeat bg-center bg-cover md:pt-[182px] pt-[49px] pb-[55px]">
          <div className="container max-w-[1140px] mx-auto px-4">
              <Link href="#">
                  <Image src="/assets/images/png/hero-heading.png" alt='footer-text' width={322} height={81} className='flex mx-auto' />
              </Link>
              <p className='font-normal text-xs leading-[202%] text-white/70 max-w-[425px] mx-auto text-center'>Suspendisse vestibulum a tellus sit amet mattis</p>
              <div className="flex gap-[11px] mx-auto justify-center pt-6">
                  {FOOTER_SOCIAL_ICONS.map((item, i) => (
                      <div key={i}>
                          <Link href={item.link}>
                              <Image src={item.icon} alt={item.alt} width={35} height={35} className="hover:scale-110 transition-all duration-500 ease-linear" /></Link>
                      </div>
                  ))}
             </div>

        </div>
    </div>
  )
}

export default Footer
