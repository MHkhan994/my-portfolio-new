"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

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
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/MHkhan994",
  //   icon: "/logos/twitter-logo.png",
  // },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1zwMh84tybVHh12QaJsU7zYnebZ5iiMR2/view?usp=sharing",
    icon: "/logos/resume.png",
    height: 32,
    width: 32,
  },
  {
    name: "Email",
    url: "mailto:khanmahmud994@gmail.com",
    icon: "/logos/mail.png",
    height: 32,
    width: 32,
  },
];

export default function Home() {
  return (
    <main>
      <section
        className="h-[calc(100dvh+200px)] pb-50 relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* <Image
          className="object-cover absolute w-full h-full"
          src="/images/background.png"
          fill
          alt="banner"
        /> */}

        <div className="relative z-10 w-fit flex items-center justify-center">
          <div className="md:max-w-[70%] relative">
            <div className="absolute w-full h-full flex flex-col  justify-center p-4 md:px-20 px-7">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4 text text-dark-gray mix-blend-multiply">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    Mahmudul Hasan Khan
                  </h3>
                  <p>khanmahmud994@gmail.com</p>
                </div>
                <div className="flex items-center gap-5">
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
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Hello, I'm Mahmudul Hasan",
                  5000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Hello, I'm A Software Developer",
                  5000,
                ]}
                className="text-xl sm:text-3xl md:text-4xl font-bold text-dark-gray mix-blend-multiply"
                wrapper="span"
                speed={50}
                preRenderFirstString
                cursor={false}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
              <p className="text-xl text-dark-gray mix-blend-multiply mt-4">
                I&apos;m a software developer specializing in building
                exceptional digital experiences.
              </p>
            </div>

            <div>
              <Image
                className="w-full hidden md:block"
                src="/images/card-landscape.png"
                width={3000}
                height={1500}
                alt="banner"
              />

              <Image
                className="h-full object-contain md:hidden max-h-[70%]"
                src="/images/card-portrait.png"
                width={1500}
                height={3000}
                alt="banner"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#000e04] relative">
        <div className="absolute -top-56 left-0 w-full h-56 bg-linear-to-b from-black/0 to-[#000e04]"></div>
        <div className="flex flex-col-reverse items-center md:flex-row gap-20 container mx-auto px-4 py-16">
          <div className="w-full space-y-6 flex-1">
            <h1 className="text-3xl font-bold text-white">About Me</h1>
            <p className="text-[#c0c0c0]">
              I'm a full-stack developer who loves turning ideas into immersive
              digital experiences. I build modern web applications with Next.js,
              React, Node.js, TypeScript, Express, and MongoDB, combining clean
              design with reliable engineering.
            </p>
            <p className="text-[#c0c0c0]">
              I enjoy creating products from the ground up—solving problems,
              refining every detail, and continuously learning along the way.
              For me, great software isn't just about writing code; it's about
              crafting experiences people remember.
            </p>
          </div>
          <div className="max-h-[70%] max-w-2/5">
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
      {/* <section className="h-screen bg-[#000e04]"></section> */}
    </main>
  );
}
