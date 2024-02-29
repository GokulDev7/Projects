import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import carosuelData from '../data/carosuelData.json'
import { Navigation, Scrollbar} from 'swiper/modules'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

function ProductCarosuel() {
    const data = carosuelData.images;
    const [swiperRef, setSwiperRef] = useState('');

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };
    return (
        <div className='flex justify-evenly items-center gap-1 ' >
            <div className='w-20 h-48 flex justify-center items-center hover:bg-[rgba(232,232,232,0.67)] hover:border-solid hover:border-gray-400 hover:border-[1px] hover:rounded-[5px] duration-300'>
                <ArrowBackIosIcon onClick={prevHandler} className='cursor-pointer text-black scale-[1.8] block' />
            </div>

        
            <Swiper
                slidesPerView={7}
                spaceBetween={5}
                modules={[Navigation,Scrollbar]}
                scrollbar={{
                    hide:true
                }}
                onSwiper={(swipe) => setSwiperRef(swipe)}
               
                

            >
                {data.map((image, index) => (
                    <SwiperSlide key={index} >
                        <div className='object-contain flex justify-center'>
                        <img src={image.src} alt={image.alt} className='object-contain mb-7' />
                        </div>    
                    </SwiperSlide>
                ))}
            </Swiper>
  
            
            <div className='w-20 h-48 flex justify-center items-center hover:bg-[rgba(232,232,232,0.67)] hover:border-solid hover:border-gray-400 hover:border-[1px] hover:rounded-[5px] duration-300'>
                <ArrowForwardIosIcon onClick={nextHandler} className='cursor-pointer text-black scale-[1.8] block' />
            </div>
         

        </div>
    )
}

export default ProductCarosuel