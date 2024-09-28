"use client"

import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import { SwiperNavButtons } from "@lib/helper"

export const ProductDetailsSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <div className="lg:flex lg:flex-row-reverse lg:gap-8">

      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 lg:h-[600px]"
      >
        <SwiperSlide className="h-full">
          <img className="h-full" src="https://ovia.no/wp-content/uploads/2023/04/Aktivt-kull-sapebar-grey-2048x1365.jpg.webp" />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img className="h-full" src="https://ovia.no/wp-content/uploads/2023/04/Aktivt-kull-sapebar-blue-2048x1365.jpg.webp" />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img className="h-full" src="https://ovia.no/wp-content/uploads/2023/04/Aktivt-kull-sapebar-1-grey-2048x1365.jpg.webp" />
        </SwiperSlide>
        <SwiperNavButtons className="hidden" />
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-thumbs mt-5 lg:mt-0"
      >
        <SwiperSlide>
          <img src="https://ovia.no/wp-content/uploads/2023/04/Aktivt-kull-sapebar-grey-600x400.jpg.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://ovia.no/wp-content/uploads/2023/04/Aktivt-kull-sapebar-blue-600x400.jpg.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://ovia.no/wp-content/uploads/2023/04/Aktivt-kull-sapebar-1-grey-2048x1365.jpg.webp" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
