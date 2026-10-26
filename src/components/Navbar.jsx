import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/eprozrrr.png";

const links = [
  { name: "Services", href: "#services" },
  { name: "Software", href: "#software" },
  { name: "Print Work", href: "#work" },
  { name: "How It Works", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 lg:px-8" aria-label="Main">
        <a href="#home" className="flex items-center" aria-label="EProz Digital home">
          <img src={logo} alt="EProz Digital" width="160" height="90" className="h-12 w-auto md:h-14" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#quote"
          className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark md:block"
        >
          Get a Quote
        </a>

        <button
          className="p-2 text-2xl text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <div className={`overflow-hidden bg-ink transition-all duration-300 md:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <ul className="border-t border-white/10 px-5 pb-5">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-slate-200">
                {l.name}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-brand py-3 text-center font-semibold text-white"
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
