"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const WEB3FORMS_ACCESS_KEYS = [
  "ba9c38e5-d4f0-416a-bceb-85bc972d9d00",
  "bbeaa864-720a-4f6e-b703-8ea3360033e7",
];

async function submitToWeb3Forms(accessKey, payload) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ ...payload, access_key: accessKey }),
  });
  const data = await res.json();
  if (!data.success) {
    throw new Error(data.message || "Submission failed");
  }
  return data;
}

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

    const results = await Promise.allSettled(
      WEB3FORMS_ACCESS_KEYS.map((key) => submitToWeb3Forms(key, payload))
    );

    setSubmitting(false);

    const anySucceeded = results.some((r) => r.status === "fulfilled");
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
