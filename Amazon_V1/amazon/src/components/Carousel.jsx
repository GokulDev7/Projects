import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import HomeCarosuelData from '../data/HomeCarosuelData.json'



function Carousel() {
    const carouselData = HomeCarosuelData.images;
    const [swiperRef, setSwiperRef] = useState('');

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };
    return (
        <div className='mt-[60px] h-[600px] max-w-[1500px]  bg-amazon-background'>

            <ArrowBackIosIcon onClick={prevHandler} className='relative top-[150px] z-10 left-[25px] text-white scale-[1.8] ' />
            <ArrowForwardIosIcon onClick={nextHandler} className='relative top-[150px] z-10 xl:left-[1430px] lg:left-[1130px] md:left-[730px] sm:left-[540px] text-white scale-[1.8]' />
            <Swiper loop={true}
                spaceBetween={0}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 4000
                }}
                onSwiper={(swipe) => setSwiperRef(swipe)}
                className='mask-image-b mask-image-start-50 mask-image-end-100 relative bottom-[26px]' >
                  {carouselData.map((image, index) => (
                    <SwiperSlide key={index} >
                        <img src={image.src} alt={image.alt} className='object-contain' /> 
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel