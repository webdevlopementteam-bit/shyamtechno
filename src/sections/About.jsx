"use client";

import Image from "next/image";
import { ThumbsUp } from "lucide-react";

export default function Aboutus() {
  return (
    <section className="bg-[#f7f7f7] py-16 lg:py-24">
      <div className="mx-auto px-7">
        {/* Mobile Heading */}
        <div>
          <h1 className="text-base font-semibold uppercase tracking-wider text-red-600 md:hidden">
            WHY CHOOSE SHYAM TECHNO PRINT
          </h1>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 md:hidden">
            What Makes Shyam Techno Print Your Ideal Partner
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex justify-center">
            <Image
              src="/aboutimage.png"
              alt="About Shyam Techno Print"
              width={800}
              height={800}
              priority
              className="h-auto w-full max-w-[650px] object-contain"
            />
          </div>

          {/* Right Side */}
          <div>
            {/* Desktop Heading */}
            <h1 className="hidden text-base font-semibold uppercase tracking-wider text-red-600 md:block">
              WHY CHOOSE SHYAM TECHNO PRINT
            </h1>

            <h2 className="mt-3 hidden text-2xl font-bold leading-tight text-slate-800 md:block">
              What Makes Shyam Techno Print Your Ideal Partner
            </h2>

            <p className="mt-3 text-base leading-8 text-slate-600 md:text-lg">
              At <strong>SHYAM TECHNO PRINT</strong>, we pride ourselves on
              being a quality-centered organization dedicated to delivering the
              highest standards of products and services. Located in
              <strong> Faridabad, Haryana, India</strong>, we serve customers
              with innovative packaging and printing machinery backed by years
              of manufacturing excellence.
            </p>

            {/* Card 1 */}
            <div className="mt-8 rounded-2xl bg-[#c80d14] p-6 text-white shadow-xl">
              <div className="flex flex-col gap-5 md:flex-row md:items-start">
                {/* Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white">
                  <ThumbsUp className="h-8 w-8 text-[#2f3192]" />
                </div>

                {/* Content */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold">
                    Comprehensive Product Lineup
                  </h3>

                  <p className="mt-4 text-base leading-8 text-white/95">
                    We specialize in advanced packaging and printing machinery
                    including Paper Bag Making Machines, Medical Pouch Machines,
                    Flexo Printing Machines, Paper Napkin Production Units and
                    customized industrial solutions designed to meet modern
                    manufacturing requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="mt-6 rounded-2xl bg-[#2f3192] p-6 text-white shadow-xl">
              <div className="flex flex-col gap-5 md:flex-row md:items-start">
                {/* Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white">
                  <ThumbsUp className="h-8 w-8 text-red-600" />
                </div>

                {/* Content */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold">
                    Customer-Centric Approach
                  </h3>

                  <p className="mt-4 text-base leading-8 text-white/95">
                    Customer satisfaction drives everything we do. We
                    continuously innovate, improve our manufacturing processes,
                    and provide dedicated support to build long-term
                    relationships while delivering exceptional value to every
                    customer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}