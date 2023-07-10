import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function SwipSlide() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide><img src='https://media.istockphoto.com/id/671101136/photo/business-and-education-background.webp?b=1&s=170667a&w=0&k=20&c=R4e4yhOo5_W_X2RvSab-eMmzp5KFIYZ6U3Z45IpEppo='>
        </img></SwiperSlide>
        <SwiperSlide> <img
            alt=""
            src="https://i.pinimg.com/736x/2d/94/91/2d94919583ea7e120aad901daa2c3e9e.jpg"
            className="w-full"
          /></SwiperSlide>
           <SwiperSlide><img src='https://learn.canva.com/wp-content/uploads/2015/03/40-books-unlock-creativity-start-lifes-best-work.jpg'></img></SwiperSlide>
        <SwiperSlide> <img
            alt=""
            src="   https://www.pngkit.com/png/detail/392-3923347_harry-potter-us-hardcover-editions-harry-potter-book.png"
            className="w-full"
          /></SwiperSlide>
          
       
        <SwiperSlide><img
            alt=""
            src="https://i.ibb.co/hcV3GK7/two-books-with-pink-flowers-as-bookmarks-on-a-white-wooden-table-spring-sunlight-warm-season-reading.jpg"
            className="w-full h-[450px]"
          /></SwiperSlide>
        
        <SwiperSlide><img
            alt=""
            src="https://m.media-amazon.com/images/I/71HuitN0mCL._AC_UF894,1000_QL80_.jpg"
            className="w-full"
          /></SwiperSlide>
          <SwiperSlide>
        <img
            alt=""
            src="https://i.ibb.co/dQcJfnV/home-slider-1-ai-1.webp"
            className="w-full "
          />
        </SwiperSlide>
       
        <SwiperSlide><img
            alt=""
            src="https://i.ibb.co/x2qj2nS/il-794x-N-2883876270-mn5h.webp"
            className="w-full"
          /></SwiperSlide>
        <SwiperSlide><img
            alt=""
            src="https://m.media-amazon.com/images/I/51XQVQZ2GSL._AC_UF1000,1000_QL80_.jpg"
            className="w-full"
          /></SwiperSlide>
       
       
      </Swiper>
    </>
  );
}
