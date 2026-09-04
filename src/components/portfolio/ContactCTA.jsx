import React, { useState } from "react";

const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "";
const fallbackRecipient = import.meta.env.VITE_CONTACT_EMAIL || "hello@example.com";

export default function ContactCTA() {
  const [form, setForm] = useState({ name: "", email: "", business: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const buildMailtoLink = (payload) => {
    const subject = encodeURIComponent(`New website enquiry - ${payload.name}`);
    const body = encodeURIComponent(
      `New enquiry from your portfolio contact form.\n\n` +
      `Name: ${payload.name}\n` +
      `Email: ${payload.email}\n` +
      `Business: ${payload.business || "(not specified)"}\n`
    );

    return `mailto:${fallbackRecipient}?subject=${subject}&body=${body}`;
  };

  const submit = async (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const business = form.business.trim();

    if (!name || !email) {
      setError("Please add your name and email so I can reply.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSending(true);
    setError("");

    const payload = { name, email, business };
    const mailtoLink = buildMailtoLink(payload);

    try {
      if (contactEndpoint) {
        const response = await fetch(contactEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const details = await response.text().catch(() => "");
          throw new Error(details || "Failed to send message.");
        }
      } else {
        window.location.href = mailtoLink;
      }

      setSent(true);
    } catch (err) {
      const message = err?.message || "Something went wrong — please try again.";
      setError(message);

      if (!contactEndpoint) {
        window.location.href = mailtoLink;
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-onyx py-20 text-gallery md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <span className="font-mono-tech text-[11px] tracking-[0.15em] uppercase text-vermillion">Get started</span>
        <h2 className="mt-2 font-heading text-4xl leading-tight md:text-5xl">Let's build your website.</h2>
        <p className="mt-3 max-w-md text-gallery/60">
          Tell me about your business and I'll reply within 48 hours with a plan. Flat $200 — finished in about a week.
        </p>

        {sent ? (
          <div className="mt-8 rounded-xl border border-gallery/15 p-6">
            <p className="font-heading text-2xl text-gallery">Thanks, {form.name || "there"}!</p>
            <p className="mt-2 text-sm text-gallery/60">I've got your details and will be in touch shortly to get your site started.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Your name" value={form.name} onChange={update("name")} placeholder="Jane Smith" />
              <Field label="Email" type="email" value={form.email} onChange={update("email")} placeholder="you@business.com" required />
            </div>
            <Field label="Your business" value={form.business} onChange={update("business")} placeholder="e.g. A café, a salon, a trades business…" />
            {error && <p className="text-sm text-vermillion">{error}</p>}
            <button type="submit" disabled={sending} className="mt-2 inline-flex items-center justify-center rounded-full bg-vermillion px-7 py-3.5 text-sm font-medium text-gallery transition-opacity hover:opacity-90 disabled:opacity-50">
              {sending ? "Sending…" : "Send my details — $200 site"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="font-mono-tech text-[10px] tracking-[0.15em] uppercase text-gallery/50">{label}</span>
      <input {...props} className="mt-2 w-full border-b border-gallery/20 bg-transparent pb-2 text-gallery placeholder:text-gallery/30 focus:border-vermillion focus:outline-none" />
    </label>
  );
}