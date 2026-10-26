import { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";
import { Reveal, SectionHead } from "./Reveal";
import { softwareProjects } from "../softwareProjects";
import { waLink } from "../siteConfig";


// Shows a poster (screenshot / icon) and, on hover, loads the real live site inside the card.
function Preview({ p }) {
  const box = useRef(null);
  const [scale, setScale] = useState(0.3);
  const [hover, setHover] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / 1280));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const poster = p.image ? (
    <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="h-full w-full object-cover object-top" />
  ) : (
    <div className="grid h-full place-items-center text-5xl text-white/25"><FaCode aria-hidden /></div>
  );

  return (
    <div
      ref={box}
      className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand/30 via-ink-soft to-ink"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      {poster}

      {/* Live site, rendered at desktop size and scaled to fit the card */}
      {p.live && hover && (
        <iframe
          src={p.live}
          title={`${p.title} live preview`}
          onLoad={() => setLoaded(true)}
          tabIndex={-1}
          style={{ width: 1280, height: 800, transform: `scale(${scale})`, transformOrigin: "top left" }}
          className={`pointer-events-none absolute left-0 top-0 border-0 bg-white transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}

      {/* Click anywhere on the preview to open the full project */}
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${p.title} live`}
          className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/70 via-transparent to-transparent p-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white shadow-lg">
            <FaExternalLinkAlt aria-hidden /> {hover ? "Click to open full site" : "Hover to preview · tap to open"}
          </span>
        </a>
      )}
      {!p.live && p.github && (
        <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} source code`}
          className="absolute inset-0 flex items-end justify-center p-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink shadow-lg">
            <FaGithub aria-hidden /> View source code
          </span>
        </a>
      )}
    </div>
  );
}

export default function Software() {
  return (
    <section id="software" className="scroll-mt-20 bg-ink py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHead
            light
            eyebrow="Software development"
            title="Websites & web applications built for real businesses"
            text="Beyond print, we build custom websites, web applications and business systems. Hover over a project to preview it live, and click to open the full app."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {softwareProjects.map((p, i) => {
            return (
              <Reveal key={p.title} delay={(i % 3) * 0.06}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-soft transition hover:-translate-y-1 hover:border-brand/50">
                  <Preview p={p} />

                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">{p.type}</p>
                    <h3 className="mt-1 font-display text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{p.text}</p>
                    {p.github && p.live && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white">
                        <FaGithub aria-hidden /> Source code
                      </a>
                    )}
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <li key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">{t}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-xl font-bold">Need a website or system for your business?</h3>
              <p className="mt-1 text-slate-300">Tell us what you want to build and we'll send a quote.</p>
            </div>
            <a
              href={waLink("Hello EProz Digital, I need a website / web application built.")}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-full bg-brand px-7 py-3 font-semibold hover:bg-brand-dark"
            >
              Start a project
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
