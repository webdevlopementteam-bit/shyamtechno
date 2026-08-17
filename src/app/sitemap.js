import products from "@/data/products";
import blogPosts from "@/data/blog";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const STATIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about-us/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact-us/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog/", priority: 0.7, changeFrequency: "weekly" },
];

const STANDALONE_PAGES = [
  "/grocery-paper-bag-making-machine/",
  "/paper-bag-making-machines/",
  "/non-woven-bag-making-machine-rajasthan/",
  "/butter-paper-sheet-cutting-machine-mumbai/",
];

export default function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const productEntries = products.map((product) => ({
    url: `${SITE_URL}/${product.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const standaloneEntries = STANDALONE_PAGES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}/${post.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...productEntries, ...standaloneEntries, ...blogEntries];
}
