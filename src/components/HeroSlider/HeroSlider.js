import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from "./SliderItem";

import banner1 from './../../images/home/shutterstock_615439679.png';
import banner2 from './../../images/home/shutterstock_1790190785.png';
import banner3 from './../../images/home/shutterstock_1090078049.png';

import 'swiper/css';
import 'swiper/css/autoplay';

SwiperCore.use([Autoplay, Navigation]);

const HeroSlider = () => {

    const params = {
        slidesPerView: 1,
        speed: 1500,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false
        },
        navigation: {
            prevEl: '.slider-nav__prev',
            nextEl: '.slider-nav__next',
          },
        loop: true,
        effect: 'fade'
    }

    return(
        <>
            <div className="hero-slider__container container-fluid px-0">
                <Swiper {...params}>
                    <SwiperSlide>
                        <SliderItem slide={banner1}></SliderItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderItem slide={banner2}></SliderItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderItem slide={banner3}></SliderItem>
                    </SwiperSlide>
                    <div className="slider-nav slider-nav__prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="77" height="94" viewBox="0 0 77 94"><g><g><g><path fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="20" stroke-width="3" d="M68.268 46.812H31.763"/></g><g><path fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="20" stroke-width="3" d="M46.812 63.624v0L30 46.812v0L46.812 30v0"/></g></g></g></svg>
                    </div>
                    <div className="slider-nav slider-nav__next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="94" viewBox="0 0 78 94"><g><g transform="rotate(-180 28.5 47)"><g><path fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="20" stroke-width="3" d="M47.268 46.812H10.763"/></g><g><path fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="20" stroke-width="3" d="M25.812 30v0L9 46.812v0l16.812 16.812v0"/></g></g></g></svg>
                    </div>
                </Swiper>
            </div>
        </>
    );
};

export default HeroSlider;
