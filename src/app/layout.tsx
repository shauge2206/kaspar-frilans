import type { Metadata } from "next";
import { Caveat, Kalam, Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const kalam = Kalam({
  variable: "--font-hand-alt",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-type",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaspar Knudsen — frilansjournalist",
  description:
    "Frilansjournalist i Bergen med kontor på USF Verftet, Nordnes. Mastergrad i undersøkende journalistikk. Leverer til Fiskeribladet, Intrafish og Kystens Næringsliv.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb-NO"
      className={`${lora.variable} ${caveat.variable} ${kalam.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-ink">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="relative z-10 flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
