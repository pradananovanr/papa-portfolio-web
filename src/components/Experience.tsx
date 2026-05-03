import { experiences } from "../data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 py-16">
      <SectionHeading label="Experience" title="Where I've worked" />

      <div className="mt-6 space-y-4">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#1E293B] hover:border-[#5BDBB2] transition-colors"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="mt-0.5 p-2 rounded-xl bg-[#FF6B6B]/10">
                <Briefcase size={16} className="text-[#FF6B6B]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#0F172A] dark:text-[#F1F5F9]">
                  {exp.title}
                </h3>
                <p className="text-sm text-[#FF6B6B] font-semibold">{exp.company}</p>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-0.5">
                  {exp.period}
                </p>
              </div>
            </div>

            <div className="mb-3">
              <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-[#5BDBB2]/10 text-[#5BDBB2] font-medium">
                {exp.stack}
              </span>
            </div>

            <ul className="space-y-1.5">
              {exp.highlights.map((h, j) => (
                <li
                  key={j}
                  className="flex gap-2 text-sm text-[#64748B] dark:text-[#94A3B8]"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6B6B] shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
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
