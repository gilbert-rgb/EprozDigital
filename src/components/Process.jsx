import { Reveal, SectionHead } from "./Reveal";

const steps = [
  { n: "01", title: "Tell us what you need", text: "Message us on WhatsApp or fill the quote form with your job, quantity and deadline." },
  { n: "02", title: "Get a quote & design proof", text: "We confirm the price and send a design proof for your approval before anything is printed." },
  { n: "03", title: "We produce it", text: "Printing, cutting, pressing or mounting is done in-house at our Ruiru shop." },
  { n: "04", title: "Collect your order", text: "Pick it up from the shop and check it on the spot. Ask us about delivery within Ruiru and Nairobi." },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-ink py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHead light eyebrow="How it works" title="Simple, clear and on time" />
        </Reveal>
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <li className="h-full list-none rounded-2xl border border-white/10 bg-ink-soft p-7">
                <span className="font-display text-3xl font-extrabold text-brand">{s.n}</span>
                <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
