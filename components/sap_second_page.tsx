"use client"
import { motion } from 'framer-motion';

type SecondSection = {
    data: {
        imgurl: string;
        title: string
    }[]
}

const SecoundSectionSapPage = ({data} : SecondSection) => {
  return (
    <div className="w-full lg:px-20 px-4 pb-10 md:pb-10 bg-[#EFF2F5]">
        <div className='flex flex-col md:flex-row md:my-10 py-5'>
            <div className='flex-auto w-full md:w-1/4'>
                <img 
                    src="./images/sap.png"
                    alt=""
                    className="h-[200px] w-[200px] object-cover p-2 m-auto"
                />
            </div>
            <div className='flex-auto w-full md:w-3/4 md:my-10 text-justify'>
                <p>Experienced in implementing SAP in the mining, shipping, palm oil industry brings us as SAP Official Partner.</p>
                <br />
                <p>SAP is the leading ERP among multinationals. SAP as a single solution accommodating end to end solutions. Starting from finance, HR, Operations, Supply Chain, and also Marketing.</p>
            </div>
        </div>
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
            className=""
        >
            <div className='w-full flex md:flex-wrap md:justify-center overflow-x-scroll scroll-smooth'>
                {data.map((item, index) => (
                    <div className='flex flex-col bg-white shadow-lg rounded-md md:w-1/5 lg:w-1/6 p-2 m-2 md:m-5' key={index}>
                        <div className='w-[150px] md:w-full'>
                            <img 
                                src={item.imgurl}
                                alt=""
                                className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] object-cover p-2 m-auto"
                            />
                        </div>
                        <p className='bg-[#204E62] m-2 py-1 px-2 rounded-sm text-white text-center'>{item.title}</p>
                    </div> 
                ))}
            </div>
        </motion.div>
    </div>
  )
}

export default SecoundSectionSapPage