import Image from "next/image";
import Link from "next/link";

const LINK_CLASS =
  "text-red-600 font-semibold underline decoration-2 underline-offset-2 hover:text-red-700";
const LINK_LIMIT = 2;

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Auto-links up to LINK_LIMIT mentions of the product name (-> /contact-us)
// and up to LINK_LIMIT mentions of "Shyam Techno Print" (-> /), tracking the
// running total in `counters` so the whole page never exceeds LINK_LIMIT
// links per keyword. At most one link is placed per text block (paragraph),
// so the links spread across the page instead of clustering in one spot.
function linkifyText(text, productName, counters) {
  if (typeof text !== "string" || !text) return text;

  const targets = [
    productName && { match: productName, href: "/contact-us", key: "product" },
    { match: "Shyam Techno Print", href: "/", key: "brand" },
  ].filter(Boolean);

  const pattern = targets.map((t) => escapeRegExp(t.match)).join("|");
  if (!pattern) return text;

  const parts = text.split(new RegExp(`(${pattern})`, "g"));
  let usedInThisBlock = false;

  return parts.map((part, index) => {
    const target = targets.find((t) => t.match === part);
    if (target && !usedInThisBlock && counters[target.key] < LINK_LIMIT) {
      counters[target.key] += 1;
      usedInThisBlock = true;
      return (
        <Link key={index} href={target.href} className={LINK_CLASS}>
          {part}
        </Link>
      );
    }
    return part;
  });
}

export default function ProductDetail({ product }) {
  const counters = { product: 0, brand: 0 };
  const linkify = (text) =>
    linkifyText(text, product.keyword || product.name, counters);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 px-5">

        <div className=" rounded-xl p-10 shadow">
          <div className="relative h-[500px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div>
          {!product.hideHeading && (
            <h1 className="text-4xl font-bold mb-6">
              {product.name}
            </h1>
          )}

          {!product.hideHeading &&
            (Array.isArray(product.description) ? (
              <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-5">
                {product.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            ) : product.description || !product.specs ? (
              <p className="text-gray-600 leading-8">
                {product.description
                  ? linkify(product.description)
                  : "Product description goes here..."}
              </p>
            ) : null)}

          {product.specs && (
            <div className="mt-8 overflow-hidden rounded-xl border shadow">
              <div className="bg-red-600 px-6 py-5">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {product.specs.title}
                </h2>
              </div>
              {product.specs.intro && (
                <p className="px-6 pt-6 text-gray-600 leading-8">
                  {linkify(product.specs.intro)}
                </p>
              )}
              {product.specs.subtitle && (
                <p className="px-6 pt-6 text-lg font-bold text-gray-900">
                  {product.specs.subtitle}
                </p>
              )}
              <div className="overflow-x-auto p-6 pt-4">
                <table className="w-full border-collapse text-left">
                  {product.specs.columns && (
                    <thead>
                      <tr className="border-b bg-gray-50">
                        {product.specs.columns.map((col, cIndex) => (
                          <th
                            key={cIndex}
                            className="px-6 py-3 font-semibold text-gray-900"
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {product.specs.rows.map((row, rIndex) => (
                      <tr key={rIndex} className="border-b last:border-b-0">
                        {row.map((cell, cIndex) => (
                          <td
                            key={cIndex}
                            className={`px-6 py-4 align-top ${
                              cIndex === 0
                                ? "font-semibold text-gray-900 w-1/3"
                                : "text-gray-600"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

      </div>

      {Array.isArray(product.content) && (
        <div className="mx-auto max-w-7xl px-5 mt-16 space-y-10">
          {product.content.map((block, index) => (
            <div key={index}>
              {block.heading && (
                <h2 className="text-2xl font-bold mb-4">{block.heading}</h2>
              )}
              {block.paragraphs?.map((para, pIndex) => (
                <p key={pIndex} className="text-gray-600 leading-8 mb-4">
                  {linkify(para)}
                </p>
              ))}
              {block.items && (
                <div className="space-y-4">
                  {block.items.map((item, iIndex) => (
                    <div key={iIndex}>
                      <h3 className="font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-8">
                        {linkify(item.text)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {block.list && (
                <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-5">
                  {block.list.map((point, lIndex) => (
                    <li key={lIndex}>{point}</li>
                  ))}
                </ul>
              )}
              {block.table && (
                <div className="overflow-x-auto rounded-xl border mt-2">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        {block.table.columns.map((col, cIndex) => (
                          <th
                            key={cIndex}
                            className="px-6 py-3 font-semibold text-gray-900"
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.table.rows.map((row, rIndex) => (
                        <tr key={rIndex} className="border-b last:border-b-0">
                          {row.map((cell, cIndex) => (
                            <td
                              key={cIndex}
                              className={`px-6 py-4 align-top ${
                                cIndex === 0
                                  ? "font-semibold text-gray-900"
                                  : "text-gray-600"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {block.note &&
                (Array.isArray(block.note) ? (
                  block.note.map((n, nIndex) => (
                    <p
                      key={nIndex}
                      className="text-gray-600 leading-8 mt-4"
                    >
                      {linkify(n)}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600 leading-8 mt-4">
                    {linkify(block.note)}
                  </p>
                ))}
            </div>
          ))}
        </div>
      )}

      {Array.isArray(product.faqs) && (
        <div className="mx-auto max-w-7xl px-5 mt-16">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {product.faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-2">
                  Q{index + 1}. {faq.question}
                </h3>
                <p className="text-gray-600 leading-8">
                  {linkify(faq.answer)}
                </p>
                {faq.list && (
                  <ul className="space-y-2 text-gray-600 leading-8 list-disc pl-5 mt-2">
                    {faq.list.map((point, lIndex) => (
                      <li key={lIndex}>{point}</li>
                    ))}
                  </ul>
                )}
                {faq.note && (
                  <p className="text-gray-600 leading-8 mt-2">
                    {linkify(faq.note)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
