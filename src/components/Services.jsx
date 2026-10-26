import { FaPrint, FaTshirt, FaPalette, FaBullhorn, FaCamera, FaLaptop } from "react-icons/fa";
import { Reveal, SectionHead } from "./Reveal";
import { waLink } from "../siteConfig";

const services = [
  { icon: FaPrint, title: "Printing", items: "Business cards, flyers, posters, brochures, banners, stickers", ask: "printing" },
  { icon: FaTshirt, title: "Apparel & Merchandise", items: "T-shirts, hoodies, jerseys, caps, uniforms, branded mugs", ask: "apparel or merchandise printing" },
  { icon: FaPalette, title: "Graphic Design", items: "Logos, stationery, social media graphics, marketing materials", ask: "graphic design" },
  { icon: FaBullhorn, title: "Signage & Branding", items: "Shop signboards, vehicle branding, roll-up banners", ask: "signage or branding" },
  { icon: FaCamera, title: "Photography", items: "Portraits, events, product photos and photo printing", ask: "photography" },
  { icon: FaLaptop, title: "Cyber Services", items: "eCitizen, KRA, HELB, CV writing, online applications, scanning", ask: "cyber services" },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHead
            eyebrow="What we do"
            title="Everything your business needs, under one roof"
            text="From first design to finished product — one team, one place to collect."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="group h-full rounded-2xl border border-slate-200 bg-paper p-7 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-xl text-brand">
                  <s.icon aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{s.items}</p>
                <a
                  href={waLink(`Hello EProz Digital, I need ${s.ask}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-sm font-semibold text-brand-dark hover:underline"
                >
                  Ask about {s.title.toLowerCase()} →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
