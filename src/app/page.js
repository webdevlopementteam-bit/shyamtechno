import Aboutus from "@/sections/About";
import CtaBanner from "@/sections/Ctabanner";
import HeroSection from "@/sections/Herosection";
import OurClients from "@/sections/Ourclients";
import FeaturedProducts from "@/sections/Products";
import ReviewsSection from "@/sections/ReviewSection";
import CounterSection from "@/sections/Stats";
import WhyChooseSection from "@/sections/Whychooseus";
import Image from "next/image";

export const metadata = {
  title: "Paper Bag Making Machine in Faridabad | Shyam Techno Print",
  description:
    "Shyam Techno Print - Faridabad based manufacturer of Paper Bag, Flexo Printing & Medical Pouch Making Machines. 17+ yrs experience. Get a quote today!",
  keywords: ["Shyam Techno Print", "Paper Bag Making Machine in Faridabad"],
};

export default function Home() {
  return (
    <>
    <HeroSection/>
    <Aboutus/>
    <FeaturedProducts/>
    <CtaBanner/>
    <WhyChooseSection/>
    <CounterSection/>
    <ReviewsSection/>
    <OurClients/>
    </>
  );
}
