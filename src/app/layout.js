import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Shyam Techno Print",
  description:
    "Shyam Techno Print - Faridabad based manufacturer of Paper Bag, Flexo Printing & Medical Pouch Making Machines. 17+ yrs experience. Get a quote today!",
  verification: {
    google: "JT39crNU4mypZwe8-puss76YNKTTEcOCNAHikmD9MGU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><Navbar/>{children}<Footer/></body>
    </html>
  );
}
