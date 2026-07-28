"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const clients = [
  { id: 1, logo: "/himani.png", name: "Himani Enterprises" },
  { id: 2, logo: "/ltcards.png", name: "LT Cards & Creation" },
  { id: 3, logo: "/shree.png", name: "Shree Packaging" },
  { id: 4, logo: "/himani.png", name: "Himani Enterprises" },
  { id: 5, logo: "/ltcards.png", name: "LT Cards & Creation" },
  { id: 6, logo: "/shree.png", name: "Shree Packaging" },
];

export default function OurClients() {
  return (
    <section className="bg-[#f8f8f8] py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-lg font-semibold uppercase tracking-[3px] text-red-600">
            Trusted By
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#1f2937] md:text-5xl">
            Our Clients
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-red-600"></div>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={3500}
          spaceBetween={30}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="group flex h-44 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={90}
                  className="h-auto max-h-24 w-auto object-contain transition duration-300 group-hover:scale-105"
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}