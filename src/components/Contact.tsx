import { personalInfo } from "../data/portfolio";
import { Mail, Phone, Github, Linkedin, Twitter, Globe } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: Github, label: "GitHub", value: personalInfo.github, href: `https://github.com/${personalInfo.github}` },
  { icon: Linkedin, label: "LinkedIn", value: personalInfo.linkedin, href: `https://linkedin.com/in/${personalInfo.linkedin}` },
  { icon: Twitter, label: "Twitter", value: personalInfo.twitter, href: `https://twitter.com/${personalInfo.twitter.replace("@", "")}` },
  { icon: Globe, label: "Website", value: personalInfo.website, href: `https://${personalInfo.website}` },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-16 bg-[#F8FAFC] dark:bg-[#0F172A]">
      <SectionHeading label="Contact" title="Let's connect" />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#1E293B] hover:border-[#5BDBB2] hover:bg-[#5BDBB2]/5 transition-colors group"
          >
            <div className="p-2 rounded-xl bg-[#FF6B6B]/10 group-hover:bg-[#FF6B6B]/20 transition-colors">
              <c.icon size={16} className="text-[#FF6B6B]" />
            </div>
            <div>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">{c.label}</p>
              <p className="text-sm font-medium text-[#0F172A] dark:text-[#F1F5F9]">
                {c.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-2xl bg-[#5BDBB2] text-white text-center">
        <p className="font-semibold mb-1">Open to opportunities</p>
        <p className="text-sm opacity-90">
          Available to join from July 2026
        </p>
      </div>
    </section>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-[#FF6B6B] mb-1">
        {label}
      </p>
      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">
        {title}
      </h2>
    </div>
  );
}
