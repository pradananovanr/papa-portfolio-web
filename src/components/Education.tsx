import { education, certifications, languages } from "../data/portfolio";
import { GraduationCap, Award, Globe } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="max-w-4xl mx-auto px-4 py-16">
      <SectionHeading label="Education & Certifications" title="Learning path" />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-[#08060d] dark:text-[#f3f4f6]">
            <GraduationCap size={15} className="text-[#aa3bff]" />
            Education
          </h3>
          {education.map((edu, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-[#f8f7ff] dark:bg-[#1e1f27] border border-[#e5e4e7] dark:border-[#2e303a]"
            >
              <p className="text-sm font-semibold text-[#08060d] dark:text-[#f3f4f6]">
                {edu.institution}
              </p>
              <p className="text-xs text-[#aa3bff] mt-0.5">{edu.program}</p>
              <p className="text-xs text-[#6b6375] dark:text-[#9ca3af] mt-1">
                {edu.period}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-[#08060d] dark:text-[#f3f4f6]">
            <Award size={15} className="text-[#aa3bff]" />
            Certifications
          </h3>
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-[#f8f7ff] dark:bg-[#1e1f27] border border-[#e5e4e7] dark:border-[#2e303a]"
            >
              <p className="text-sm font-medium text-[#08060d] dark:text-[#f3f4f6] leading-snug">
                {cert.name}
              </p>
              <p className="text-xs text-[#6b6375] dark:text-[#9ca3af] mt-1">
                {cert.issuer} · {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="mt-6">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-[#08060d] dark:text-[#f3f4f6] mb-3">
          <Globe size={15} className="text-[#aa3bff]" />
          Languages
        </h3>
        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="px-4 py-2 rounded-xl bg-[#f8f7ff] dark:bg-[#1e1f27] border border-[#e5e4e7] dark:border-[#2e303a]"
            >
              <p className="text-sm font-medium text-[#08060d] dark:text-[#f3f4f6]">
                {lang.name}
              </p>
              <p className="text-xs text-[#6b6375] dark:text-[#9ca3af]">
                {lang.level}
              </p>
            </div>
          ))}
        </div>
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
