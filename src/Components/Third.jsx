import React from 'react';

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Third(){
    return <div>
        <div className='container3'>
            <p>Shop by collection</p>
            <div className='container3-2nd'>
                <div className='container3-text-left'>
                    <Swiper
                    // install Swiper modules
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    >
                    <SwiperSlide><div className='item-1'>
                        <p id='title'>
                            New Arrivals
                        </p>
                        <p id='content'>
                            Shine this season with our new collections
                        </p>
                        <a href='#'>Shop now</a>
                    </div></SwiperSlide>
                    <SwiperSlide>
                    <div className='item-1'>
                        <p id='title'>
                            Antique Jewelry
                        </p>
                        <p id='content'>
                            Choose from necklace sets, chokers, earrings, and more.
                        </p>
                        <a href='#'>Shop now</a>
                    </div></SwiperSlide>
                    </Swiper>
                </div>

                <div className='container3-img-right'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    >
                    <SwiperSlide><div className='item2'>
                        <img src='https://cdn.shopify.com/s/files/1/2026/1561/files/Slideshow_800x.jpg?v=1640324831' />
                    </div></SwiperSlide>
                    <SwiperSlide><div className='item2'>
                        <img src='https://cdn.shopify.com/s/files/1/2026/1561/files/Slideshow_2_800x.jpg?v=1640324493' />
                    </div></SwiperSlide>
                    </Swiper>
                </div>
                
            </div>
        </div>
    </div>
}

export default Third;