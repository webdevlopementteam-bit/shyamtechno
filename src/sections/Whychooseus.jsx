"use client";

import {
  User,
  BarChart3,
  Cpu,
  Handshake,
  Truck,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: User,
    title: "Proven Expertise",
    description:
      "With 17+ years of hands-on experience in the printing and packaging industry, we bring deep technical know-how and innovation to every solution we deliver.",
  },
  {
    icon: BarChart3,
    title: "Wide Range of High-Quality Machines",
    description:
      "From Paper Bag Making Machines to Flexo Printing Solutions, our diverse product portfolio caters to the ever-evolving needs of our clients.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description:
      "We integrate the latest engineering advancements and automation in our machines to ensure maximum productivity, precision, and durability.",
  },
  {
    icon: Handshake,
    title: "Customer-Centric Approach",
    description:
      "Your satisfaction is our top priority. We listen, adapt, and deliver tailor-made solutions that help your business grow.",
  },
  {
    icon: Truck,
    title: "Timely Delivery & Support",
    description:
      "We value your time. That's why we ensure prompt delivery, professional installation, and ongoing technical support whenever you need it.",
  },
  {
    icon: TrendingUp,
    title: "Made in India, Trusted Worldwide",
    description:
      "Proudly based in Faridabad, Haryana, our machines are trusted by businesses across India and beyond for their consistent quality and performance.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#fafafa] py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold uppercase text-red-600 md:text-5xl">
            Why Choose Us?
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-32 bg-red-600"></div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-xl bg-white p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="mt-1">
                    <Icon
                      size={28}
                      className="text-red-600 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-slate-800">
                      {item.title}
                    </h3>

                    <p className="text-[17px] leading-9 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}