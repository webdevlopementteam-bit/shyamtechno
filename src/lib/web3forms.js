// Both Web3Forms access keys — every enquiry is sent to both inboxes.
export const WEB3FORMS_ACCESS_KEYS = [
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

// Sends the payload with every access key. Resolves true if at least one succeeded.
export async function sendEnquiry(payload) {
  const results = await Promise.allSettled(
    WEB3FORMS_ACCESS_KEYS.map((key) => submitToWeb3Forms(key, payload))
  );
  return results.some((r) => r.status === "fulfilled");
}

// Any component can open the enquiry popup by calling this.
export const OPEN_ENQUIRY_EVENT = "open-enquiry-popup";
export function openEnquiryPopup() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_ENQUIRY_EVENT));
  }
}
