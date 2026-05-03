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
            className="p-6 rounded-2xl bg-[#f8f7ff] dark:bg-[#1e1f27] border border-[#e5e4e7] dark:border-[#2e303a]"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="mt-0.5 p-2 rounded-lg bg-[#aa3bff]/10">
                <Briefcase size={16} className="text-[#aa3bff]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#08060d] dark:text-[#f3f4f6]">
                  {exp.title}
                </h3>
                <p className="text-sm text-[#aa3bff] font-medium">{exp.company}</p>
                <p className="text-xs text-[#6b6375] dark:text-[#9ca3af] mt-0.5">
                  {exp.period}
                </p>
              </div>
            </div>

            <div className="mb-3">
              <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-[#aa3bff]/10 text-[#aa3bff] font-medium">
                {exp.stack}
              </span>
            </div>

            <ul className="space-y-1.5">
              {exp.highlights.map((h, j) => (
                <li
                  key={j}
                  className="flex gap-2 text-sm text-[#6b6375] dark:text-[#9ca3af]"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#aa3bff] shrink-0" />
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
      <p className="text-xs font-semibold uppercase tracking-widest text-[#aa3bff] mb-1">
        {label}
      </p>
      <h2 className="text-2xl font-bold text-[#08060d] dark:text-[#f3f4f6]">
        {title}
      </h2>
    </div>
  );
}
