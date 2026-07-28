import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 12);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
             Products
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-red-600"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Explore our premium range of high-quality products designed to meet
            your everyday needs with reliability and excellence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <Link
              href={`/${product.slug}`}
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-72 overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="border-t p-5">
                <h3 className="text-center text-lg font-semibold text-gray-900 transition-colors group-hover:text-red-600">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center rounded-full bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}