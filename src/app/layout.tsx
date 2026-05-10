import type { Metadata } from "next";
import { Anton, Space_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import BreakingRibbon from "@/components/BreakingRibbon";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaspar — Frilansjournalist fra Bergen",
  description:
    "Undersøkende journalistikk fra felt. Reportasjer, gravesaker og menneskenære historier fra Bergen, kysten og videre. Master i gravejournalistikk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${anton.variable} ${spaceMono.variable} ${sourceSerif.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <BreakingRibbon />
        <SiteHeader />
        <main className="flex-1 relative z-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
