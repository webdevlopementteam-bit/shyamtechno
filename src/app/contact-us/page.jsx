import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export const metadata = {
  title: "Contact Us - Shyam Techno Print, Faridabad",
  description:
    "Get in touch with Shyam Techno Print, Faridabad for Paper Bag & Flexo Printing Machine enquiries. Call +91 9654707061 or email us today.",
  keywords: ["Contact Us", "Shyam Techno Print"],
};

export default function ContactPage() {
  return (
    <>
      {/* ================= Breadcrumb ================= */}
      <section className="relative h-[280px] overflow-hidden md:h-[380px]">
        <Image
          src="/contactbg.jpg" // Change your banner path
          alt="Contact Banner"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-5">
            <h1 className="text-4xl font-bold text-white md:text-6xl">
              Contact Us
            </h1>

            <div className="mt-5 flex items-center gap-3 text-lg text-white">
              <Link
                href="/"
                className="flex items-center gap-2 hover:text-red-500"
              >
                <Home size={18} />
                Home
              </Link>

              <span>»</span>

              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Contact Section ================= */}
      <section className="bg-gray-100 py-10 md:py-20">
        <div className="mx-auto max-w-7xl overflow-hidden bg-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* ================= Left Side ================= */}
            <div className="bg-red-700 p-5 text-white sm:p-8 md:p-12">
              {/* Phone */}
              <div className="mb-5 flex items-center gap-3 rounded-3xl bg-white p-4 sm:mb-6 sm:gap-5 sm:rounded-full sm:p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-white sm:h-16 sm:w-16">
                  <Phone size={24} className="sm:hidden" />
                  <Phone size={30} className="hidden sm:block" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 sm:text-2xl">
                    Phone:
                  </h3>

                  <p className="text-sm text-gray-600 sm:text-base">
                    +91 9654707061 | +91 8527017400
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="mb-5 flex items-center gap-3 rounded-3xl bg-red-900 p-4 sm:mb-6 sm:gap-5 sm:rounded-full sm:p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-red-600 sm:h-16 sm:w-16">
                  <Mail size={22} className="sm:hidden" />
                  <Mail size={28} className="hidden sm:block" />
                </div>

                <div>
                  <h3 className="text-lg font-bold sm:text-2xl">Email:</h3>

                  <p className="text-sm break-all sm:text-lg sm:break-normal">
                    info@shyamtechnoprint.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="rounded-3xl bg-white p-5 sm:rounded-[45px] sm:p-6">
                <div className="flex gap-3 sm:gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-white sm:h-16 sm:w-16">
                    <MapPin size={24} className="sm:hidden" />
                    <MapPin size={30} className="hidden sm:block" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-2xl">
                      Address:
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-lg sm:leading-8">
                      Plot No. E-26, Gali No. 5E,
                      <br />
                      Industrial Area,
                      <br />
                      Sarurpur, Ballabgarh,
                      <br />
                      Faridabad-121004 (HR.)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8 md:mt-12">
                <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                  Get In Touch
                </h2>

                <div className="mt-3 h-1 w-32 bg-white sm:w-40"></div>

                <div className="mt-6 flex gap-4 sm:mt-8">
                  <a
                    href="https://www.facebook.com/ShyamTechnoPrints/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-white p-3 text-red-600 transition hover:bg-black hover:text-white"
                  >
                    <FaFacebookF size={20} />
                  </a>

                  <a
                    href="https://www.instagram.com/shyam_techno_print/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-white p-3 text-red-600 transition hover:bg-black hover:text-white"
                  >
                    <FaInstagram size={20} />
                  </a>

                  <a
                    href="https://www.youtube.com/@shyamtechnoprint3190"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-white p-3 text-red-600 transition hover:bg-black hover:text-white"
                  >
                    <FaYoutube size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* ================= Right Side ================= */}
            <div className="p-5 sm:p-8 md:p-10">
              <form className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="h-14 w-full border border-gray-300 px-4 outline-none transition focus:border-red-600"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    className="h-14 w-full border border-gray-300 px-4 outline-none transition focus:border-red-600"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="h-14 w-full border border-gray-300 px-4 outline-none transition focus:border-red-600"
                />

                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="h-14 w-full border border-gray-300 px-4 outline-none transition focus:border-red-600"
                />

                <textarea
                  rows={6}
                  placeholder="Message"
                  className="w-full border border-gray-300 p-4 outline-none transition focus:border-red-600"
                ></textarea>

                {/* Dummy Captcha */}
                <div className="flex h-20 max-w-sm items-center gap-4 rounded border border-gray-300 bg-white px-5">
                  <input
                    type="checkbox"
                    className="h-6 w-6"
                  />

                  <span className="text-gray-700">
                    I'm not a robot
                  </span>
                </div>

                <button
                  type="submit"
                  className="rounded bg-red-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-black"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Google Map ================= */}
      <section className="bg-white py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Our Location
            </h2>

            <div className="mx-auto mt-3 h-1 w-24 bg-red-600"></div>

            <p className="mt-5 text-base text-gray-600 sm:text-lg">
              Visit our office or contact us anytime. We'd love to hear from you.
            </p>
          </div>

          <div className="h-72 overflow-hidden rounded-xl border border-gray-200 shadow-xl sm:h-96 md:h-[550px]">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Plot%20No.%20E-26,%20Gali%20No.%205E,%20Industrial%20Area,%20Sarurpur,%20Ballabgarh,%20Faridabad-121004&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}