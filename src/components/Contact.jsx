import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";
import { Reveal, SectionHead } from "./Reveal";
import { site, waLink } from "../siteConfig";

const options = ["Printing", "Apparel & Merchandise", "Graphic Design", "Signage & Branding", "Website / Software Development", "Photography", "Cyber Services", "Other"];
const field =
  "mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30";

export default function Contact() {
  const [f, setF] = useState({ name: "", service: options[0], details: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = `Hello EProz Digital, my name is ${f.name}.\nService: ${f.service}\nDetails: ${f.details}`;
    window.open(waLink(msg), "_blank", "noopener");
  };

  const info = [
    { icon: FaPhoneAlt, label: "Call", node: site.phones.map((p) => (
        <a key={p.intl} href={`tel:+${p.intl}`} className="block hover:text-brand-dark">{p.display}</a>
      )) },
    { icon: FaEnvelope, label: "Email", node: <a href={`mailto:${site.email}`} className="hover:text-brand-dark">{site.email}</a> },
    { icon: FaMapMarkerAlt, label: "Visit", node: site.address },
    ...(site.hours ? [{ icon: FaClock, label: "Hours", node: site.hours }] : []),
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHead eyebrow="Get in touch" title="Let's talk about your project" text="Send a quick brief and we'll reply with a quote on WhatsApp." />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <form id="quote" onSubmit={submit} className="scroll-mt-28 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-9">
              <h3 className="font-display text-xl font-bold text-ink">Request a quote</h3>
              <label className="mt-5 block text-sm font-semibold text-slate-700">
                Your name
                <input required value={f.name} onChange={set("name")} className={field} autoComplete="name" />
              </label>
              <label className="mt-4 block text-sm font-semibold text-slate-700">
                What do you need?
                <select value={f.service} onChange={set("service")} className={field}>
                  {options.map((o) => <option key={o}>{o}</option>)}
                </select>
              </label>
              <label className="mt-4 block text-sm font-semibold text-slate-700">
                Details (quantity, size, deadline)
                <textarea required rows={4} value={f.details} onChange={set("details")} className={field} />
              </label>
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700">
                <FaWhatsapp className="text-xl" aria-hidden /> Send on WhatsApp
              </button>
              <p className="mt-3 text-center text-sm text-slate-500">Opens WhatsApp with your message ready to send.</p>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              {info.map((i) => (
                <div key={i.label} className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-brand"><i.icon aria-hidden /></span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{i.label}</p>
                    <div className="mt-0.5 font-medium text-ink">{i.node}</div>
                  </div>
                </div>
              ))}
              <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
                <iframe
                  title="EProz Digital location map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                  loading="lazy"
                  className="h-64 w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
