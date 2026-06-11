export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-4 py-16 bg-[#F8FAFC] dark:bg-[#0F172A]">
      <SectionHeading label="About" title="A bit about me" />
      
      <div className="mt-6 p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#1E293B] space-y-4">
        <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed text-sm">
          I am a <strong className="text-[#0F172A] dark:text-[#F1F5F9] font-bold">Backend Developer</strong> with over <em className="italic text-[#FF6B6B]">two years of experience</em>, specializing in backend service development using <strong className="text-[#0F172A] dark:text-[#F1F5F9] font-bold">Golang</strong>, as well as managing and integrating systems based on <strong className="text-[#0F172A] dark:text-[#F1F5F9] font-bold">PostgreSQL</strong> and <strong className="text-[#0F172A] dark:text-[#F1F5F9] font-bold">SQL Server</strong>. Experienced in building <mark className="bg-[#5BDBB2]/20 text-[#0F172A] dark:text-[#F1F5F9] px-1 py-0.5 rounded font-medium">trading systems</mark>, <mark className="bg-[#5BDBB2]/20 text-[#0F172A] dark:text-[#F1F5F9] px-1 py-0.5 rounded font-medium">API integration</mark> (Telegram, Digiflazz), transactional email delivery with SendGrid, file management via SFTP, and developing concurrency systems for large-scale data processing.
        </p>
        <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed text-sm">
          Accustomed to working in production environments with platforms like <strong className="text-[#0F172A] dark:text-[#F1F5F9] font-bold">Red Hat Openshift</strong>, and familiar with clean architecture principles, RESTful API, and modern CI/CD tools. Ready to adapt and grow within an <em className="italic text-[#FF6B6B]">agile and innovative</em> development team.
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
