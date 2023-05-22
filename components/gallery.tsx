"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

type GalleryProps = {
  data: {
    imgurl: string;
  }[];
};

const Gallery = ({ data }: GalleryProps) => {
  console.log(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index : any) => {
    setCurrentIndex(index);
};

  return (
    
    <div className="w-full px-10 lg:px-24 lg:min-h-screen">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="lg:text-3xl text-xl font-extrabold my-10 text-center">Activity Gallery</h1>
        <div className="product-detail-container mx-auto">
          <div>
              <div className='image-container shadow-lg'>
                  <img 
                    width={500}
                    height={520}
                    src={data[currentIndex].imgurl} alt="" className='product-detail-image'/>
              </div>
              <div className='small-images-container'>
                  {data.map((item, i) => (
                      <img 
                          alt=""
                          src={item.imgurl}
                          width={320}
                          height={320}
                          className={i === currentIndex ? 
                              'small-image selected-image shadow-lg' :
                              'small-image shadow-lg'}
                          key={i}
                          onMouseEnter={() => setCurrentIndex(i)}
                      />
                  ))}
              </div>
          </div>
        </div>
      </motion.div>
      
    </div>    
  )
}

export default Gallery