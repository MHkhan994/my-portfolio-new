"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const contactLinks = [
  {
    name: "Email",
    value: "khanmahmud994@gmail.com",
    url: "mailto:khanmahmud994@gmail.com",
    icon: "/logos/mail.png",
  },
  {
    name: "GitHub",
    value: "github.com/MHkhan994",
    url: "https://github.com/MHkhan994",
    icon: "/logos/github-logo.png",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/mahmudul-hasan-khan-994",
    url: "https://www.linkedin.com/in/mahmudul-hasan-khan-994/",
    icon: "/logos/linkedin-logo.png",
  },
  {
    name: "Resume",
    value: "View / download resume",
    url: "https://drive.google.com/file/d/1zwMh84tybVHh12QaJsU7zYnebZ5iiMR2/view?usp=sharing",
    icon: "/logos/resume.png",
  },
];

const Contact = () => {
  return (
    <section className="bg-[#000e04] relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl mx-auto bg-[#d9c49c] text-[#3b2a1a] rounded-lg border-2 border-[#3b2a1a]/40 shadow-[0_10px_25px_rgba(0,0,0,0.45)] p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-permanent-marker mb-4">
            End of the Trail? Let&apos;s Talk.
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-10">
            Got a project in mind, an opportunity to share, or just want to
            say hi? My inbox is always open—drop me a line.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {contactLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                className="flex items-center gap-3 bg-[#000e04]/90 border border-[#e8dcc0]/30 rounded-md px-4 py-3 hover:bg-[#000e04] transition-colors"
              >
                <Image
                  src={link.icon}
                  width={28}
                  height={28}
                  alt={link.name}
                  className="h-7 w-7 shrink-0"
                />
                <span className="min-w-0">
                  <span className="block text-sm font-bold uppercase tracking-wide text-[#e8dcc0]">
                    {link.name}
                  </span>
                  <span className="block text-sm text-[#c0c0c0] truncate">
                    {link.value}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        <p className="text-center text-[#c0c0c0]/60 text-sm mt-12 font-sans">
          &copy; {new Date().getFullYear()} Mahmudul Hasan Khan. Built with
          Next.js.
        </p>
      </div>
    </section>
  );
};

export default Contact;
