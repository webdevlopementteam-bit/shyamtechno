import Image from "next/image";
import Link from "next/link";
import blogPosts from "@/data/blog";

export const metadata = {
  title: "Blog - Packaging & Printing Machine Insights | Shyam Techno Print",
  description:
    "Read expert insights on Paper Bag,Tissue Bag, Flexo & Offset Printing Machines. Latest updates, tips & industry trends from Shyam Techno Print, Faridabad.",
  keywords: [
    "Blog",
    "printing machine industry updates",
    "packaging machine tips",
    "Shyam Techno Print",
  ],
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 text-center">
          <h1 className="text-5xl font-bold">Blog</h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-red-600" />
        </div>

        {blogPosts.length === 0 ? (
          <p className="mx-auto max-w-2xl text-center text-gray-600 leading-8">
            We're working on packaging and printing machine insights,
            industry updates, and tips from Shyam Techno Print. Check back
            soon, or{" "}
            <Link
              href="/contact-us"
              className="text-red-600 font-semibold underline"
            >
              contact us
            </Link>{" "}
            in the meantime.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow transition hover:-translate-y-1 hover:shadow-xl"
              >
                {post.image && (
                  <div className="relative h-56 bg-white">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-contain p-5 transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col border-t p-6">
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-red-600">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-7 mb-4 flex-1">
                    {post.description}
                  </p>
                  <span className="text-red-600 font-semibold">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
