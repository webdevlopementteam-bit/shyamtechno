"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const desktopBanners = [
  "/banner1.png",
  "/banner2.png",
  "/banner4.png",
];

const mobileBanners = [
  "/mbone.webp",
  "/mbtwo.webp",
  "/mbthree.webp",
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop Slider */}
      <div className="hidden md:block">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          className="h-[650px]"
        >
          {desktopBanners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[650px] w-full">
                <Image
                  src={banner}
                  alt={`Desktop Banner ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Slider */}
      <div className="block md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="h-[500px]"
        >
          {mobileBanners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[500px] w-full">
                <Image
                  src={banner}
                  alt={`Mobile Banner ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}