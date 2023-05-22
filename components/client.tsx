"use client"
import Image from "next/image";
import { motion } from 'framer-motion';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";


type ClientProps = {
    data: {
        img_client: string;
    }[];
};


export default function Client ({data} : ClientProps) {
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

    return(
        <div className="w-full bg-[#204E62] lg:px-20 lg:py-10 px-4 py-2 relative h-[250px] md:min-h-[450px]">
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.6 }}
                className="items-center"
            >

                <h1 className="lg:text-3xl text-xl font-bold mx-auto text-center py-2 mb-4 mt-12 text-white">Our Client</h1>
                <div className='w-full flex overflow-x-scroll scroll-smooth pb-20' id="content">
                    {data.map((item, index) => (
                        <div className='bg-[#EFF2F5] shadow-md rounded-md m-3 hover:scale-105' key={index}>
                            <div className='text-black font-medium lg:m-2 m-2 w-[200px]'>
                                <img 
                                    src={item.img_client}
                                    alt=""
                                    className="mx-auto w-20 h-25 lg:w-40 lg:h-28"
                                />
                            </div>
                        </div> 
                    ))}
                </div>
            </motion.div>
            <div className="hidden md:absolute md:bottom-12 right-1/2 z-[2] mb-4 md:flex list-none justify-center p-0">
                <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
                <FiChevronLeft />
                </button>
            </div>
            <div className="hidden md:absolute md:bottom-12 left-1/2 z-[2] mb-4 md:flex list-none justify-center p-0">
                <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );
}
