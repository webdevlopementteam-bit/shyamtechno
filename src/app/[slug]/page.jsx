import { notFound } from "next/navigation";
import products from "@/data/products";
import ProductDetail from "@/components/ProductDetail";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) return {};

  if (product.meta) {
    return {
      title: product.meta.title,
      description: product.meta.description,
      keywords: product.meta.keywords,
      alternates: { canonical: `/${product.slug}` },
    };
  }

  return {
    title: `${product.name} | Shyam Techno Print`,
    description: `Shyam Techno Print offers ${product.name} in Faridabad. High-quality, durable machines with 17+ years of manufacturing experience. Contact us for a quote today!`,
    keywords: [product.keyword || product.name, "Shyam Techno Print"],
    alternates: { canonical: `/${product.slug}` },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
