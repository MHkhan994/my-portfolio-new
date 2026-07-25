import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

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

const Banner = () => {
  return (
    <section
      className="h-[calc(100dvh+200px)] pb-50 relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        className="origin-top"
        initial={{
          y: -600,
          opacity: 0,
          rotate: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          rotate: [0, -0.6, 0.6, -0.6, 0.6, 0],
        }}
        transition={{
          y: { delay: 5, duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          opacity: { delay: 5, duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          rotate: {
            delay: 6.2,
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          },
        }}
      >
        <div className="relative z-10 w-fit flex items-center justify-center">
          <div className="md:max-w-[70%] relative">
            <div className="absolute w-full h-full flex flex-col  justify-center p-4 md:px-20 px-7">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4 text text-dark-gray mix-blend-multiply">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Mahmudul Hasan Khan
                  </h3>
                  <p className="text-base md:text-lg font-medium">
                    khanmahmud994@gmail.com
                  </p>
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
                  "Welcome, I'm A Full-Stack Developer",
                  5000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Welcome, I'm A Software Developer",
                  5000,
                ]}
                className="text-xl sm:text-3xl font-permanent-marker md:text-4xl font-bold text-dark-gray mix-blend-multiply"
                wrapper="span"
                speed={50}
                preRenderFirstString
                cursor={false}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
              <p className="text-xl md:text-2xl font-semibold text-dark-gray mix-blend-multiply mt-4">
                With 3+ years of experience, I build end-to-end web
                applications—from intuitive UI/UX and modern frontend
                development to scalable backend systems, database architecture
                and cloud deployment. I specialize in delivering secure,
                high-performance, production-ready solutions that are built to
                scale.
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
      </motion.div>
    </section>
  );
};

export default Banner;
