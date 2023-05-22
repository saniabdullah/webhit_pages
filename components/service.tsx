"use client"

import { motion } from 'framer-motion';
import Image from "next/image";

type ServiceProps = {
    data: {
        img_url: string;
        title: string;
        desc: string;
    }[];
};

export default function Service ({ data }: ServiceProps) {
    return (
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
        >
            <div className="w-full lg:px-20 px-4 py-2 bg-[#EFF2F5]">
                <h1 className="lg:text-3xl text-xl font-bold text-center py-2 mt-20">Our Services</h1>
                <p className="lg:text-lg text-md text-center mb-4">End to end solution for full-cycle IT needed</p>
                <div className="flex flex-wrap items-center mb-20 pb-7 justify-evenly">
                    {data.map((item, index) => (
                        <div key={index} className="flex md:flex-col md:w-1/2 lg:w-1/4">
                            <div className='bg-white shadow-md py-2 px-4 rounded-md text-black font-medium my-5 mx-auto w-1/3 md:w-48 hover:scale-105'>
                                <img 
                                    src={item.img_url}
                                    alt=""
                                    width={75}
                                    height={75}
                                    className="mx-auto py-3"
                                />
                            </div>
                            <div className="w-[200px] lg:w-full">
                                <p className="text-center mt-4 lg:text-lg text-sm font-bold mx-5">{item.title}</p>
                                <p className="text-center text-sm lg:text-md mx-5">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}