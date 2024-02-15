import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {

  return (
    <div style={{margin:"50px auto"}}>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}

   
        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
           <SwiperSlide><img src="/swip1.png" width={200} style={{height:"70px"}} alt="" /></SwiperSlide>
        <SwiperSlide><img src="/swip2.png" width={200} style={{height:"70px"}} alt="" /></SwiperSlide>
        <SwiperSlide><img src="/swip3.png" width={200} style={{height:"70px"}} alt="" /></SwiperSlide>
        <SwiperSlide><img src="/swip4.png" width={200} style={{height:"70px"}} alt="" /></SwiperSlide>
        <SwiperSlide><img src="/swip5.png" width={200} style={{height:"70px"}} alt="" /></SwiperSlide>
        <SwiperSlide><img src="/swip6.png" width={200} style={{height:"70px"}} alt="" /></SwiperSlide>
        <SwiperSlide><img src="/swip7.png" width={200} style={{height:"70px"}} alt="" /></SwiperSlide>
        <SwiperSlide><img src="/swip8.png" width={200} style={{height:"70px"}} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
