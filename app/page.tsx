"use client";

import Banner from "@/components/homepage/Banner";
import WhereIWork from "@/components/homepage/WhereIWork";
import RecentProjects from "@/components/homepage/RecentProjects";
import Contact from "@/components/homepage/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <section className="min-h-screen bg-[#000e04] relative">
        <div className="absolute -top-56 left-0 w-full h-56 bg-linear-to-b from-black/0 to-[#000e04]"></div>
        <div className="flex flex-col-reverse items-center md:flex-row gap-20 container mx-auto px-4 py-16">
          <div className="w-full space-y-6 flex-1 text-xl">
            <h1 className="text-2xl font-permanent-marker md:text-3xl font-bold text-white">
              About Me
            </h1>
            <p className="text-[#c0c0c0]">
              I&apos;m a full-stack developer who loves turning ideas into
              immersive digital experiences. I build modern web applications
              with Next.js, React, Node.js, TypeScript, Express, and MongoDB,
              combining clean design with reliable engineering.
            </p>
            <p className="text-[#c0c0c0]">
              I enjoy creating products from the ground up—solving problems,
              refining every detail, and continuously learning along the way.
              For me, great software isn&apos;t just about writing code;
              it&apos;s about crafting experiences people remember.
            </p>
          </div>
          <div className="max-h-[70%] md:max-w-2/5">
            <Image
              src="/images/poster.png"
              width={1000}
              height={1000}
              alt="banner"
              className="w-full h-fit object-contain "
            />
          </div>
        </div>
      </section>
      <WhereIWork />
      <RecentProjects />
      <Contact />
    </main>
  );
}
