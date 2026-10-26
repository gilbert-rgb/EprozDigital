import { useEffect, useState } from "react";
import { FaTimes, FaWhatsapp } from "react-icons/fa";
import { Reveal, SectionHead } from "./Reveal";
import { waLink } from "../siteConfig";
import businessCards from "../assets/images/business-cards.jpg";
import banners from "../assets/images/banners.jpg";
import tshirts from "../assets/images/tshirts.jpg";
import logoDesign from "../assets/images/logo-design.jpg";
import mounting from "../assets/images/mounting.jpg";
import vehicleBranding from "../assets/images/vehicle-branding.jpg";
import flyers from "../assets/images/flyers.jpg";
import brochures from "../assets/images/brochures.jpg";
import mugs from "../assets/images/mugs.jpg";
import stickers from "../assets/images/stickers.jpg";
import stationery from "../assets/images/stationery.jpg";
import signboards from "../assets/images/signboards.jpg";

// TIP: replace these images with photos of your REAL jobs (same file names work).
const projects = [
  { image: businessCards, title: "Business Cards", group: "Print", text: "Premium finishes that leave a strong first impression." },
  { image: flyers, title: "Flyers & Posters", group: "Print", text: "Eye-catching marketing material for businesses and events." },
  { image: brochures, title: "Brochures", group: "Print", text: "Professionally folded and finished company brochures." },
  { image: stationery, title: "Corporate Stationery", group: "Print", text: "Letterheads, envelopes, notebooks and office branding." },
  { image: banners, title: "Roll-Up Banners", group: "Signage", text: "For exhibitions, conferences, promotions and events." },
  { image: signboards, title: "Shop Signboards", group: "Signage", text: "Indoor and outdoor signs that raise your visibility." },
  { image: vehicleBranding, title: "Vehicle Branding", group: "Signage", text: "Vehicle wraps that advertise your business on the road." },
  { image: tshirts, title: "Custom T-Shirts", group: "Apparel & Gifts", text: "Branded shirts for schools, churches and companies." },
  { image: mugs, title: "Branded Mugs", group: "Apparel & Gifts", text: "Personalised mugs for gifts and corporate branding." },
  { image: stickers, title: "UV DTF Stickers", group: "Apparel & Gifts", text: "Durable, waterproof transfers for bottles, tumblers and more." },
  { image: mounting, title: "Photo Mounting", group: "Apparel & Gifts", text: "Graduation and portrait photos mounted and ready to display." },
  { image: logoDesign, title: "Logo Design", group: "Design", text: "Memorable logos built to last across print and digital." },
];
const groups = ["All", "Print", "Signage", "Apparel & Gifts", "Design"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const shown = projects.filter((p) => filter === "All" || p.group === filter);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="work" className="scroll-mt-20 bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Our work"
            title="What we produce for clients"
            text="A look at the kind of work we handle every week. Tap any item for details."
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter work">
          {groups.map((g) => (
            <button
              key={g}
              role="tab"
              aria-selected={filter === g}
              onClick={() => setFilter(g)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === g ? "bg-ink text-white" : "bg-white text-slate-700 ring-1 ring-slate-200 hover:ring-brand"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((p) => (
            <button
              key={p.title}
              onClick={() => setActive(p)}
              className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-slate-200 transition hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden bg-slate-100">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-dark">{p.group}</p>
                <h3 className="mt-1 font-display font-bold text-ink">{p.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div className="relative grid max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white md:grid-cols-2" onClick={(e) => e.stopPropagation()}>
            <img src={active.image} alt={active.title} className="max-h-[50vh] w-full bg-slate-100 object-contain md:max-h-[90vh]" />
            <div className="flex flex-col justify-center p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-dark">{active.group}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">{active.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{active.text}</p>
              <a
                href={waLink(`Hello EProz Digital, I would like a quote for ${active.title}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark"
              >
                <FaWhatsapp aria-hidden /> Get a quote for this
              </a>
            </div>
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink shadow"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
