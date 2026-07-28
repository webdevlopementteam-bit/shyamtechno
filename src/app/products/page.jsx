import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";

export const metadata = {
  title: "Packaging & Printing Machines - Full Product Range | Shyam Techno",
  description:
    "Explore Shyam Techno Print's complete range of Paper Bag, Flexo Printing, Non Woven Bag, Napkin Making Machines & Tissue Paper Bag. Quality manufacturing in Faridabad.",
  keywords: ["Product", "Our Products", "Shyam Techno Print"],
};

export default function ProductsPage() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 text-center">
          <h1 className="text-5xl font-bold">
            Our Products
          </h1>

          <div className="mx-auto mt-4 h-1 w-24 bg-red-600"></div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              href={`/${product.slug}`}
              key={product.id}
              className="group overflow-hidden rounded-xl bg-white shadow transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-72 bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-5 transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="border-t p-5">
                <h3 className="text-lg font-semibold text-center">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}