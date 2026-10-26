import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import heroImage from "../assets/images/hero.jpg";
import { waLink, site } from "../siteConfig";

const points = [
  "Walk-in print shop in Ruiru",
  "Design + print + branding in one place",
  "Quote on WhatsApp, fast reply",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
            Printing &amp; Branding · Ruiru, Kenya
          </p>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Print that makes your business look{" "}
            <span className="text-brand">serious.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            {site.name} designs and prints business cards, banners, signage, branded apparel and
            more, plus custom websites and software — for businesses, schools, churches and individuals across Ruiru and Nairobi.
          </p>

          <ul className="mt-6 space-y-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-slate-200">
                <FaCheckCircle className="shrink-0 text-brand" aria-hidden /> {p}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#quote"
              className="rounded-full bg-brand px-8 py-4 text-center font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
            >
              Request a Quote
            </a>
            <a
              href={waLink("Hello EProz Digital, I would like to enquire about printing.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              <FaWhatsapp className="text-xl text-green-400" aria-hidden /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <img
            src={heroImage}
            alt="Printing equipment and finished prints"
            width="1280"
            height="720"
            fetchPriority="high"
            className="w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
