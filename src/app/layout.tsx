import type { Metadata } from "next";
import { Manrope, JetBrains_Mono, Lora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const serif = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kaspar Knudsen – Frilansjournalist, Bergen",
    template: "%s · Kaspar Knudsen",
  },
  description:
    "Kaspar Knudsen er frilansjournalist i Bergen med kontor på USF Verftet, Nordnes. Mastergrad i undersøkende journalistikk og 15 år i mediebransjen. Leverer kvalitetsjournalistikk til Fiskeribladet, Intrafish og Kystens Næringsliv.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${display.variable} ${mono.variable} ${serif.variable} antialiased`}
    >
      <body className="bg-paper text-ink min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
