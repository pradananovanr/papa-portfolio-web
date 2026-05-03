import { personalInfo } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-4 py-16">
      <SectionHeading label="About" title="A bit about me" />
      <div className="mt-6 p-6 rounded-2xl bg-[#f8f7ff] dark:bg-[#1e1f27] border border-[#e5e4e7] dark:border-[#2e303a]">
        <p className="text-[#6b6375] dark:text-[#9ca3af] leading-relaxed text-sm">
          {personalInfo.summary}
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
