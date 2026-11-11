import { Job, Project, SocialLink } from "@/lib/interface";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/MHkhan994",
    icon: "/logos/github-logo.png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mhkhan994/",
    icon: "/logos/linkedin-logo.png",
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1CFVPaUlELujLfApTLOidWsj8tUhpGojv/view?usp=sharing",
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
    role: "Full-Stack Software Engineer",
    company: "Gain Solutions",
    location: "Mirpur, Dhaka",
    period: "Jan 2026 — Oct 2026",
    bg: "/images/experienceCard1.webp",
    points: [
      "Built and maintained customer support tools (chat widgets and support portals) and an employee management app, owning features from the data model through to the UI.",
      "Contributed to the GraphQL backend, including schema and resolver design, and reworked how the frontend fetches data so our SaaS products make fewer, lighter API calls.",
      "Maintained internal npm packages used across products, including an HTML editor and a chat widget, along with a shared, type-safe component library in Next.js and TypeScript.",
    ],
    stack: ["Next.js", "TypeScript", "React", "GraphQL", "Node.js", "Tailwind"],
  },
  {
    role: "Full Stack Developer",
    company: "SDB IT",
    location: "Dhaka, Bangladesh",
    period: "Jul 2024 — Dec 2025",
    bg: "/images/experienceCard2.webp",
    points: [
      "Worked on both the frontend and backend of project management tools, school management systems, eCommerce stores, a matrimony platform, and AI-driven apps.",
      "Designed REST APIs, database schemas, and authentication flows, and built reusable component libraries that sped up page loads and made new features quicker to ship.",
      "Built dashboards for eCommerce, LMS, and project management products with Next.js, TypeScript, Redux Toolkit, and RTK Query.",
      "Worked closely with other teams to ship several high-traffic client projects at the same time.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
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
      "Joined live eCommerce, LMS, and project management codebases and worked across the stack with React, Next.js, TypeScript, and REST APIs.",
      "Turned Figma designs into responsive, accessible pages and components, with my code reviewed by senior developers.",
      "Fixed bugs and shipped small features on both the frontend and backend across several client projects, which led to a full-time offer after six months.",
    ],
    stack: ["React", "Next.js", "TypeScript", "REST API", "Tailwind"],
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
    title: "HelpTeacher24",
    description:
      "A question-paper builder for teachers in Bangladesh. Teachers can generate exam papers for grades 6–12 in a few clicks from a personal dashboard, with free and paid subscription packages.",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    image: "/project/helpteacher24.png",
    liveUrl: "https://helpteacher24.com/",
    client: true,
  },
  {
    title: "Poultry Maker",
    description:
      "A bilingual marketplace and care platform for poultry farmers. It combines an equipment storefront with online payments, daily wholesale market prices, vaccine and disease-diagnosis guides, and farm accounting tools.",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    image: "/project/poultrymaker.png",
    liveUrl: "https://poultrymaker.com/",
    client: true,
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
