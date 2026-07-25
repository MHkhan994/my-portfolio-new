"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Building2, MapPin, Calendar } from "lucide-react";

type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  stack: string[];
  bg: string;
};

const jobs: Job[] = [
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
    ],
    stack: ["Next.js", "TypeScript", "GraphQL", "React", "Node.js", "Tailwind"],
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

const WhereIWork = () => {
  return (
    <section className="bg-[#000e04] relative py-16 md:py-24 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-permanent-marker mb-4">
          Where I Work
        </h2>
        <p className="text-[#c0c0c0] text-lg max-w-2xl mb-16">
          A trail of the teams I&apos;ve worked with and the ground I&apos;ve
          covered along the way.
        </p>

        <div className="relative">
          {/* trail line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-[#c0c0c0]/30 md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {jobs.map((job, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={job.company}
                  className="relative flex items-start md:items-center gap-6 md:gap-0"
                >
                  {/* marker */}
                  <div className="relative z-10 shrink-0 w-10 h-10 md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center rounded-full bg-[#d9c49c] border-2 border-[#3b2a1a] shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                    <Building2 className="w-5 h-5 text-[#3b2a1a]" />
                  </div>

                  {/* card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      duration: 1.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`w-full md:w-[calc(50%-3rem)] ${
                      isEven ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="relative text-[#1c1108] p-7 md:p-9 drop-shadow-[0_14px_18px_rgba(0,0,0,0.55)]">
                      <Image
                        src={job.bg}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover -z-10 select-none"
                      />
                      {job.current && (
                        <span className="absolute top-1 right-6 bg-[#4a6b2a] text-[#f2ecd8] text-xs font-bold uppercase tracking-wide px-2 py-1 rounded rotate-3 shadow-md">
                          Current
                        </span>
                      )}
                      <h3 className="text-xl md:text-2xl font-permanent-marker leading-snug">
                        {job.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 mb-4 text-sm font-semibold text-[#1c1108]/90">
                        <span>{job.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {job.period}
                        </span>
                      </div>
                      <ul className="space-y-1.5 text-lg font-medium leading-snug">
                        {job.points.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-2 block w-1.5 h-1.5  rounded-full bg-[#1c1108]/70 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {job.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-sans font-medium uppercase tracking-wide bg-[#000e04] text-[#e8dcc0] border border-[#e8dcc0]/30 rounded px-2 py-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereIWork;
