"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { X, Phone, Send } from "lucide-react";
import products from "@/data/products";
import { sendEnquiry, OPEN_ENQUIRY_EVENT } from "@/lib/web3forms";

const AUTO_OPEN_DELAY_MS = 8000;
const SEEN_KEY = "enquiryPopupSeen";

const inputClass =
  "h-12 w-full rounded-md border border-gray-300 bg-white px-4 text-gray-900 outline-none transition focus:border-[#c81e1e] focus:ring-2 focus:ring-[#c81e1e]/20";

export default function EnquiryPopup() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Open when any "ENQUIRY NOW" button fires the event
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(OPEN_ENQUIRY_EVENT, handler);
    return () => window.removeEventListener(OPEN_ENQUIRY_EVENT, handler);
  }, []);

  // Auto-open once per browser session (skip contact & thank-you pages)
  useEffect(() => {
    if (pathname === "/contact-us" || pathname === "/thank-you") return;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    if (seen) return;
    const t = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }, AUTO_OPEN_DELAY_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  // Close on Escape + lock background scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("mobile"),
      product: formData.get("product") || "Not specified",
      message: formData.get("message") || "-",
      page: typeof window !== "undefined" ? window.location.href : pathname,
      subject: "New Popup Enquiry from Shyam Techno Print Website",
    };

    const ok = await sendEnquiry(payload);
    setSubmitting(false);

    if (ok) {
      setOpen(false);
      router.push("/thank-you");
    } else {
      setError("Something went wrong. Please try again or call us directly.");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-popup-title"
    >
      <div
        className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-[#1a2456] px-6 pb-5 pt-6 text-white">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close enquiry form"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#c81e1e]"
          >
            <X className="h-5 w-5" />
          </button>
          <span className="text-sm font-bold uppercase tracking-wide text-[#ff5a5a]">
            Get a Free Quote
          </span>
          <h2 id="enquiry-popup-title" className="mt-1 pr-10 text-2xl font-bold">
            Enquire About Our Machines
          </h2>
          <a
            href="tel:+919654707061"
            className="mt-3 inline-flex items-center gap-2 text-sm text-white/85 hover:text-white"
          >
            <Phone className="h-4 w-4 fill-current" strokeWidth={0} />
            +91 9654707061
          </a>
        </div>
        <div className="h-1.5 bg-[#c81e1e]" />

        {/* Form */}
        <form className="space-y-4 px-6 py-6" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name *" required className={inputClass} />

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number *"
              required
              pattern="[0-9+\s-]{10,15}"
              title="Enter a valid mobile number"
              className={inputClass}
            />
            <input type="email" name="email" placeholder="Email *" required className={inputClass} />
          </div>

          <select name="product" defaultValue="" className={`${inputClass} cursor-pointer`}>
            <option value="">Select Machine (optional)</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            rows={3}
            placeholder="Your Requirement"
            className="w-full rounded-md border border-gray-300 p-4 text-gray-900 outline-none transition focus:border-[#c81e1e] focus:ring-2 focus:ring-[#c81e1e]/20"
          />

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#c81e1e] py-3.5 text-lg font-semibold text-white transition hover:bg-[#1a2456] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Send Enquiry"}
            {!submitting && <Send className="h-4 w-4" />}
          </button>
        </form>
      </div>
    </div>
  );
}
