"use client";

import { Users, Award, Briefcase, UserCheck } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "29K",
    title: "Happy Client",
    gradient: true,
  },
  {
    icon: Award,
    number: "35+",
    title: "Years of Experience",
    gradient: false,
  },
  {
    icon: Briefcase,
    number: "779+",
    title: "Project Done",
    gradient: true,
  },
  {
    icon: UserCheck,
    number: "143+",
    title: "Team Members",
    gradient: false,
  },
];

export default function CounterSection() {
  return (
    <section className="bg-[#2f2f98] py-16 ">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-md px-8 py-10 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  item.gradient
                    ? "bg-gradient-to-b from-[#4b2d82] to-[#9d2b5b]"
                    : "bg-[#2a2a90]"
                }`}
              >
                {/* Icon */}
                <div className="mb-5 flex justify-center">
                  <div className="flex h-13 w-13 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Number */}
                <h2 className="text-3xl font-bold text-white lg:text-3xl">
                  {item.number}
                </h2>

                {/* Divider */}
                <div className="mx-auto my-5 h-[2px] w-44 bg-white/70"></div>

                {/* Title */}
                <h3 className="text-2xl font-medium text-white ">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}