import ProductDetail from "@/components/ProductDetail";

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
