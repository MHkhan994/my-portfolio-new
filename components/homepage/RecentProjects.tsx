"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/uiData";

const RecentProjects = () => {
  return (
    <section className="bg-[#000e04] relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-permanent-marker mb-4">
          Recent Projects
        </h2>
        <p className="text-[#c0c0c0] text-lg max-w-2xl mb-16">
          A few field notes and discoveries from recent builds—each one mapped
          out below.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: (index % 2) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative border-dashed text-dark-gray rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.45)] overflow-hidden ${
                index % 2 === 1 ? "sm:translate-y-8" : ""
              }`}
            >
              <Image
                src="/images/experienceCard1.webp"
                alt=""
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover select-none"
              />

              <div className="group relative h-48 md:h-64 overflow-hidden ">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-[object-position] duration-5000 ease-linear group-hover:object-bottom"
                />
              </div>

              <div className="relative p-5 md:p-6 md:px-10 mix-blend-multiply">
                <h3 className="text-xl md:text-2xl font-permanent-marker leading-snug mb-2">
                  {project.title}
                </h3>
                <p className="text-lg md:text-xl leading-snug mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-sans font-medium uppercase tracking-wide bg-[#000e04] text-[#e8dcc0] border border-[#e8dcc0]/30 rounded px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center text-lg gap-1.5 hover:underline">
                        <Image
                          src="/logos/github-logo.png"
                          width={16}
                          height={16}
                          alt="GitHub"
                          className="size-6"
                        />
                        Code
                      </div>
                    </Link>
                  )}
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-1.5 text-lg hover:underline">
                      <ExternalLink className="size-6" />
                      {project.githubUrl ? "Live Demo" : "Visit Site"}
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
