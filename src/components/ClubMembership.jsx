"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { CLUB_DATA, CLUB_DATA2 } from '@/utils/helper'

const ClubMembership = () => {
    return (
        <div id='roadmap' className='bg-[#28424F] max-sm:-mt-[54px] relative z-10 overflow-hidden max-w-[1440px] mx-auto'>
            <p className='font-normal md:text-xl text-base text-white pb-5 text-center pt-24'>Community + Funding + Sunset</p>
            <h3 className='font-normal lg:text-4xl text-2xl text-white text-center lg:pb-[125px] pb-8 leading-[204%]'>SUNSET CLUB MEMBERSHIP PERKS</h3>

            <div className="flex max-lg:flex-wrap lg:justify-between justify-center lg:gap-10 items-center">
                <div className='md:w-[892px] md:h-[381px] w-[366px] h-[181px] pl-4 max-md:pb-12 max-lg:px-4'>
                    <Image src="/assets/images/png/sunsetclub.png" alt='sunset club' width={831} height={381} className='w-full h-full pointer-events-none' />
                </div>
                <div className="block md:hidden w-full max-w-[366px]">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1.2}
                        loop = {true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={[Pagination, Autoplay]}
                    >
                        {[...CLUB_DATA, ...CLUB_DATA2].map((item, i) => (
                            <SwiperSlide key={i} className='!w-[181px]   mb-12'>
                                <div className="flex !w-[181px] h-[200px] flex-col justify-center p-6 items-center bg-[url('/assets/images/png/border.png')]  bg-cover bg-no-repeat group">
                                    <Image src={item.img} alt={item.alt} width={item.width} height={item.height} />
                                    <h3 className='text-xs font-normal pt-[18px] text-center group-hover:text-white'>{item.title}</h3>
                                    <p className='text-[6px] leading-[204%] font-normal pt-1 text-center group-hover:text-white'>{item.discription}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='hidden md:flex flex-col gap-2 justify-center items-center lg:mr-auto px-4'>
                    <div className="flex gap-2">
                        {CLUB_DATA.map((item, i) => (
                            <div key={i} className='flex  gap-2 justify-between items-center overflow-hidden group'>
                                <div className="flex w-[181px] h-[200px] flex-col justify-center p-6 items-center transition-all duration-500 ease-linear bg-[url('/assets/images/png/border.png')] bg-cover  group-hover:bg-[url('/assets/images/png/border-orange.png')] bg-no-repeat">
                                    <Image src={item.img} alt={item.alt} width={item.width} height={item.height} className='pointer-events-none'/>
                                    <h3 className='text-xs font-normal pt-[18px] text-center group-hover:text-white'>{item.title}</h3>
                                    <p className='text-[6px] leading-[204%] font-normal pt-1 text-center group-hover:text-white'>{item.discription}</p>
                                </div>
                          </div>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        {CLUB_DATA2.map((item, i) => (
                            <div key={i} className='flex  gap-2 justify-between items-center overflow-hidden group '>
                                <div className="flex w-[181px] h-[200px] flex-col justify-center p-6 items-center transition-all duration-500 ease-linear bg-[url('/assets/images/png/border.png')] group-hover:bg-[url('/assets/images/png/border-orange.png')] bg-cover bg-no-repeat">
                                    <Image src={item.img} alt={item.alt} width={item.width} height={item.height} className='pointer-events-none' />
                                    <h3 className='text-xs font-normal pt-[18px] text-center group-hover:text-white'>{item.title}</h3>
                                    <p className='text-[6px] leading-[204%] font-normal pt-1 text-center group-hover:text-white'>{item.discription}</p>
                                </div>
                           </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClubMembership;
