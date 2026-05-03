import { education, certifications, languages } from "../data/portfolio";
import { GraduationCap, Award, Globe } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="max-w-4xl mx-auto px-4 py-16">
      <SectionHeading label="Education & Certifications" title="Learning path" />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9]">
            <GraduationCap size={15} className="text-[#FF6B6B]" />
            Education
          </h3>
          {education.map((edu, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#1E293B] hover:border-[#5BDBB2] transition-colors"
            >
              <p className="text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9]">
                {edu.institution}
              </p>
              <p className="text-xs text-[#FF6B6B] mt-0.5 font-medium">{edu.program}</p>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
                {edu.period}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9]">
            <Award size={15} className="text-[#FF6B6B]" />
            Certifications
          </h3>
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#1E293B] hover:border-[#5BDBB2] transition-colors"
            >
              <p className="text-sm font-medium text-[#0F172A] dark:text-[#F1F5F9] leading-snug">
                {cert.name}
              </p>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
                {cert.issuer} · {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="mt-6">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-3">
          <Globe size={15} className="text-[#FF6B6B]" />
          Languages
        </h3>
        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="px-4 py-2 rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#1E293B] hover:border-[#5BDBB2] transition-colors"
            >
              <p className="text-sm font-medium text-[#0F172A] dark:text-[#F1F5F9]">
                {lang.name}
              </p>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
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
      <p className="text-xs font-bold uppercase tracking-widest text-[#FF6B6B] mb-1">
        {label}
      </p>
      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">
        {title}
      </h2>
    </div>
  );
}
