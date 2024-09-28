"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Card } from '@modules/store/components/Card';
import { SwiperNavButtons } from '@lib/helper';

export const CardSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
            <Card />
        </SwiperSlide>
        <SwiperSlide>
            <Card />
        </SwiperSlide>
        <SwiperSlide>
            <Card />
        </SwiperSlide>
        <SwiperSlide>
            <Card />
        </SwiperSlide>
        <SwiperSlide>
            <Card />
        </SwiperSlide>
        <SwiperSlide>
            <Card />
        </SwiperSlide>
        <SwiperNavButtons className='bg-white opacity-100 hover:bg-black hover:text-white' />
      </Swiper>
    </>
  );
}
