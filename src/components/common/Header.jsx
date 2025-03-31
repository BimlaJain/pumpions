"use client";
import React, { useEffect, useState } from "react";
import { HEADER_LIST, SOCIAL_LINKS } from "../../utils/helper";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <>
            <div className={`z-40  left-0 w-full transition-all duration-300 pt-[30px] px-4 `}>
                <div className=" container max-w-[1140px] relative mx-auto  max-sm:h-[45px] max-lg:h-[76px] w-full bg-cover bg-no-repeat">
                    <Image src="/assets/images/png/header-bg.png" width={10000}
                        height={76.19}
                        className="min-h-[76.19px] absolute w-full max-md:min-h-[56px]" alt="header img"/>
                    <div className={`lg:px-[64px] px-10 max-lg:pl-14 max-sm:pl-10 2xl:pb-6 2xl:pt-[16px]  lg:pt-4 pt-3 md:pb-4 flex items-center justify-between`}>
                        <div className="flex gap-[18px]">
                            <Link href="/">
                                <Image width={41} height={47} src="/assets/images/png/logo.png" alt="logo" className="max-sm:w-[27px] max-sm:h-[31px] relative z-10" />
                            </Link>
                            <ul className="flex items-center gap-8 max-lg:hidden">
                                {HEADER_LIST.map((item, i) => (
                                    <li key={i}>
                                        <Link
                                            href={item.link}
                                            className={`font-normal text-base relative transition-all duration-500 after:content-[''] after:absolute after:left-0 after:top-[19px] after:w-full after:h-[5px] after:bg-[#FFEC37] after:scale-x-0 hover:after:scale-x-100 after:origin-left`}

                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex gap-6 max-lg:hidden relative z-10">
                            {SOCIAL_LINKS.map((link, index) => (
                                <Link key={index} href={link.link}>
                                    <Image src={link.icon} alt={link.alt} width={35} height={35} className="hover:scale-110 transition-all duration-500 ease-linear" />
                                </Link>
                            ))}
                        </div>
                        <div className="lg:hidden z-50 cursor-pointer" onClick={() => setOpen(!open)}>
                            <button className="overflow-hidden relative z-50 lg:hidden size-[30px] h-5 flex flex-col justify-between items-center">
                                <span className={`bg-black rounded-full w-[38px] h-1 block transition-all duration-300 ${open ? "translate-x-10" : ""}`}></span>
                                <span className={`bg-black rounded-full after:rounded-lg  w-[38px] h-1 block relative after:bg-transparent after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:transition-all after:duration-300 transition-all duration-300 ${open ? "rotate-45 after:rotate-90 after:!bg-black" : ""}`}></span>
                                <span className={`bg-black  ml-[10px]  w-[18px]  h-1 block transition-all duration-300 ${open ? "-translate-x-10" : ""}`}></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`w-full h-full bg-white transition-all duration-500 left-0 lg:-top-full z-40 fixed flex gap-5 flex-col justify-center items-center ${open ? "top-0 left-0" : "-top-full"}`}>
                    {HEADER_LIST.map((item, i) => (
                        <a key={i} onClick={() => setOpen(false)} href={item.link} className="font-bold font-source text-base text-black">
                            {item.title}
                        </a>
                    ))}
                    <div className="flex flex-row gap-6 ">
                        {SOCIAL_LINKS.map((link, index) => (
                            <Link key={index} href={link.link} >
                                <Image src={link.icon} alt={link.alt} width={35} height={35} className="hover:scale-110 transition-all duration-500 ease-linear mb-3" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
