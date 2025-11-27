'use client';
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import AnimationLTR from "../Animation/AnimationLTR";
import AnimationRTL from "../Animation/AnimationRTL";
import AnimationY from "../Animation/AnimationY";

export default function CarouselPlugin() {

  const buttonBgColor = 'bg-[#b8860b]';
  const buttonTextColor = 'text-white';
  const sloganTextColor = 'text-white';

  const slidesData = [
    { imgSrc: "https://i.ibb.co.com/tpXs8rML/thomas-bormans-Js-Tm-Un-Hd-VYQ-unsplash.jpg", id: 1 },
    { imgSrc: "https://i.ibb.co.com/yn5HnRB6/stijn-te-strake-e5-Yj-Vc-IJW-A-unsplash.jpg", id: 2 },
    { imgSrc: "https://i.ibb.co.com/Z6SZJTJ3/ruslan-sikunov-j-OWyh-ms-FTE-unsplash.jpg", id: 3 },
    { imgSrc: "https://i.ibb.co.com/fdHWHWsc/steve-philip-4-Mzaui-d-PRo-unsplash.jpg", id: 4 },
  ];

  const heroSlog = (
    <div className={`text-left space-y-1.5 md:space-y-4 my-6 md:my-10 ${sloganTextColor}`}>
      <AnimationLTR>
        <h3 className="text-xl md:text-2xl font-serif">TIMELESS STYLE</h3> 
      </AnimationLTR>
      <AnimationRTL>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Discover Watches That <br className="hidden md:inline"/> Define Elegance
        </h1>
      </AnimationRTL>
      <AnimationLTR>
        <p className="text-base md:text-xl font-medium max-w-sm md:max-w-none">
          From classic leather to modern smart designs, explore our curated <br className="hidden md:inline"/> collection for every wrist.
        </p>
      </AnimationLTR>
      <AnimationRTL>
        <button className={`btn ${buttonBgColor} ${buttonTextColor} hover:bg-[#a8741a] border-none mt-3 md:mt-5`}>
          SHOP NOW → 
        </button>
      </AnimationRTL>
    </div>
  );

  return (
    <div className="w-screen">
      <AnimationY>
        <Swiper
          className="h-[350px] sm:h-[450px] lg:h-[600px] w-full"
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true} 
          pagination={{ clickable: true }}
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                id={`slide${slide.id}`}
                className="relative w-full h-full"
              >
                <img
                  src={slide.imgSrc}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-start px-5 md:px-10">
                  <div className="flex-1 lg:flex lg:justify-start lg:ml-20"> 
                    {heroSlog}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AnimationY>
    </div>
  );
}