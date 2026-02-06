import "./globals.css";
import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { RainbowCursor } from "@/components/global/RainbowCursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Mudassar | Frontend Developer",
  description:
    "Frontend Developer with 2.5+ years of experience building scalable, responsive, and user-focused web applications using React.js, Next.js, and WordPress. Based in Lahore, Pakistan.",
  keywords: [
    "Frontend Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "WordPress",
    "Web Developer",
    "Muhammad Mudassar",
    "Lahore",
  ],
  authors: [{ name: "Muhammad Mudassar" }],
  creator: "Muhammad Mudassar",
  icons: {
    icon: "/favicon.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadmudassar.dev",
    title: "Muhammad Mudassar | Frontend Developer",
    description:
      "Frontend Developer crafting scalable web experiences with React, Next.js & WordPress",
    siteName: "Muhammad Mudassar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Mudassar | Frontend Developer",
    description:
      "Frontend Developer crafting scalable web experiences with React, Next.js & WordPress",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#0a0d17]">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased `}
      >
        <RainbowCursor />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
