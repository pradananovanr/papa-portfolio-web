import { skills } from "../data/portfolio";
import { Code2 } from "lucide-react";

const skillGroups = [
  { label: "Languages", items: skills.languages },
  { label: "Databases", items: skills.databases },
  { label: "Frameworks", items: skills.frameworks },
  { label: "DevOps & Infra", items: skills.devops },
  { label: "API & Integration", items: skills.api },
  { label: "Concurrency", items: skills.concurrency },
  { label: "Other Tools", items: skills.other },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-16">
      <SectionHeading label="Skills" title="Tech stack" />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="p-5 rounded-2xl bg-[#f8f7ff] dark:bg-[#1e1f27] border border-[#e5e4e7] dark:border-[#2e303a]"
          >
            <div className="flex items-center gap-2 mb-3">
              <Code2 size={14} className="text-[#aa3bff]" />
              <h3 className="text-sm font-semibold text-[#08060d] dark:text-[#f3f4f6]">
                {group.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-full bg-white dark:bg-[#16171d] border border-[#e5e4e7] dark:border-[#2e303a] text-[#6b6375] dark:text-[#9ca3af]"
                >
                  {item}
                </span>
              ))}
            </div>
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
