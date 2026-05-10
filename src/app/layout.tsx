import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kasparknudsen.no"),
  title: {
    default: "Kaspar Knudsen — frilansjournalist i Bergen",
    template: "%s · Kaspar Knudsen",
  },
  description:
    "Frilansjournalist i Bergen med kontor på USF Verftet, Nordnes. Mastergrad i undersøkende journalistikk. Leverer til Fiskeribladet, Intrafish og Kystens Næringsliv.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nb"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <SiteHeader />
        <main className="flex-1 page-fade">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
