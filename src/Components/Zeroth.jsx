import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


function Zero(){
    return <div>
        <div className='Container0'>
        <h2>Our New Launches and Offers</h2>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide><img src='https://www.candere.com/media/home_page_images/5_-Off-FOMO-Banner.jpg' /></SwiperSlide>
        <SwiperSlide><img src='https://www.candere.com/media/home_page_images/Watch-Charm-Banner-1.jpg' /></SwiperSlide>
        <SwiperSlide><img src='https://www.candere.com/media/wysiwyg/DGRP_2.jpg' /></SwiperSlide>
      </Swiper>
        </div>
    </div> 
}

export default Zero;