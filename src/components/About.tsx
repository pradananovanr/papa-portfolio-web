import { personalInfo } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-4 py-16 bg-[#F8FAFC] dark:bg-[#0F172A]">
      <SectionHeading label="About" title="A bit about me" />
      <div className="mt-6 p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#1E293B]">
        <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed text-sm">
          {personalInfo.summary}
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
