"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";
import products from "@/data/products";

const NAV_LINKS = [
  { label: "HOME", href: "/", active: true },
  { label: "ABOUT US", href: "/about-us" },
  { label: "PRODUCTS", href: "/products", hasDropdown: true },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "/contact-us" },
];

const LOGO_WIDTH = "lg:w-64"; // width reserved for the tall logo column on desktop

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="w-full font-sans">
      {/* Top thin navy border */}
      <div className="h-1.5 bg-[#1a2456]" />

      <div className="relative bg-white">
        {/* Big logo, spans the full height of topbar + navbar on desktop */}
        <div
          className={`hidden lg:flex absolute left-0 top-0 bottom-0 ${LOGO_WIDTH} items-center justify-center bg-white z-20 px-4`}
        >
          <Image
            src="/logo.png"
            alt="Shyam Techno Print"
            width={220}
            height={220}
            className="h-full max-h-[110px] w-auto object-contain"
            priority
          />
        </div>

        {/* Content column, shifted right to make room for the logo on desktop */}
        <div className={`lg:pl-64`}>
          {/* Top bar: contact info + social icons */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-3 sm:gap-10 px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-100 text-center sm:text-left">
            <div className="flex items-center gap-2 text-gray-800">
              <Phone className="w-4 h-4 fill-current shrink-0" strokeWidth={0} />
              <span className="text-xs sm:text-sm md:text-base font-medium">
                +91 9654707061 <span className="text-gray-400 mx-1">|</span> +91 8527017400
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-800">
              <Mail className="w-4 h-4 shrink-0" />
              <span className="text-xs sm:text-sm md:text-base font-medium break-all sm:break-normal">
                info@shyamtechnoprint.com
              </span>
            </div>

            <div className="hidden md:flex items-center gap-4 sm:ml-6">
              <a
                href="https://www.facebook.com/ShyamTechnoPrints/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-[#1a2456] flex items-center justify-center hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/shyam_techno_print/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-[#1a2456] flex items-center justify-center hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
                  <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.28 8.74 4.27 9.06 4.27 12s.01 3.26.06 4.31c.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.31s-.01-3.26-.06-4.31c-.04-.87-.18-1.34-.3-1.65-.16-.42-.35-.71-.66-1.02a2.74 2.74 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3-1.05-.05-1.37-.06-4.04-.06Zm0 3.6a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm4.8-3.24a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@shyamtechnoprint3190"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 rounded-full bg-[#1a2456] flex items-center justify-center hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav row with logo (mobile) + diagonal red banner */}
          <div className="relative">
            {/* Flat red bar on mobile/tablet */}
            <div className="absolute inset-0 lg:hidden bg-gradient-to-r from-[#e02424] to-[#c81e1e]" />

            {/* Diagonal red banner on desktop */}
            <div
              className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#e02424] to-[#c81e1e]"
              style={{ clipPath: "polygon(4% 0, 100% 0, 100% 100%, 0% 100%)" }}
            />

            <div className="relative flex items-center justify-between px-4 sm:px-6 lg:pr-8">
              {/* Logo, mobile-only (desktop uses the tall spanning logo above) */}
              <div className="flex lg:hidden items-center py-2">
                <Image
                  src="/logo.png"
                  alt="Shyam Techno Print"
                  width={180}
                  height={70}
                  className="h-12 sm:h-14 w-auto object-contain"
                  priority
                />
              </div>

              {/* Desktop nav links */}
              <nav className="hidden lg:flex items-center gap-10 py-6 pl-16">
                {NAV_LINKS.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label} className="relative group">
                      <Link
                        href={link.href}
                        className="flex items-center gap-1 text-white font-bold text-lg hover:opacity-80"
                      >
                        {link.label}
                        <ChevronDown className="w-4 h-4 mt-0.5 transition-transform group-hover:rotate-180" />
                      </Link>

                      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity absolute left-0 top-full pt-3 z-30">
                        <div className="w-[560px] max-h-[420px] overflow-y-auto grid grid-cols-2 gap-x-6 gap-y-1 bg-white rounded-xl shadow-xl border border-gray-100 p-4">
                          {products.map((product) => (
                            <Link
                              key={product.slug}
                              href={`/${product.slug}`}
                              className="block px-2 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600"
                            >
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`flex items-center gap-1 text-white font-bold text-lg hover:opacity-80 ${
                        link.active ? "pb-1 border-b-2 border-white" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              {/* Desktop enquiry button */}
              <div className="hidden lg:block z-10 shrink-0 ">
                <Link href="/contact-us">
                  <button className="bg-white text-gray-900 font-semibold text-base px-8 py-3 rounded-full shadow-md hover:bg-gray-100 whitespace-nowrap cursor-pointer">
                    ENQUIRY NOW
                  </button>
                </Link>
              </div>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden z-10 text-white p-2"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>

            {/* Mobile nav panel */}
            <div
              className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                menuOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
              }`}
            >
              <nav className="relative flex flex-col bg-[#c81e1e] px-4 pb-4 gap-1">
                {NAV_LINKS.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label} className="border-b border-white/20">
                      <div className="flex items-center justify-between text-white font-bold text-base py-3">
                        <Link
                          href={link.href}
                          className="opacity-90"
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          aria-label="Toggle products list"
                          aria-expanded={productsOpen}
                          onClick={() => setProductsOpen((open) => !open)}
                          className="p-1"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              productsOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      <div
                        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                          productsOpen ? "max-h-[420px]" : "max-h-0"
                        }`}
                      >
                        <div className="flex flex-col gap-1 pb-3 pl-3 max-h-[400px] overflow-y-auto">
                          {products.map((product) => (
                            <Link
                              key={product.slug}
                              href={`/${product.slug}`}
                              className="text-white/90 text-sm py-1.5"
                              onClick={() => setMenuOpen(false)}
                            >
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`flex items-center justify-between text-white font-bold text-base py-3 border-b border-white/20 ${
                        link.active ? "opacity-100" : "opacity-90"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <button className="mt-4 bg-white text-gray-900 font-semibold text-base px-6 py-3 rounded-full shadow-md hover:bg-gray-100 w-full">
                  ENQUIRY NOW
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom thin blue border */}
      <div className="h-1.5 bg-[#2b6bb5]" />
    </header>
  );
}