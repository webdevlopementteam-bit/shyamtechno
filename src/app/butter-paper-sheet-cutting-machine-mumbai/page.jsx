import ProductDetail from "@/components/ProductDetail";

export const metadata = {
  title: "Butter Paper Sheet Cutting Machine in Mumbai With 2 Color Flexo | Shyam Techno Print",
  description:
    "Buy Butter Paper Sheet Cutting Machine in Mumbai with 2 Color Flexo from Shyam Techno Print. High-speed, fully automatic, and easy to operate. Contact us today!",
  keywords: [
    "Butter Paper Sheet Cutting Machine",
    "Butter Paper Sheet Cutting Machine in Mumbai",
  ],
  alternates: { canonical: "/butter-paper-sheet-cutting-machine-mumbai/" },
};

const product = {
  name: "Butter Paper Sheet Cutting Machine in Mumbai With 2 Color Flexo",
  image:
    "/products/Butter Paper sheet Cutting Machine With 2 Color Flexo .png",
  description: [
    "Digital Counting System",
    "High Speed",
    "Easy To Operate",
    "Full Automatic",
  ],
};

export default function ButterPaperSheetCuttingMachineMumbaiPage() {
  return <ProductDetail product={product} />;
}
