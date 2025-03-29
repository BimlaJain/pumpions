"use client";
import React, { useEffect, useState } from "react";
import { HEADER_LIST} from "../../utils/helper";
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
                <div className=" container w-[1140px] mx-auto bg-[url('/assets/images/png/header-bg.png')] w-full bg-cover bg-no-repeat">
                    <div className={`lg:px-[64px] px-10  pt-5 pb-4 flex items-center justify-between`}>
                        <div className="flex gap-[18px]">
                            <Link href="/">
                                <Image width={41} height={47} src="/assets/images/png/logo.png" alt="logo" />
                            </Link>
                            <ul className="flex items-center gap-8 max-lg:hidden">
                                {HEADER_LIST.map((item, i) => (
                                    <li key={i}>
                                        <Link
                                            href={item.link}
                                            className={`font-normal text-base hover:underline transition-all duration-300`}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex gap-6 max-lg:hidden">
                            <Link href="/">
                                <Image src="/assets/images/svg/discord.svg" alt="discord" width={35} height={35}/>
                            </Link>
                            <Link href="/">
                                <Image src="/assets/images/svg/twitter.svg" alt="discord" width={35} height={35} />
                            </Link>
                            <Link href="/">
                                <Image src="/assets/images/svg/magic-eden.svg" alt="discord" width={35} height={35} />
                            </Link>
                        </div>
                        <div className="lg:hidden z-50 cursor-pointer" onClick={() => setOpen(!open)}>
                            <button className="overflow-hidden relative z-50 lg:hidden size-[30px] h-5 flex flex-col justify-between items-center">
                                <span className={`bg-black rounded-full w-[39px] h-1 block transition-all duration-300 ${open ? "translate-x-10" : ""}`}></span>
                                <span className={`bg-black rounded-full after:rounded-lg  w-[39px] h-1 block relative after:bg-transparent after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:transition-all after:duration-300 transition-all duration-300 ${open ? "rotate-45 after:rotate-90 after:!bg-black" : ""}`}></span>
                                <span className={`bg-black rounded-full  w-[39px] h-1 block transition-all duration-300 ${open ? "-translate-x-10" : ""}`}></span>
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
                    <div className="flex gap-6 max-lg:block">
                        <Link href="/">
                            <Image src="/assets/images/svg/discord.svg" alt="discord" width={35} height={35} />
                        </Link>
                        <Link href="/">
                            <Image src="/assets/images/svg/twitter.svg" alt="discord" width={35} height={35} />
                        </Link>
                        <Link href="/">
                            <Image src="/assets/images/svg/magic-eden.svg" alt="discord" width={35} height={35} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
