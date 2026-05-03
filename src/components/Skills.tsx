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
    <section id="skills" className="max-w-4xl mx-auto px-4 py-16 bg-[#F8FAFC] dark:bg-[#0F172A]">
      <SectionHeading label="Skills" title="Tech stack" />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="p-5 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#1E293B] hover:border-[#5BDBB2] transition-colors"
          >
            <div className="flex items-center gap-2 mb-3">
              <Code2 size={14} className="text-[#FF6B6B]" />
              <h3 className="text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9]">
                {group.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-full bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#1E293B] text-[#64748B] dark:text-[#94A3B8]"
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
      <p className="text-xs font-bold uppercase tracking-widest text-[#FF6B6B] mb-1">
        {label}
      </p>
      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">
        {title}
      </h2>
    </div>
  );
}
