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
    <section id="contact" className="max-w-4xl mx-auto px-4 py-16">
      <SectionHeading label="Contact" title="Let's connect" />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-[#f8f7ff] dark:bg-[#1e1f27] border border-[#e5e4e7] dark:border-[#2e303a] hover:border-[#aa3bff] transition-colors group"
          >
            <div className="p-2 rounded-lg bg-[#aa3bff]/10 group-hover:bg-[#aa3bff]/20 transition-colors">
              <c.icon size={16} className="text-[#aa3bff]" />
            </div>
            <div>
              <p className="text-xs text-[#6b6375] dark:text-[#9ca3af]">{c.label}</p>
              <p className="text-sm font-medium text-[#08060d] dark:text-[#f3f4f6]">
                {c.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-2xl bg-[#aa3bff] text-white text-center">
        <p className="font-semibold mb-1">Open to opportunities</p>
        <p className="text-sm opacity-80">
          Available to join from July 2026. Expected salary: Rp 10jt+
        </p>
      </div>
    </section>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#aa3bff] mb-1">
        {label}
      </p>
      <h2 className="text-2xl font-bold text-[#08060d] dark:text-[#f3f4f6]">
        {title}
      </h2>
    </div>
  );
}
