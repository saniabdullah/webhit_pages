"use client"

import { useState } from "react";
import { motion } from 'framer-motion';
import Link from 'next/link'

type CarouselKissflowProps = {
    data: {
      imgurl: string;
      title: string;
      desc: string;
    }[];
};

const KissflowPage = ({ data }: CarouselKissflowProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (index : any) => {
        setCurrentIndex(index);
    };
        
    return (
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
        >
            <div>
                {data.length && (
                    <>
                        <div className="pt-24 p-10 lg:py-24 lg:px-56" id="home">
                            <div className="lg:flex items-center justify-center panjang" id="#home">
                                <div className="lg:w-1/2 lg:pl-10 text-center">
                                    <img 
                                        src={data[currentIndex].imgurl} 
                                        alt={data[currentIndex].title} 
                                        width={600}
                                        height={600}
                                    />

                                    <button
                                        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                                        type="button" onClick={() => handleClick(currentIndex === data.length - 1 ? 0 : currentIndex + 1)}>
                                        <span className="inline-block h-8 w-8 dark:grayscale">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6">
                                                <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div className="lg:w-1/2 lg:pr-10 text-center lg:text-start">
                                    <h1 className="text-3xl font-extrabold mb-4">{data[currentIndex].title}</h1>
                                    <p className="mb-4 h-28 lg:h-14">{data[currentIndex].desc}</p>
                                    <button
                                        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                                        type="button" onClick={() => handleClick(currentIndex === 0 ? data.length - 1 : currentIndex - 1)}>
                                        <span className="inline-block h-8 w-8 dark:grayscale">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6">
                                                <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 19.5L8.25 12l7.5-7.5" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div className="flex text-center justify-center md:justify-start">
                                        <Link href="#kontak" className="bg-[#204E62] hover:bg-[#405a54] text-white font-extrabold py-2 rounded lg:my-5 my-2 w-2/3 md:w-1/2 shadow-lg">
                                            Start Your Journey
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                    
            </div>
        </motion.div>
    );
}

export default KissflowPage