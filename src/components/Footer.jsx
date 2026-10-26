import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { site, waLink } from "../siteConfig";

const nav = [["Services", "#services"], ["Software", "#software"], ["Print Work", "#work"], ["How It Works", "#process"], ["About", "#about"], ["Contact", "#contact"]];

export default function Footer() {
  const socials = [
    { href: site.social.facebook, icon: FaFacebookF, label: "Facebook" },
    { href: site.social.instagram, icon: FaInstagram, label: "Instagram" },
    { href: site.social.tiktok, icon: FaTiktok, label: "TikTok" },
    { href: waLink(), icon: FaWhatsapp, label: "WhatsApp" },
  ].filter((s) => s.href);

  return (
    <footer className="bg-ink text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-2xl font-extrabold text-white">
            EProz<span className="text-brand">Digital</span>
          </p>
          <p className="mt-3 max-w-sm leading-7">Printing, branding, software development and cyber services in Ruiru, Kenya.</p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-brand">
                <s.icon aria-hidden />
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer">
          <p className="font-semibold text-white">Quick links</p>
          <ul className="mt-4 space-y-2">
            {nav.map(([n, h]) => (
              <li key={h}><a href={h} className="hover:text-white">{n}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-2">
            {site.phones.map((p) => <li key={p.intl}><a href={`tel:+${p.intl}`} className="hover:text-white">{p.display}</a></li>)}
            <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-sm md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Website by <a href={site.developer.url} target="_blank" rel="noreferrer" className="font-semibold text-white hover:text-brand">{site.developer.name}</a></p>
        </div>
      </div>
    </footer>
  );
}
