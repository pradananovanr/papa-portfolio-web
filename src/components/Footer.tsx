import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e4e7] dark:border-[#2e303a] py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b6375] dark:text-[#9ca3af]">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. Built with React + Tailwind CSS.
        </p>
        <p>
          Designed & deployed by{" "}
          <a
            href={`https://github.com/${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#aa3bff] hover:underline"
          >
            @{personalInfo.github}
          </a>
        </p>
      </div>
    </footer>
  );
}
