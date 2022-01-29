import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

SwiperCore.use([Autoplay]);

const HeroSlider = () => {

    const params = {
        slidesPerView: 1,
        speed: 1500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        loop: true,
        effect: 'fade'
    }

    return(
        <>
            <section id="hero-slider" className="container-fluid">
                <Swiper {...params}>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default HeroSlider;
