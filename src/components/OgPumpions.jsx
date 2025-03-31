"use client"
import { OG_PUMPIONS_DATA } from '@/utils/helper';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const OgPumpions = () => {
    return (
        <div id='team' className='lg:pt-[183px] md:pt-[130px] pt-[66px]'>
            <div className="container max-w-[1140px] mx-auto px-4">
                <h2 className='lg:text-[32px] text-2xl font-normal lg:pb-20 md:pb-[75px] pb-[30px] text-center text-white'>OG PUMPIONS</h2>

                <div className='block sm:hidden'>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1.5}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={[Pagination, Autoplay]}
                    >
                        {OG_PUMPIONS_DATA.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className='text-center max-sm:pb-16'>
                                    <Image src={item.img} alt={item.alt} width={item.width} height={item.height} className='w-[226px] h-[206px] mx-auto' />
                                    <h3 className='text-2xl font-normal leading-[202%] text-white pt-[31px]'>{item.title}</h3>
                                    <p className='text-base font-normal leading-[202%] text-white'>{item.work}</p>
                                    <div className="flex gap-[11px] justify-center items-center pt-4">
                                        <Link href="https://discord.com/">
                                            <Image src="/assets/images/svg/orange-discord.svg" alt='discord' width={35} height={35} className="hover:scale-110 transition-all duration-500 ease-linear" />
                                        </Link>
                                        <Link href="https://x.com/?lang=en">
                                            <Image src="/assets/images/svg/orange-twitter.svg" alt='twitter' width={35} height={35} className="hover:scale-110 transition-all duration-500 ease-linear" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='hidden sm:flex flex-wrap lg:justify-between max-sm:gap-8 items-center justify-center'>
                    {OG_PUMPIONS_DATA.map((item, i) => (
                        <div key={i} className={`max-lg:mb-12 ${i % 2 === 0 ? 'max-lg:mr-[141px] max-md:mr-0' : 'max-lg:mr-0'}`}>
                            <Image src={item.img} alt={item.alt} width={item.width} height={item.height} className='w-[226px] h-[206px] pointer-events-none' />
                            <h3 className='text-2xl font-normal leading-[202%] text-white text-center pt-[31px]'>{item.title}</h3>
                            <p className='text-base font-normal leading-[202%] text-white text-center'>{item.work}</p>
                            <div className="flex gap-[11px] mx-auto justify-center items-center pt-4">
                                <Link href="https://discord.com/">
                                    <Image src="/assets/images/svg/orange-discord.svg" alt='discord' width={35} height={35} className="hover:scale-110 transition-all duration-500 ease-linear" />
                                </Link>
                                <Link href="https://x.com/?lang=en">
                                    <Image src="/assets/images/svg/orange-twitter.svg" alt='twitter' width={35} height={35} className="hover:scale-110 transition-all duration-500 ease-linear" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[url('/assets/images/png/Button-bg.png')] max-sm:mt-7 hover:scale-110 transition-all duration-500 ease-linear md:mt-[61px] cursor-pointer w-[254px] h-[69px] bg-no-repeat flex mx-auto justify-center items-center">
                    WE ARE HIRING
                </div>
            </div>
        </div>
    );
};

export default OgPumpions;
