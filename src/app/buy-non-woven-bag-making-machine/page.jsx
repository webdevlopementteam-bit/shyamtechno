import Image from "next/image";
import Link from "next/link";

const LINK_CLASS =
  "text-red-600 font-semibold underline decoration-2 underline-offset-2 hover:text-red-700";

const faqs = [
  {
    question: "What is a Non Woven Bag Making Machine?",
    answer:
      "A Non Woven Bag Making Machine is an industrial machine that converts non woven fabric rolls into finished reusable bags through automated fabric feeding, folding, ultrasonic sealing, cutting, and handle punching.",
  },
  {
    question: "What raw material does a Non Woven Bag Making Machine use?",
    answer:
      "Non woven fabric rolls are the primary raw material, along with handles and thread depending on the bag design.",
  },
  {
    question:
      "What is the difference between automatic and semi-automatic non woven bag machines?",
    answer:
      "Automatic machines offer higher production speed and lower labor requirement, making them ideal for large manufacturers, while semi-automatic machines need moderate labor and suit startups or small-scale businesses with lower investment.",
  },
  {
    question: "How many bags can a Non Woven Bag Making Machine produce per day?",
    answer:
      "Production output depends on the machine model and automation level, with fully automatic machines typically producing significantly more bags per hour than semi-automatic models. Contact Shyam Techno Print for model-specific output figures.",
  },
  {
    question: "Are non woven bags environmentally friendly?",
    answer:
      "Yes, non woven bags are reusable, durable, and biodegradable, making them a more eco-friendly alternative to single-use plastic bags.",
  },
  {
    question: "Which industries use non woven bags?",
    answer:
      "Retail stores, supermarkets, healthcare facilities, garment shops, corporate businesses, and promotional or exhibition events widely use non woven bags for shopping, packaging, and branding purposes.",
  },
  {
    question:
      "Can a Non Woven Bag Making Machine produce different bag sizes and types?",
    answer:
      "Yes, the machine can be configured to produce customizable bag sizes, including D-cut, W-cut, and box-style bags, based on business requirements.",
  },
  {
    question: "Is non woven bag manufacturing profitable in India?",
    answer:
      "Yes, non woven bag manufacturing is profitable in India due to rising eco-friendly packaging demand, low production costs, and increasing plastic bag restrictions across states.",
  },
  {
    question: "Does Shyam Techno Print provide installation and after-sales support?",
    answer:
      "Yes, Shyam Techno Print provides complete installation guidance, operator training, and ongoing technical support for every Non Woven Bag Making Machine purchased.",
  },
  {
    question: "Where can I buy a Non Woven Bag Making Machine in Faridabad?",
    answer:
      "Shyam Techno Print, located in Faridabad with 17+ years of manufacturing experience, supplies Non Woven Bag Making Machines across Faridabad, Delhi NCR, and pan-India.",
  },
  {
    question:
      "Who is the best Non Woven Bag Making Machine manufacturer in Faridabad?",
    answer:
      "Shyam Techno Print is one of the best Non Woven Bag Making Machine manufacturers in Faridabad, offering fully automatic and semi-automatic machines backed by 17+ years of industry experience, advanced ultrasonic sealing technology, and complete after-sales support across Faridabad, Delhi NCR, and India.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata = {
  title: "Buy Non Woven Bag Making Machine in Faridabad | Shyam Techno Print - Shyam Techno",
  description:
    "Buy Non Woven Bag Making Machine in Faridabad from Shyam Techno Print. Fully automatic & semi-automatic models, 17+ yrs experience. Enquire now!",
  keywords: [
    "Non Woven Bag Making Machine",
    "Non Woven Bag Making Machine in Faridabad",
  ],
  alternates: {
    canonical:
      "https://www.shyamtechnoprint.co.in/buy-non-woven-bag-making-machine/",
  },
};

export default function BuyNonWovenBagMakingMachinePage() {
  return (
    <section className="py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl px-5">
        <div className="relative mb-8 h-64 md:h-96 rounded-xl border bg-white shadow">
          <Image
            src="/products/Non Woven Bag Making Machine .png"
            alt="Non Woven Bag Making Machine"
            fill
            className="object-contain p-6"
            priority
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Buy Non Woven Bag Making Machine in Faridabad | Shyam Techno Print
        </h1>

        <h2 className="text-2xl font-bold mb-4">
          Buy Non Woven Bag Making Machine Manufacturer in Faridabad | Shyam
          Techno Print
        </h2>
        <p className="text-gray-600 leading-8 mb-4">
          The demand for eco-friendly packaging solutions is increasing
          rapidly across India. As businesses move away from plastic bags,
          the need for a reliable{" "}
          <Link href="/contact-us" className={LINK_CLASS}>
            Non Woven Bag Making Machine
          </Link>{" "}
          has grown significantly. Non woven bags are widely used in
          supermarkets,
          retail stores, medical industries, garment shops, and promotional
          campaigns because they are reusable, durable, and environmentally
          friendly.
        </p>
        <p className="text-gray-600 leading-8 mb-4">
          If you are planning to start a non woven bag manufacturing
          business or expand your current production capacity, choosing the
          right machine is one of the most important decisions. A quality
          machine helps increase production, reduce labor costs, and
          improve product quality.
        </p>
        <p className="text-gray-600 leading-8 mb-10">
          With more than 17 years of experience,{" "}
          <Link href="/" className={LINK_CLASS}>
            Shyam Techno Print
          </Link>{" "}
          has become a trusted manufacturer and supplier of advanced bag
          making machines for businesses across Faridabad, Delhi NCR, and
          India.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          What is a Non Woven Bag Making Machine?
        </h2>
        <p className="text-gray-600 leading-8 mb-4">
          A{" "}
          <Link href="/contact-us" className={LINK_CLASS}>
            Non Woven Bag Making Machine in Faridabad
          </Link>{" "}
          is an industrial machine designed to convert non woven fabric
          rolls into finished bags. These bags are strong, lightweight,
          reusable, and suitable for a wide range of industries.
        </p>
        <p className="text-gray-600 leading-8 mb-10">
          The machine automatically performs multiple processes including
          fabric feeding, folding, ultrasonic sealing, cutting, handle
          punching, and bag finishing. Modern machines can produce a large
          number of bags with minimal human intervention, improving
          efficiency and reducing production costs.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Why is the Demand Growing in India?
        </h2>
        <p className="text-gray-600 leading-8 mb-4">
          The demand for non woven bags has increased due to environmental
          awareness and government restrictions on single-use plastic bags.
        </p>
        <p className="text-gray-600 leading-8 mb-10">
          Key reasons include growing focus on sustainable packaging,
          plastic ban in many regions, rising demand from retailers and
          supermarkets, reusable and durable bag solutions, and
          cost-effective packaging options. Because of these factors, many
          entrepreneurs are investing in non woven bag manufacturing
          businesses across India.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          How Does a Non Woven Bag Making Machine Work?
        </h2>
        <ol className="space-y-3 text-gray-600 leading-8 list-decimal pl-5 mb-10">
          <li>
            <strong className="text-gray-900">
              Step 1 – Fabric Roll Feeding:
            </strong>{" "}
            The non woven fabric roll is loaded into the machine.
          </li>
          <li>
            <strong className="text-gray-900">Step 2 – Folding:</strong> The
            fabric is folded according to the required bag design and size.
          </li>
          <li>
            <strong className="text-gray-900">
              Step 3 – Ultrasonic Sealing:
            </strong>{" "}
            Advanced ultrasonic technology creates strong and neat seals.
          </li>
          <li>
            <strong className="text-gray-900">Step 4 – Cutting:</strong> The
            fabric is cut into the desired dimensions.
          </li>
          <li>
            <strong className="text-gray-900">
              Step 5 – Handle Making:
            </strong>{" "}
            Handles are punched or attached depending on the bag type.
          </li>
          <li>
            <strong className="text-gray-900">
              Step 6 – Finished Bag Collection:
            </strong>{" "}
            Ready-to-use bags are collected for packing and distribution.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mb-4">
          Benefits of a Non Woven Bag Making Machine
        </h2>
        <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-5 mb-10">
          <li>
            <strong className="text-gray-900">High Production Output:</strong>{" "}
            Modern machines are designed for continuous and high-speed
            production.
          </li>
          <li>
            <strong className="text-gray-900">
              Eco-Friendly Manufacturing:
            </strong>{" "}
            Supports the production of reusable and environmentally
            responsible bags.
          </li>
          <li>
            <strong className="text-gray-900">Reduced Labor Cost:</strong>{" "}
            Automation minimizes manual work and improves efficiency.
          </li>
          <li>
            <strong className="text-gray-900">Consistent Bag Quality:</strong>{" "}
            Every bag is produced with accurate dimensions and strong
            sealing.
          </li>
          <li>
            <strong className="text-gray-900">
              Better Business Profitability:
            </strong>{" "}
            Lower operating costs and higher output increase profit margins.
          </li>
          <li>
            <strong className="text-gray-900">Easy Operation:</strong>{" "}
            Machines are designed with user-friendly controls and simple
            operation.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">
          Key Features of Non Woven Bag Making Machine
        </h2>
        <p className="text-gray-600 leading-8 mb-10">
          Fully automatic operation, PLC control system, ultrasonic sealing
          technology, adjustable bag sizes, high-speed production, durable
          heavy-duty structure, energy-efficient performance, low
          maintenance requirements, easy-to-use control panel, and stable
          reliable operation.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Types of Non Woven Bag Making Machines
        </h2>
        <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-5 mb-10">
          <li>
            <strong className="text-gray-900">
              Fully Automatic Machine:
            </strong>{" "}
            Suitable for large-scale production units with maximum
            productivity and less labor requirement.
          </li>
          <li>
            <strong className="text-gray-900">
              Semi-Automatic Machine:
            </strong>{" "}
            Perfect for startups and medium-sized businesses with affordable
            investment and flexible production.
          </li>
          <li>
            <strong className="text-gray-900">
              D-Cut Bag Making Machine:
            </strong>{" "}
            Used for manufacturing D-cut shopping bags commonly seen in
            retail stores.
          </li>
          <li>
            <strong className="text-gray-900">
              W-Cut Bag Making Machine:
            </strong>{" "}
            Ideal for producing strong carry bags with improved load
            capacity.
          </li>
          <li>
            <strong className="text-gray-900">Box Bag Making Machine:</strong>{" "}
            Designed for premium shopping and packaging applications.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">
          Industries That Use Non-Woven Bags
        </h2>
        <p className="text-gray-600 leading-8 mb-10">
          Non woven bag making machine in faridabad are widely used across
          retail stores, supermarkets, garment industry, healthcare sector,
          corporate businesses, and exhibitions and events for shopping
          bags, grocery bags, packaging, medical packaging, promotional
          bags, and brand awareness activities.
        </p>

        <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
        <div className="overflow-x-auto rounded-xl border mb-4">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="px-6 py-3 font-semibold text-gray-900">
                  Specification
                </th>
                <th className="px-6 py-3 font-semibold text-gray-900">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Machine Type", "Automatic / Semi-Automatic"],
                ["Raw Material", "Non Woven Fabric"],
                ["Sealing Type", "Ultrasonic"],
                ["Control System", "PLC Based"],
                ["Bag Size", "Customizable"],
                ["Machine Structure", "Heavy Duty"],
                ["Power", "Energy Efficient"],
                ["Production Speed", "High Speed (Model Dependent)"],
              ].map((row, rIndex) => (
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
        <p className="text-gray-600 leading-8 mb-10">
          Specifications may vary according to customer requirements and
          machine model. Contact us for detailed specifications.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Automatic vs Semi-Automatic: Quick Comparison
        </h2>
        <div className="overflow-x-auto rounded-xl border mb-10">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="px-6 py-3 font-semibold text-gray-900">
                  Feature
                </th>
                <th className="px-6 py-3 font-semibold text-gray-900">
                  Automatic
                </th>
                <th className="px-6 py-3 font-semibold text-gray-900">
                  Semi-Automatic
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Production Speed", "High", "Moderate"],
                ["Labor Requirement", "Low", "Medium"],
                ["Investment", "Higher", "Lower"],
                ["Best For", "Large Manufacturers", "Startups & SMEs"],
              ].map((row, rIndex) => (
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

        <h2 className="text-2xl font-bold mb-4">
          Is Non Woven Bag Manufacturing Profitable?
        </h2>
        <p className="text-gray-600 leading-8 mb-10">
          Yes, the non woven bag business has strong growth potential due to
          increasing demand for eco-friendly packaging. Major profit factors
          include growing market demand, low production cost, reusable
          product category, high-volume sales opportunities, and multiple
          customer industries. Businesses that invest in quality machinery
          often achieve better returns on investment.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          How to Choose the Right Machine?
        </h2>
        <p className="text-gray-600 leading-8 mb-10">
          Consider these important factors before purchasing: production
          capacity that matches your daily requirements, automation level
          based on your budget, heavy-duty machine build quality for
          long-term performance, reliable after-sales technical support,
          easy availability of spare parts, and manufacturer reputation and
          experience.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Why Choose Shyam Techno Print?
        </h2>
        <p className="text-gray-600 leading-8 mb-4">
          <Link href="/" className={LINK_CLASS}>
            Shyam Techno Print
          </Link>{" "}
          has been serving businesses across Faridabad, Delhi NCR, and India
          for over 17 years.
        </p>
        <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-5 mb-10">
          <li>
            <strong className="text-gray-900">
              17+ Years of Industry Experience:
            </strong>{" "}
            Extensive knowledge in machine manufacturing and customer
            support.
          </li>
          <li>
            <strong className="text-gray-900">Advanced Engineering:</strong>{" "}
            Machines built using modern technology and quality components.
          </li>
          <li>
            <strong className="text-gray-900">Customized Solutions:</strong>{" "}
            Machine configurations tailored to your production needs.
          </li>
          <li>
            <strong className="text-gray-900">Reliable Performance:</strong>{" "}
            Designed for continuous operation and long service life.
          </li>
          <li>
            <strong className="text-gray-900">Technical Assistance:</strong>{" "}
            Installation support and guidance provided.
          </li>
          <li>
            <strong className="text-gray-900">Competitive Pricing:</strong>{" "}
            High-quality machines at industry-competitive prices.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">
          Expert Tips for Better Production
        </h2>
        <p className="text-gray-600 leading-8 mb-10">
          Use premium-quality non woven fabric, schedule preventive
          maintenance regularly, train machine operators properly, monitor
          production quality daily, maintain spare parts inventory, and
          always follow recommended operating procedures.
        </p>

        <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
        <p className="text-gray-600 leading-8 mb-10">
          Avoid purchasing a machine based only on price, ignoring
          production capacity requirements, using low-quality raw
          materials, skipping regular maintenance, not checking manufacturer
          support services, and choosing inexperienced machine suppliers.
        </p>

        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 mb-10">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-2">
                {index + 1}. {faq.question}
              </h3>
              <p className="text-gray-600 leading-8">{faq.answer}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-gray-600 leading-8 mb-4">
          The demand for eco-friendly packaging solutions is creating
          significant opportunities for manufacturers and entrepreneurs
          across India. Investing in a reliable Non Woven Bag Making Machine
          can help improve productivity, reduce operating costs, and
          increase profitability.
        </p>
        <p className="text-gray-600 leading-8 mb-4">
          Whether you are starting a new venture or expanding an existing
          manufacturing unit, choosing a trusted and experienced machine
          manufacturer is essential for long-term success.
        </p>
        <p className="text-gray-600 leading-8">
          With 17+ years of expertise, Shyam Techno Print delivers reliable,
          efficient, and high-performance non woven bag making machines
          designed to meet modern production requirements. Contact us today
          through the details on this page for expert guidance and
          customized machine solutions.
        </p>
      </div>
    </section>
  );
}
