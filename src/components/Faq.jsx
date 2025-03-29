"use client";
import { useState, useRef, useEffect } from "react";

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    useEffect(() => {
        contentRefs.current.forEach((content, index) => {
            if (content) {
                content.style.maxHeight = openIndex === index ? `${content.scrollHeight}px` : "0px";
            }
        });
    }, [openIndex]);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = new Array(5).fill("Aliquam eget libero vitae velit?");

    return (
        <div id="faq" className="text-black lg:pt-[141px] pt-[105px] pb-[78px]">
            <div className="container max-w-[1170px] mx-auto px-4">
                <h2 className='text-[32px] font-normal pb-20 text-center text-white'>FAQ</h2>
            </div>
            <div className="container max-w-[1170px] mx-auto px-4">
                {faqs.map((question, index) => (
                    <div key={index} className="md:pt-3  max-w-[343px] md:max-w-[735px] w-full mx-auto md:pr-11 p-3 bg-[url('/assets/images/png/faq-bg.png')] bg-no-repeat mb-6">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left md:text-base md:pl-10 pl-0 cursor-pointer text-[9px] font-semibold flex justify-between items-center uppercase"
                        >
                            {question}
                            <span className="md:text-2xl text-xl font-normal cursor-pointer text-white bg-gradient-to-b from-[#E8770E] to-[#FCA32B] rounded-full md:px-3 md:py-2 px-1">
                                {openIndex === index ? "-" : "+"}
                            </span>
                        </button>
                        <div
                            ref={(el) => (contentRefs.current[index] = el)}
                            className="overflow-hidden transition-all duration-500 ease-in-out"
                            style={{ maxHeight: "0px" }}
                        >
                            <p className="md:mt-6 mt-4 font-normal max-w-[992px] md:text-base text-sm text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo nobis, sapiente quas repellat saepe molestias suscipit vitae excepturi optio magni quam tenetur doloribus eum consectetur. Sed, ea? Iure, in.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faqs;