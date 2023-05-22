

import React from 'react'

const EpicorSecondPage = () => {
  return (
    <div className='w-full py-10 lg:px-56 bg-[#EFF2F5]'>
        <div className="flex flex-col justify-between">
            <div className='m-2 flex-auto w-full'>
                <img 
                    src="./images/epicor_second.png"
                    alt=""
                    width={100}
                    height={100}
                    className="h-full w-full object-cover p-2"
                />
            </div>
            <div className='w-full flex md:flex-wrap md:justify-center overflow-x-scroll scroll-smooth'>
                <div className='flex flex-col bg-white shadow-lg rounded-md md:w-1/5 lg:w-1/6 p-2 m-2 md:m-5'>
                    <h1 className='py-1 px-2 rounded-sm text-center font-extraboldbold text-2xl'>Simple</h1>
                    <p className='py-1 px-2 mt-5 rounded-sm text-center text-sm'>Easy to use you can accomplish everyday tasks effortlessly</p>
                </div> 
                <div className='flex flex-col bg-white shadow-lg rounded-md md:w-1/5 lg:w-1/6 p-2 m-2 md:m-5'>
                    <h1 className='py-1 px-2 rounded-sm text-center font-extraboldbold text-2xl'>Intelligent</h1>
                    <p className='py-1 px-2 mt-5 rounded-sm text-center text-sm'>Designed to understand users needs and respond accordingly</p>
                </div> 
                <div className='flex flex-col bg-white shadow-lg rounded-md md:w-1/5 lg:w-1/6 p-2 m-2 md:m-5'>
                    <h1 className='py-1 px-2 rounded-sm text-center font-extraboldbold text-2xl'>Modular</h1>
                    <p className='py-1 px-2 mt-5 rounded-sm text-center text-sm'>Allows essy user personalization and system configuration to meet your needs</p>
                </div> 
                <div className='flex flex-col bg-white shadow-lg rounded-md md:w-1/5 lg:w-1/6 p-2 m-2 md:m-5'>
                    <h1 className='py-1 px-2 rounded-sm text-center font-extraboldbold text-2xl'>Consistent</h1>
                    <p className='py-1 px-2 mt-5 rounded-sm text-center text-sm'>Cohesive UX across platforms and devices</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EpicorSecondPage