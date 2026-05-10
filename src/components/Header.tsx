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
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md border-b border-[#E2E8F0] dark:border-[#1E293B]">
      <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#"
          className="text-base font-bold tracking-tight text-[#0F172A] dark:text-[#F1F5F9]"
        >
          <span className="text-gradient">prdnnvnrnt</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 text-sm text-[#64748B] dark:text-[#94A3B8]">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-[#FF6B6B] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#64748B] dark:text-[#94A3B8]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#E2E8F0] dark:border-[#1E293B] bg-white dark:bg-[#0F172A]">
          <ul className="flex flex-col px-4 py-3 gap-3 text-sm text-[#64748B] dark:text-[#94A3B8]">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-[#FF6B6B] transition-colors"
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
