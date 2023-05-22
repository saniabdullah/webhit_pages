"use client"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import Image from "next/image";
import { motion } from 'framer-motion';

export default function Industries () {
    const scrollLeft = (): void => {
        const contentElement: HTMLElement | null = document.getElementById("content");
            if (contentElement) {
            contentElement.scrollLeft -= 400;
            console.log("success", contentElement)
            }
        };
        
    const scrollRight = (): void => {
        const contentElement: HTMLElement | null = document.getElementById("content");
        if (contentElement) {
        contentElement.scrollLeft += 400;
        }
    };

    return (
        <div className="w-full lg:px-20 px-4 py-2 bg-[#EFF2F5]">
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.6 }}
                className=""
            >
                <h1 className="lg:text-3xl text-xl font-extrabold py-2 mt-12 text-center">Industies</h1>
                <p className="lg:text-lg text-md text-center">HIT Digital indonesia provides comprehensive services in various industries</p>
                <div className="w-full flex overflow-x-scroll scroll-smooth my-4 p-12 ">
                    <div className="justify-center py-2 my-2 md:m-2 shadow-md bg-white rounded-md m-3 hover:scale-105">
                        <div className="w-[250px] md:w-full text-center">
                            <img 
                                src="./images/mining.png"
                                alt=""
                                className="h-full w-full object-cover p-2"
                            />
                        </div>
                        <div className="md:w-full">
                            <p className="text-center my-4 lg:text-2xl text-sm font-extrabold mx-5">Mining Industry</p>
                            <p className="text-center text-sm lg:text-md mx-5">We are have strong experience in mining industry. Development of extend custom system based on mining&rsquo;s best practice.</p>
                        </div>
                    </div>
                    <div className="justify-center py-2 my-2 md:m-2 shadow-md bg-white rounded-md m-3 hover:scale-105">
                        <div className="w-[250px] md:w-full">
                            <img 
                                src="./images/manufacturing.png"
                                alt=""
                                width={100}
                                height={100}
                                className="h-full w-full md:h-[120px] md:w-[120px] lg:h-full lg:w-full object-cover p-2"
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-center my-4 lg:text-2xl text-sm font-extrabold mx-5">Manufacturing Industry</p>
                            <p className="text-center text-sm lg:text-md mx-5">We provide the best solutions in manufacturing industry, complete with custom expertise based on your needs.</p>
                        </div>
                    </div>
                    <div className="justify-center py-2 my-2 md:m-2 shadow-md bg-white rounded-md m-3 hover:scale-105">
                        <div className="w-[250px] md:w-full text-center">
                            <img 
                                src="./images/shipping.png"
                                alt=""
                                width={100}
                                height={100}
                                className="h-full w-full md:h-[120px] md:w-[120px] lg:h-full lg:w-full object-cover p-2"
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-center my-4 lg:text-2xl text-sm font-extrabold mx-5">Shipping Industry</p>
                            <p className="text-center text-sm lg:text-md mx-5">Integrated shipping ERP, scheduling and ship tracking system.</p>
                        </div>
                    </div>
                    <div className="justify-center py-2 my-2 md:m-2 shadow-md bg-white rounded-md m-3 hover:scale-105">
                        <div className="w-[250px] md:w-full text-center">
                            <img 
                                src="./images/palm.png"
                                alt=""
                                width={100}
                                height={100}
                                className="h-full w-full md:h-[120px] md:w-[120px] lg:h-full lg:w-full object-cover p-2"
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-center my-4 lg:text-2xl text-sm font-extrabold mx-5">Palm Oil Industry</p>
                            <p className="text-center text-sm lg:text-md mx-5">Palm oil vertical and horizontal solutions including e-Bkm and executive information dashboard.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}