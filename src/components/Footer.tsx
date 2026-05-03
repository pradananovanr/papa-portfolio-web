import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] dark:border-[#1E293B] py-8 mt-auto bg-white dark:bg-[#0F172A]">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] dark:text-[#94A3B8]">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. Built with React + Tailwind CSS.
        </p>
        <p>
          Designed & deployed by{" "}
          <a
            href={`https://github.com/${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6B6B] hover:underline"
          >
            @{personalInfo.github}
          </a>
        </p>
      </div>
    </footer>
  );
}
