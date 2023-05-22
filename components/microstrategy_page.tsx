"use client"

import { motion } from 'framer-motion';
import { useState } from "react";
import Link from 'next/link'

type MicroProps = {
    data : {
        imgurl : string;
        title : string;
        desc : string;
    }[];
}

const MicrostrategyPage = ( {data} : MicroProps) => {

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
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="lg:w-1/2 lg:pr-10 text-center lg:text-start">
                                    <h1 className="text-3xl font-extrabold mb-4">{data[currentIndex].title}</h1>
                                    <p className="mb-4 h-28 lg:h-14">{data[currentIndex].desc}</p>
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
  )
}

export default MicrostrategyPage