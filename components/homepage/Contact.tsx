"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/MHkhan994",
    icon: "/logos/github-logo.png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mahmudul-hasan-khan-994/",
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

const inkFieldClasses =
  "border-[#3b2a1a]/40 h-10 bg-[white]/60 text-[#3b2a1a] placeholder:text-[#3b2a1a]/50 focus-visible:border-[#3b2a1a] focus-visible:ring-[#3b2a1a]/30 rounded-md";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    const mailto = `mailto:khanmahmud994@gmail.com?subject=${encodeURIComponent(
      form.subject || `Message from ${form.name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section className="bg-[#000e04] relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-permanent-marker text-[#e8dcc0] mb-4">
            End of the Trail? Let&apos;s Talk.
          </h2>
          <p className="text-lg text-[#c0c0c0] mb-8">
            Got a project in mind, an opportunity to share, or just want to say
            hi? My inbox is always open—drop me a line.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-2xl mx-auto mt-12"
        >
          <Image
            src="/contactFormBG.webp"
            width={936}
            height={942}
            alt=""
            className="w-full hidden xs:block h-auto select-none pointer-events-none"
          />
          <Image
            src="/contactFormBGMobile.webp"
            width={936}
            height={942}
            alt=""
            className="w-full xs:hidden h-auto select-none pointer-events-none"
          />

          <div className="absolute inset-0 p-10 flex flex-col justify-center text-dark-gray md:p-14 md:pt-20">
            <form onSubmit={handleSubmit} className="space-y-5 sm:mt-10">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="font-bold text-lg">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inkFieldClasses}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="font-bold text-lg">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inkFieldClasses}
                />
              </div>

              {/* <div className="space-y-1.5">
                <Label htmlFor="subject" className="font-bold text-lg">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inkFieldClasses}
                />
              </div> */}

              <div className="space-y-1.5">
                <Label htmlFor="message" className="font-bold text-lg">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inkFieldClasses} resize-none max-h-20`}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-dark-gray mix-blend-multiply text-white hover:bg-dark-gray/85 h-11"
              >
                Send Message
                <Send className="size-4" />
              </Button>
            </form>

            <div className="flex items-center justify-center gap-5 mt-5">
              {socialLinks?.map((link) => (
                <Tooltip key={link.name}>
                  <TooltipContent>
                    <p>{link.name}</p>
                  </TooltipContent>
                  <TooltipTrigger>
                    <Link target="_blank" href={link.url}>
                      <Image
                        src={link.icon}
                        width={32}
                        height={32}
                        className="h-7 w-fit"
                        alt={link.name}
                      />
                    </Link>
                  </TooltipTrigger>
                </Tooltip>
              ))}
            </div>
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
