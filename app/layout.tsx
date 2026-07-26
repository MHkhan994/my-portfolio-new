import type { Metadata } from "next";
import { Permanent_Marker, Geist, Patrick_Hand } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import LeafCursor from "@/components/global/LeafCursor";
import LoadingReveal from "@/components/global/LoadingReveal";
import LoadingScreen from "@/components/global/LoadingScreen";
import ScrollIndicator from "@/components/global/ScrollIndicator";
import ScrollProgressBar from "@/components/global/ScrollProgressBar";
import ToucanFly from "@/components/animations/ToucanFly";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: "400",
});

const patrick = Patrick_Hand({
  variable: "--font-patrick-hand",
  subsets: ["latin"],
  weight: ["400"],
});

const title = "Mahmudul Hasan Khan | Full-Stack Developer";
const description =
  "Portfolio of Mahmudul Hasan Khan, a full-stack developer building modern, production-ready web applications with Next.js, React, Node.js, TypeScript, PostgreSQL, and AWS.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Mahmudul Hasan Khan",
    "Full-Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Mahmudul Hasan Khan" }],
  creator: "Mahmudul Hasan Khan",
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        permanentMarker.variable,
        patrick.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body>
        <ReactLenis root />
        <LeafCursor zIndex={10000} />
        <LoadingScreen />
        <LoadingReveal />
        <ScrollIndicator />
        <ScrollProgressBar />
        <ToucanFly />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
