"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Kabir E Connect",
    review:
      "Have a great experience as a customer with Shyam Techno Print. One stop destination for Paper Bag Machines and Printing Machines. Their sales and support team always provides excellent assistance.",
    rating: "4.8",
  },
  {
    name: "Vishal Gupta",
    review:
      "Initially I spoke with the team over the phone and later visited their office. Their quality, professionalism and machine performance exceeded my expectations.",
    rating: "4.7",
  },
  {
    name: "Sachin Singh",
    review:
      "Great experience with Shyam Techno Print. Really satisfied with the machines. Excellent build quality and after sales service.",
    rating: "4.9",
  },
  {
    name: "Hema Rawal",
    review:
      "They provide excellent quality machines and services. Very supportive staff and timely delivery. Happy to work with them.",
    rating: "4.8",
  },
  {
    name: "Neha Sharma",
    review:
      "Paper Bag Machine is simply amazing. We are using it daily and are extremely satisfied with the output quality and performance.",
    rating: "4.9",
  },
  {
    name: "Rohit Verma",
    review:
      "Reliable company with premium quality machines. Installation was smooth and the support team is always available whenever required.",
    rating: "4.8",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}
        <div className="mb-16 flex items-center justify-between">
          <h2 className="w-full text-center text-4xl font-bold uppercase text-[#1d2434]">
            Reviews
          </h2>

          <div className="hidden lg:flex gap-0 absolute right-16">
            <button className="review-prev flex h-16 w-16 items-center justify-center border border-[#f3d3b5] text-[#d7a46d] transition hover:bg-[#f8f8f8]">
              <ChevronLeft size={28} />
            </button>

            <button className="review-next flex h-16 w-16 items-center justify-center border border-l-0 border-[#f3d3b5] text-[#d7a46d] transition hover:bg-[#f8f8f8]">
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".review-prev",
            nextEl: ".review-next",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={0}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-[420px] flex-col items-center justify-center border border-[#f3d3b5] px-10 text-center">

                <h3 className="mb-5 text-2xl font-bold uppercase text-[#ef8608]">
                  {item.name}
                </h3>

                <p className="mb-7 text-[20px] leading-10 text-[#6f7b87]">
                  {item.review}
                </p>

                <div className="inline-flex items-center gap-2 bg-[#fdf1e4] px-6 py-3 text-xl font-semibold text-[#ef8608]">
                  {item.rating}
                  <Star
                    className="fill-[#ef8608] text-[#ef8608]"
                    size={20}
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}