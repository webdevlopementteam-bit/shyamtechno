import Image from "next/image";
import Link from "next/link";
import { Home, CheckSquare } from "lucide-react";
import Aboutus from "@/sections/About";

export const metadata = {
  title: "About Shyam Techno Print | 17+ Yrs Machine Manufacturer",
  description:
    "Know about Shyam Techno Print, a trusted Faridabad-based manufacturer of Paper Bag, Flexo Printing Machine & Tissue Bag with 17+ years of industry expertise.",
  keywords: ["About", "About Us", "Shyam Techno Print"],
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  const leftFeatures = [
    "The servo system adopts Delta or Yaskawa.",
    "The Feeder controlled up and down by pneumatic cylinder to easily feed and unload paper reel.",
    "Pneumatic constant tension control feeding system for paper reel.",
    "Photoelectric Sensor adopts Germany sick brand.",
    "Accurate colors tracking system with manually positioning operation.",
    "Electric apparatus elements are using good brand and good quality.",
    "Distribution box and machines are separate.",
    "Feeder and machine are separate, can put more heavy paper roll.",
    "We use pneumatic air shaft for easily clamping to roll.",
    'Fully Automatic Servo Control System available with controller and 7" touch screen display as per customer demand.',
  ];

  const rightFeatures = [
    "Online gusset adjustable system by one knob.",
    "Aluminium Delivery cylinder bare for accurate balance and higher performance. It protects from rusting.",
    "High speed with 4 Blades and 8 gripper.",
    "Adjustable Glue System available. You can adjust glue according to bag width.",
    "Side pasting and center pasting option available.",
    "Total production counter, batch counter are all available at one place at operating side.",
    "Printing option available in 2 and 4 color flexo printing units.",
    "Anilox roller available for fine printing LPI as per customer demand.",
    "We use pneumatic air shaft for easily clamping to roll.",
    "We use 4 Rotating blades for high speed and production.",
  ];

  return (
    <>
      {/* ================= Breadcrumb Banner ================= */}
      <section className="relative h-[340px] md:h-[420px] overflow-hidden">
        <Image
          src="/aboutbg.webp" // Replace with your banner image
          alt="About Banner"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <h3 className="text-4xl font-bold text-white md:text-6xl">
              About Us
            </h3>

            <div className="mt-5 flex items-center gap-3 text-white">
              <Link
                href="/"
                className="flex items-center gap-2 hover:text-red-500 transition"
              >
                <Home size={18} />
                Home
              </Link>

              <span>»</span>

              <span className="font-medium text-white">About Us</span>
            </div>
          </div>
        </div>
      </section>


      <Aboutus/>

      {/* ================= Advance Features ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold uppercase text-red-600 md:text-5xl">
              Advance Features
            </h2>

            <div className="mx-auto mt-4 h-1 w-52 bg-red-600"></div>
          </div>

          {/* Feature Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left */}
            <div className="space-y-5">
              {leftFeatures.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded bg-gray-50 p-5 shadow-sm"
                >
                  <CheckSquare
                    className="mt-1 text-green-600"
                    size={20}
                  />

                  <p className="text-lg leading-8 text-gray-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Right */}
            <div className="space-y-5">
              {rightFeatures.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded bg-gray-50 p-5 shadow-sm"
                >
                  <CheckSquare
                    className="mt-1 text-green-600"
                    size={20}
                  />

                  <p className="text-lg leading-8 text-gray-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}