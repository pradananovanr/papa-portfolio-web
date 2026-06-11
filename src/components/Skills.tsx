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
      <div className="mt-10">
        <h3 className="text-base font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-4">
          Core Competency Matrix
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] dark:border-[#1E293B] bg-white dark:bg-[#1E293B]">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-[#F8FAFC] dark:bg-[#0F172A]/50 border-b border-[#E2E8F0] dark:border-[#1E293B]">
                <th className="p-4 font-semibold text-[#0F172A] dark:text-[#F1F5F9] w-1/3">Skill Category</th>
                <th className="p-4 font-semibold text-[#0F172A] dark:text-[#F1F5F9] w-1/2">Technologies</th>
                <th className="p-4 font-semibold text-[#0F172A] dark:text-[#F1F5F9] w-1/6">Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] dark:divide-[#1E293B]">
              <tr className="hover:bg-[#F8FAFC]/50 dark:hover:bg-[#0F172A]/20 transition-colors">
                <td className="p-4 font-medium text-[#0F172A] dark:text-[#F1F5F9]">Programming Languages</td>
                <td className="p-4 text-[#64748B] dark:text-[#94A3B8]">Golang, PHP, JavaScript, TypeScript</td>
                <td className="p-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs bg-[#5BDBB2]/10 text-[#5BDBB2] font-semibold">
                    Advanced
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-[#F8FAFC]/50 dark:hover:bg-[#0F172A]/20 transition-colors">
                <td className="p-4 font-medium text-[#0F172A] dark:text-[#F1F5F9]">Databases</td>
                <td className="p-4 text-[#64748B] dark:text-[#94A3B8]">PostgreSQL, MySQL, SQL Server, Oracle</td>
                <td className="p-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs bg-[#5BDBB2]/10 text-[#5BDBB2] font-semibold">
                    Advanced
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-[#F8FAFC]/50 dark:hover:bg-[#0F172A]/20 transition-colors">
                <td className="p-4 font-medium text-[#0F172A] dark:text-[#F1F5F9]">Frameworks</td>
                <td className="p-4 text-[#64748B] dark:text-[#94A3B8]">Gin, Fiber, GORM, CodeIgniter</td>
                <td className="p-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs bg-[#5BDBB2]/10 text-[#5BDBB2] font-semibold">
                    Advanced
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-[#F8FAFC]/50 dark:hover:bg-[#0F172A]/20 transition-colors">
                <td className="p-4 font-medium text-[#0F172A] dark:text-[#F1F5F9]">DevOps & Cloud</td>
                <td className="p-4 text-[#64748B] dark:text-[#94A3B8]">Docker, Openshift, Aliyun ECS, Git, CI/CD</td>
                <td className="p-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs bg-[#FF6B6B]/10 text-[#FF6B6B] font-semibold">
                    Intermediate
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
