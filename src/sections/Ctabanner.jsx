"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="relative h-[350px] sm:h-[450px] md:h-[600px] lg:h-[780px] w-full">
        <Image
          src="/adimage.png" // Your second image
          alt="Paper Bag Machines"
          fill
          priority
          className="object-contain"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 sm:pt-12 md:pt-16 lg:pt-10 px-4 text-center">
          <span className="text-red-600 font-bold uppercase tracking-wide text-lg md:text-2xl">
            Ready to Boost Your Production?
          </span>

          <h2 className="mt-2 max-w-4xl text-white font-light leading-tight text-2xl md:text-3xl">
            Let's Discuss Your Requirements — Get a Quote Today!
          </h2>

          <Link
            href="/contact-us"
            className="group mt-5 inline-flex items-center gap-3 rounded-md bg-[#1b2f4b] px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-red-600"
          >
            Get Started
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#1b2f4b] group-hover:text-red-600">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}