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
      <div className="mt-10">
        <h3 className="text-base font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-4">
          Education & Training Timeline
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] dark:border-[#1E293B] bg-white dark:bg-[#1E293B]">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-[#F8FAFC] dark:bg-[#0F172A]/50 border-b border-[#E2E8F0] dark:border-[#1E293B]">
                <th className="p-4 font-semibold text-[#0F172A] dark:text-[#F1F5F9] w-1/3">Institution</th>
                <th className="p-4 font-semibold text-[#0F172A] dark:text-[#F1F5F9] w-1/2">Program / Major</th>
                <th className="p-4 font-semibold text-[#0F172A] dark:text-[#F1F5F9] w-1/6">Period</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] dark:divide-[#1E293B]">
              <tr className="hover:bg-[#F8FAFC]/50 dark:hover:bg-[#0F172A]/20 transition-colors">
                <td className="p-4 font-medium text-[#0F172A] dark:text-[#F1F5F9]">Enigma Cipta Humanika</td>
                <td className="p-4 text-[#64748B] dark:text-[#94A3B8]">Backend Engineering Bootcamp (Golang Focus)</td>
                <td className="p-4 text-[#64748B] dark:text-[#94A3B8]">July 2023</td>
              </tr>
              <tr className="hover:bg-[#F8FAFC]/50 dark:hover:bg-[#0F172A]/20 transition-colors">
                <td className="p-4 font-medium text-[#0F172A] dark:text-[#F1F5F9]">SMA Negeri 1 Kota Probolinggo</td>
                <td className="p-4 text-[#64748B] dark:text-[#94A3B8]">Natural Sciences (IPA)</td>
                <td className="p-4 text-[#64748B] dark:text-[#94A3B8]">Graduated May 2017</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-base font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-3">
          Academic & Professional Achievements
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-[#64748B] dark:text-[#94A3B8] bg-white dark:bg-[#1E293B] p-5 rounded-2xl border border-[#E2E8F0] dark:border-[#1E293B]">
          <li>Completed intensive Bootcamp with a 100% hands-on project completion rate.</li>
          <li>Certified Alibaba Cloud Associate specializing in elastic computing services.</li>
          <li>Integrated Telegram Bot API and Digiflazz API for commercial transactions.</li>
          <li>Maintained scalable microservice architectures with Go Gin and PostgreSQL.</li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-base font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-3">
          Future Career Progression Goals
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-[#64748B] dark:text-[#94A3B8] bg-white dark:bg-[#1E293B] p-5 rounded-2xl border border-[#E2E8F0] dark:border-[#1E293B]">
          <li>Deepen knowledge of distributed databases, cache strategies, and system replication.</li>
          <li>Obtain professional cloud certifications (AWS/Google Cloud) to standardise cloud skills.</li>
          <li>Build more high-concurrency systems using custom worker pool models in Go.</li>
        </ol>
      </div>
      <div className="mt-10">
        <h3 className="text-base font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-4">
          Tech Focus & System Illustrations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="group overflow-hidden rounded-2xl border border-[#E2E8F0] dark:border-[#1E293B] bg-white dark:bg-[#1E293B] hover:border-[#5BDBB2] transition-colors">
            <img 
              src="/tech-diagram.png" 
              alt="System Architecture Concept" 
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4">
              <h4 className="text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Backend Architecture Focus</h4>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">High-performance microservices, secure database communication, and cloud optimization.</p>
            </div>
          </div>
          <div className="group overflow-hidden rounded-2xl border border-[#E2E8F0] dark:border-[#1E293B] bg-white dark:bg-[#1E293B] hover:border-[#5BDBB2] transition-colors">
            <img 
              src="/api-concept.png" 
              alt="API Concept Illustration" 
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4">
              <h4 className="text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9]">API & Concurrency Concept</h4>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">RESTful integrations, concurrency routines (Golang channels/goroutines), and reliable messaging.</p>
            </div>
          </div>
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
