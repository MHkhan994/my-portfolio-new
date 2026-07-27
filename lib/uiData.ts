import { Job, Project, SocialLink } from "@/lib/interface";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/MHkhan994",
    icon: "/logos/github-logo.png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mahmudul-hasan-khan-a61850263/",
    icon: "/logos/linkedin-logo.png",
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1zwMh84tybVHh12QaJsU7zYnebZ5iiMR2/view?usp=sharing",
    icon: "/logos/resume.png",
  },
  {
    name: "Email",
    url: "mailto:khanmahmud994@gmail.com",
    icon: "/logos/mail.png",
  },
];

export const jobs: Job[] = [
  {
    role: "Frontend Developer",
    company: "Gain Solutions",
    location: "Dhaka, Bangladesh",
    period: "Jan 2026 — Present",
    current: true,
    bg: "/images/experienceCard1.webp",
    points: [
      "Building customer management tooling (chat widgets, support portals) and an employee management app, across both the Next.js/TypeScript frontend and the GraphQL services behind it.",
      "Maintaining a type-safe, reusable component library to keep the product consistent as it scales.",
      "Publishing and maintaining internal npm packages — including a rich text editor and an embeddable widget — consumed across multiple products.",
      "Extending into backend work: PostgreSQL-backed services and event-driven pipelines built with Node.js, AWS Lambda, and SQS.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS Lambda",
      "SQS",
      "Tailwind",
    ],
  },
  {
    role: "Full-Stack Developer (MERN)",
    company: "SDB IT",
    location: "Dhaka, Bangladesh",
    period: "Jun 2024 — Dec 2025",
    bg: "/images/experienceCard2.webp",
    points: [
      "Converted from intern to full-time, engineering and scaling eCommerce, LMS, and project-management SaaS platforms across the full stack.",
      "Built dynamic dashboards and complex interfaces in Next.js, TypeScript, and Redux Toolkit, optimizing data fetching with RTK Query.",
      "Designed REST APIs, data models, and secure authentication flows in Node.js, Express, and MongoDB that powered those same platforms end to end.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    role: "Frontend Developer (Intern)",
    company: "SDB IT",
    location: "Dhaka, Bangladesh",
    period: "Dec 2023 — Jun 2024",
    bg: "/images/experienceCard1.webp",
    points: [
      "Onboarded onto live eCommerce, LMS, and project-management codebases, picking up React, Next.js, and TypeScript in a production setting.",
      "Built and styled UI components under senior review, turning Figma designs into responsive, accessible pages.",
      "Handled bug fixes and small feature tickets across multiple concurrent client projects — the work that earned a full-time offer six months in.",
    ],
    stack: ["React", "Next.js", "JavaScript", "Tailwind"],
  },
];

export const projects: Project[] = [
  {
    title: "EasyDesk",
    description:
      "An AI-powered helpdesk platform for support teams. I build and maintain the embeddable live-chat widget and a reusable rich-text/HTML editor as internal npm packages powering its support-portal and ticketing experience.",
    stack: ["Next.js", "TypeScript", "React", "GraphQL", "Node.js"],
    image: "/project/easydesk.png",
    liveUrl: "https://easydesk.app/",
  },
  {
    title: "Payrun",
    description:
      "A web-based HR management platform covering attendance, leave, hiring, and payroll. I work on the employee-management and timesheet interfaces, built with Next.js and TypeScript on top of GraphQL APIs.",
    stack: ["Next.js", "TypeScript", "React", "GraphQL", "Node.js"],
    image: "/project/payrun.png",
    liveUrl: "https://payrun.app/",
  },
  {
    title: "Gain.io",
    description:
      "An all-in-one CRM for sales teams — contacts, pipelines, and deal tracking in one dashboard. I contribute type-safe, reusable UI components and GraphQL-driven data views across the product.",
    stack: ["Next.js", "TypeScript", "React", "GraphQL", "Node.js"],
    image: "/project/gain.png",
    liveUrl: "https://gain.io/",
  },
  {
    title: "DailyIT",
    description:
      "A full e-commerce platform for IT products, with product comparison, a PC builder, dynamic filtering, and a responsive storefront.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redux Toolkit",
      "Redis",
      "BullMQ",
      "Tailwind CSS",
    ],
    image: "/project/dailyit.webp",
    liveUrl: "https://itdaily.store",
    githubUrl: "https://github.com/It-daily-store/it-daily-homepage",
  },
  {
    title: "DailyIT Admin",
    description:
      "The admin panel behind DailyIT — role management, product/category/brand management, deals and sales management, and analytics dashboards for operational insight.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redux Toolkit",
      "Redis",
      "BullMQ",
      "Tailwind CSS",
    ],
    image: "/project/dailyitAdmin.webp",
    liveUrl: "https://admin.itdaily.store",
    githubUrl: "https://github.com/It-daily-store/it-daily-admin",
  },
];
