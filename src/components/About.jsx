import { Reveal, SectionHead } from "./Reveal";
import { site } from "../siteConfig";

const values = [
  { title: "Proof before print", text: "You approve the design before we produce, so there are no costly surprises." },
  { title: "One-stop shop", text: "Design, printing, branding and cyber services handled together." },
  { title: "Local & reachable", text: "A real shop on Ruiru Bypass — walk in, call or WhatsApp us." },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <SectionHead
            eyebrow="About us"
            title="Your printing and branding partner in Ruiru"
            text={`${site.name} helps businesses, schools, churches and individuals make a lasting impression — through quality printing, thoughtful design, custom apparel and everyday cyber services, all under one roof.`}
          />
        </Reveal>
        <div className="space-y-5">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07}>
              <div className="rounded-2xl border-l-4 border-brand bg-paper p-6">
                <h3 className="font-display text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-1 leading-7 text-slate-600">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
