import { personalInfo } from "../data/portfolio";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f8f7ff] dark:bg-[#1e1f27] border border-[#e5e4e7] dark:border-[#2e303a] text-xs text-[#6b6375] dark:text-[#9ca3af] mb-6">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Available for opportunities
      </div>

      <h1 className="text-5xl md:text-6xl font-bold text-[#08060d] dark:text-[#f3f4f6] tracking-tight mb-3">
        {personalInfo.name}
      </h1>
      <p className="text-xl text-[#aa3bff] font-medium mb-4">
        {personalInfo.title}
      </p>
      <p className="flex items-center justify-center gap-1.5 text-sm text-[#6b6375] dark:text-[#9ca3af] mb-8">
        <MapPin size={14} />
        {personalInfo.location}
      </p>

      <p className="max-w-2xl mx-auto text-base text-[#6b6375] dark:text-[#9ca3af] leading-relaxed mb-10">
        {personalInfo.summary}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#aa3bff] text-white text-sm font-medium hover:bg-[#9330e0] transition-colors"
        >
          <Mail size={15} />
          Get in touch
        </a>
        <a
          href={`https://github.com/${personalInfo.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#e5e4e7] dark:border-[#2e303a] text-[#08060d] dark:text-[#f3f4f6] text-sm font-medium hover:bg-[#f8f7ff] dark:hover:bg-[#1e1f27] transition-colors"
        >
          <Github size={15} />
          GitHub
        </a>
        <a
          href={`https://linkedin.com/in/${personalInfo.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#e5e4e7] dark:border-[#2e303a] text-[#08060d] dark:text-[#f3f4f6] text-sm font-medium hover:bg-[#f8f7ff] dark:hover:bg-[#1e1f27] transition-colors"
        >
          <Linkedin size={15} />
          LinkedIn
        </a>
        <a
          href={`https://twitter.com/${personalInfo.twitter.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#e5e4e7] dark:border-[#2e303a] text-[#08060d] dark:text-[#f3f4f6] text-sm font-medium hover:bg-[#f8f7ff] dark:hover:bg-[#1e1f27] transition-colors"
        >
          <Twitter size={15} />
          Twitter
        </a>
      </div>
    </section>
  );
}
