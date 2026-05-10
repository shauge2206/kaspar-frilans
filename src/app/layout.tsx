import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GradientBackdrop } from "@/components/gradient-backdrop";
import { PageTransition } from "@/components/page-transition";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stianhauge.no"),
  title: {
    default: "Stian Pablo Hauge — Frilansjournalist",
    template: "%s — Stian Pablo Hauge",
  },
  description:
    "Stian Pablo Hauge er frilansjournalist i Bergen. Kvalitetsjournalistikk om kyst, hav og næringsliv — med frihet under ansvar.",
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Stian Pablo Hauge",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nb"
      className={`${fraunces.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen flex flex-col bg-paper text-ink antialiased selection:bg-coral-200/80 selection:text-ink">
        <GradientBackdrop />
        <SiteHeader />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
