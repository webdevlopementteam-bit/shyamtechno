"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendEnquiry } from "@/lib/web3forms";

export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`.trim(),
      first_name: formData.get("firstName"),
      last_name: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("mobile"),
      message: formData.get("message"),
      subject: "New Enquiry from Shyam Techno Print Website",
    };

    const anySucceeded = await sendEnquiry(payload);
    setSubmitting(false);

    if (anySucceeded) {
      router.push("/thank-you");
    } else {
      setError("Something went wrong while sending your message. Please try again or call us directly.");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          className="h-14 w-full border border-gray-300 px-4 outline-none transition focus:border-red-600"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          className="h-14 w-full border border-gray-300 px-4 outline-none transition focus:border-red-600"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="h-14 w-full border border-gray-300 px-4 outline-none transition focus:border-red-600"
      />

      <input
        type="text"
        name="mobile"
        placeholder="Mobile Number"
        required
        className="h-14 w-full border border-gray-300 px-4 outline-none transition focus:border-red-600"
      />

      <textarea
        name="message"
        rows={6}
        placeholder="Message"
        required
        className="w-full border border-gray-300 p-4 outline-none transition focus:border-red-600"
      ></textarea>

      {/* Dummy Captcha */}
      <div className="flex h-20 max-w-sm items-center gap-4 rounded border border-gray-300 bg-white px-5">
        <input type="checkbox" className="h-6 w-6" />

        <span className="text-gray-700">I'm not a robot</span>
      </div>

      {error && <p className="text-sm font-medium text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="rounded bg-red-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
