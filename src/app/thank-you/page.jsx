import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Thank You - Shyam Techno Print",
  description: "Thank you for contacting Shyam Techno Print. Our team will get back to you shortly.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you/" },
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-5 py-20">
      <div className="mx-auto max-w-xl text-center">
        <CheckCircle2 className="mx-auto mb-6 h-20 w-20 text-red-600" />

        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Thank You!
        </h1>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          Your message has been received. Our team at Shyam Techno Print will
          get back to you shortly.
        </p>

        <p className="mt-2 text-gray-600">
          For urgent enquiries, call us at{" "}
          <a href="tel:+919654707061" className="font-semibold text-red-600 hover:underline">
            +91 9654707061
          </a>
          .
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded bg-red-600 px-8 py-3 font-semibold text-white transition hover:bg-black"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
