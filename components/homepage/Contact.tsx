"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { CircleAlert, Feather, Loader2, Send } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PigeonFly, { PigeonFlyHandle } from "../animations/PigeonFly";
import { socialLinks } from "@/lib/uiData";

const inkFieldClasses =
  "border-[#3b2a1a]/40 h-10 bg-[white]/60 text-[#3b2a1a] placeholder:text-[#3b2a1a]/50 focus-visible:border-[#3b2a1a] focus-visible:ring-[#3b2a1a]/30 rounded-md";

const defaultFormData = {
  name: "",
  email: "",
  message: "",
};

const SUCCESS_MESSAGE =
  "Sent! Your message just took flight and is winging its way to my inbox — I'll write back soon.";

const Contact = () => {
  const [form, setForm] = useState(defaultFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const pigeonRef = useRef<PigeonFlyHandle>(null);

  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => setStatus("idle"), 6000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setStatus("idle");
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError("");
    setStatus("idle");
    setSubmitting(true);

    const { name, email, message } = form;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send message");
      }

      const rect = formRef.current?.getBoundingClientRect();
      const startX = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const startY = rect
        ? rect.top + rect.height * (0.3 + Math.random() * 0.4)
        : window.innerHeight / 2;
      pigeonRef.current?.launchFrom(startX, startY);

      setForm(defaultFormData);
      setStatus("success");
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Failed to send message",
      );
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

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
                disabled={submitting}
                className="w-full bg-dark-gray mix-blend-multiply text-white hover:bg-dark-gray/85 h-11"
              >
                {submitting ? (
                  <>
                    Sending
                    <Loader2 className="size-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="size-4" />
                  </>
                )}
              </Button>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-2.5 rounded-md border border-[#3b2a1a]/25 bg-white/50 px-4 py-3 text-sm text-[#3b2a1a]"
                  >
                    <Feather className="size-4 shrink-0" />
                    <span className="text-lg font-medium">
                      {SUCCESS_MESSAGE}
                    </span>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-2.5 rounded-md border border-red-800/25 bg-red-50/60 px-4 py-3 text-sm text-red-900"
                  >
                    <CircleAlert className="size-4 shrink-0" />
                    <span>
                      {submitError ||
                        "That one got lost on the trail — mind trying again?"}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
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

        <PigeonFly ref={pigeonRef} />

        <p className="text-center text-[#c0c0c0]/60 text-sm mt-12 font-sans">
          &copy; {new Date().getFullYear()} Mahmudul Hasan Khan. Built with
          Next.js.
        </p>
      </div>
    </section>
  );
};

export default Contact;
