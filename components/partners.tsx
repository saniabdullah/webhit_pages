"use client"

import Image from "next/image";
import { motion } from 'framer-motion';

type PartnerProps = {
    data: {
        img_url : string;
        desc: string;
    }[];
}

export default function Partners ( {data} : PartnerProps ) {
    return (
        <div className="px-10 lg:px-24 w-full my-4 bg-[#EFF2F5]" id="partners">
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.6 }}
                className=""
            >

                <div className='flex flex-wrap justify-center items-center mb-4 pb-10'>
                    {data.map((item, index) => (
                        <div key={index} className="md:flex-col md:w-1/2 lg:w-1/3 py-4">
                            <img 
                                src={item.img_url}
                                alt=""
                                width={75}
                                height={50}
                                className="mx-auto py-3 w-2/3 md:w-40 my-2"
                            />
                            <div className="lg:w-full">
                                <p className="text-center text-md lg:text-md mx-5">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </motion.div>
        </div>
    )
}