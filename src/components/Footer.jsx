import Link from "next/link";
import { Phone, Mail, MapPin, MoveUpRight } from "lucide-react";


const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.5 6.2a3.02 3.02 0 0 0-2.13-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.37.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.13 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.37-.56a3.02 3.02 0 0 0 2.13-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.27 3.6z" />
  </svg>
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Product", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

const products = [
  { label: "Square Bottom Paper Bag Making Machine", href: "/square-bottom-paper-bag-making-machine" },
  { label: "V Bottom Paper Bag Making Machine", href: "/v-bottom-paper-bag-making-machine" },
  { label: "Flexo Printing Machine", href: "/flexo-printing-machine" },
  { label: "Non Woven Bag Making Machine", href: "/non-woven-bag-making-machine" },
  { label: "Offset Printing Machine", href: "/offset-printing-machine" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a4d] text-white">
      <div className="mx-auto  px-6 py-14 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* ABOUT US */}
          <div>
            <h3 className="mb-5 text-2xl font-extrabold tracking-wide">ABOUT US</h3>
            <p className="text-[15px] leading-7 text-gray-200">
              Shyam Techno Print, based in the industrial hub of Faridabad, Haryana, is a
              quality-driven organization specializing in manufacturing and supplying
              high-performance machinery. Our product range includes{" "}
              <span className="font-bold text-white">
                Automatic V Bottom Paper Bag Making Machines, Square Bottom Paper Bag
                Machines, Medical Pouch Making Machines, Paper Napkin Making Machines,
                Flexo Printing Machines
              </span>
              , and more.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/ShyamTechnoPrints/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-red-600 transition hover:opacity-90"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/shyam_techno_print/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-red-600 transition hover:opacity-90"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@shyamtechnoprint3190"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-red-600 transition hover:opacity-90"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-5 text-2xl font-extrabold tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 text-[15px] text-gray-200 transition hover:text-white"
                  >
                    <MoveUpRight className="h-5 w-5 shrink-0 rounded-full border border-gray-300 p-1" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="mb-5 text-2xl font-extrabold tracking-wide">PRODUCTS</h3>
            <ul className="space-y-4">
              {products.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-start gap-3 text-[15px] leading-6 text-gray-200 transition hover:text-white"
                  >
                    <MoveUpRight className="mt-0.5 h-5 w-5 shrink-0 rounded-full border border-gray-300 p-1" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="mb-5 text-2xl font-extrabold tracking-wide">CONTACT US</h3>
            <ul className="space-y-4 text-[15px] text-gray-200">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0" />
                <a href="tel:+919654707061" className="hover:text-white">
                  +91 9654707061 | +91 8527017400
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0" />
                <a href="mailto:info@shyamtechnoprint.com" className="hover:text-white">
                  info@shyamtechnoprint.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <span>
                  Plot No. E-26, Gali No. 5E, Industrial Area, Sarurpur, Ballabgarah,
                  Faridabad-121004 (HR.)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-300">
        Copyright © {new Date().getFullYear()} SHYAM TECHNO PRINT All Right Reserved | Powered by{" "}
        <a href="#" className="text-red-500 hover:underline">
          Bharat Bizmart
        </a>
      </div>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/919654707061"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
      >
        <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-md sm:group-hover:block">
          Contact us
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:bg-green-600">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24zm-4.53 4.7c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.09.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.16z" />
          </svg>
        </span>
      </a>
    </footer>
  );
}