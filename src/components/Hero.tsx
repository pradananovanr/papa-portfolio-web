import { personalInfo } from "../data/portfolio";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5BDBB2]/10 border border-[#5BDBB2]/30 text-xs text-[#5BDBB2] font-medium mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-[#5BDBB2] animate-pulse" />
        Available for opportunities
      </div>

      <h1 className="text-5xl md:text-6xl font-bold text-[#0F172A] dark:text-[#F1F5F9] tracking-tight mb-3">
        Hi, I'm{" "}
        <span className="text-gradient">{personalInfo.name}</span>
      </h1>
      <p className="text-xl text-[#FF6B6B] font-semibold mb-4">
        {personalInfo.title}
      </p>
      <p className="flex items-center justify-center gap-1.5 text-sm text-[#64748B] dark:text-[#94A3B8] mb-8">
        <MapPin size={14} className="text-[#5BDBB2]" />
        {personalInfo.location}
      </p>

      <p className="max-w-2xl mx-auto text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-10">
        {personalInfo.summary}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF6B6B] text-white text-sm font-semibold hover:bg-[#FF5252] transition-colors shadow-sm"
        >
          <Mail size={15} />
          Get in touch
        </a>
        <a
          href={`https://github.com/${personalInfo.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#E2E8F0] dark:border-[#1E293B] text-[#0F172A] dark:text-[#F1F5F9] text-sm font-medium hover:border-[#5BDBB2] hover:text-[#5BDBB2] transition-colors"
        >
          <Github size={15} />
          GitHub
        </a>
        <a
          href={`https://linkedin.com/in/${personalInfo.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#E2E8F0] dark:border-[#1E293B] text-[#0F172A] dark:text-[#F1F5F9] text-sm font-medium hover:border-[#5BDBB2] hover:text-[#5BDBB2] transition-colors"
        >
          <Linkedin size={15} />
          LinkedIn
        </a>
        <a
          href={`https://twitter.com/${personalInfo.twitter.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#E2E8F0] dark:border-[#1E293B] text-[#0F172A] dark:text-[#F1F5F9] text-sm font-medium hover:border-[#5BDBB2] hover:text-[#5BDBB2] transition-colors"
        >
          <Twitter size={15} />
          Twitter
        </a>
      </div>
    </section>
  );
}
