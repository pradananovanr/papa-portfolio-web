import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#16171d]/80 backdrop-blur-md border-b border-[#e5e4e7] dark:border-[#2e303a]">
      <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#"
          className="text-base font-semibold text-[#08060d] dark:text-[#f3f4f6] tracking-tight"
        >
          Novan<span className="text-[#aa3bff]">.dev</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 text-sm text-[#6b6375] dark:text-[#9ca3af]">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-[#aa3bff] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#6b6375] dark:text-[#9ca3af]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#e5e4e7] dark:border-[#2e303a] bg-white dark:bg-[#16171d]">
          <ul className="flex flex-col px-4 py-3 gap-3 text-sm text-[#6b6375] dark:text-[#9ca3af]">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-[#aa3bff] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
