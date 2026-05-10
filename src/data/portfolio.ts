// Portfolio data — Pradana Novan Rianto
// Source: CV + LinkedIn (May 2026)

export const personalInfo = {
  name: "Pradana Novan Rianto",
  title: "Backend Engineer",
  location: "Jakarta, Indonesia",
  phone: "+6282229593899",
  email: "pradananovanr@gmail.com",
  linkedin: "pradananovanrianto",
  github: "pradananovanr",
  twitter: "@prdnnvnrnt",
  website: "prdnnvnrnt.my.id",
  summary: `Backend Developer with over two years of experience, specializing in backend service development using Golang, as well as managing and integrating systems based on PostgreSQL and SQL Server. Experienced in building trading systems, API integration (Telegram, Digiflazz), transactional email delivery with SendGrid, file management via SFTP, and developing concurrency systems for large-scale data processing. Accustomed to working in production environments with platforms like Red Hat Openshift, and familiar with clean architecture principles, RESTful API, and modern CI/CD tools. Ready to adapt and grow within an agile and innovative development team.`,
};

export const experiences = [
  {
    title: "Backend Engineer",
    company: "PT. Bussan Auto Finance",
    period: "July 2023 - now",
    stack: "Golang, SQL Server, PostgreSQL",
    highlights: [
      "Designed, developed, and maintained scalable and secure backend architectures for web applications.",
      "Built and implemented RESTful API using GoLang.",
      "Collaborated with front-end teams to integrate APIs and ensure seamless user experiences.",
      "Optimized database performance.",
      "Troubleshot and resolved complex application issues, ensuring high uptime and availability.",
      "Migrated multiple services into a monorepo with clear module separation.",
      "Implemented semantic versioning, set up GOPRIVATE for secure internal libraries.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Freelance",
    period: "November 2019 - now",
    stack: "PHP CodeIgniter, MySQL, MetaTrader",
    highlights: [
      "Built a web-based panel to monitor and manage trading client accounts in real-time.",
      "Enabled client account limitations and access control directly from the panel.",
      "Developed a Telegram bot for real-time order notifications and trading commands.",
      "Implemented message parsing and command-based interactions with security layers.",
      "Integrated Digiflazz API for digital product transactions (credit, utilities).",
      "Implemented token-based authentication, error handling, and transaction logging.",
    ],
  },
];

export const skills = {
  languages: ["Golang", "PHP (intermediate)", "JavaScript/TypeScript (basic)"],
  databases: ["PostgreSQL", "MySQL", "SQL Server", "Oracle (basic)"],
  frameworks: ["Gin", "Fiber", "GORM", "CodeIgniter"],
  devops: ["SFTP", "Aliyun ECS/OSS", "Git", "CI/CD (basic)", "Go Modules"],
  api: ["RESTful API", "Telegram Bot API", "Digiflazz", "SendGrid API"],
  concurrency: ["Goroutines", "Channels", "Worker Pools", "Select patterns"],
  other: ["MetaTrader (MT4/MT5)", "Semantic Versioning", "Monorepo workflows"],
};

export const education = [
  {
    institution: "Enigma Cipta Humanika",
    program: "Backend Engineering Bootcamp (Golang Focus)",
    period: "July 2023",
  },
  {
    institution: "SMA Negeri 1 Kota Probolinggo",
    program: "Natural Sciences (IPA)",
    period: "Graduated May 2017",
  },
];

export const certifications = [
  {
    name: "Cloud Computing | Digital Talent Scholarship",
    issuer: "Indonesia Ministry of ICT",
    date: "March 2024",
  },
  {
    name: "Alibaba Cloud Certification Associate",
    issuer: "Alibaba Cloud Academy",
    date: "February 2024",
  },
  {
    name: "Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud",
    issuer: "Google Cloud",
    date: "2024",
  },
  {
    name: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Google / Coursera",
    date: "2024",
  },
  {
    name: "Responsible AI for Developers: Privacy & Safety",
    issuer: "Google Cloud",
    date: "2024",
  },
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Intermediate (Professional Working Proficiency)" },
];
