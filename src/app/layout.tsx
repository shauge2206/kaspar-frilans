import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReadingProgress } from "@/components/ReadingProgress";
import { PageTransition } from "@/components/PageTransition";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "optional",
  preload: true,
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "optional",
  preload: true,
});

export const metadata: Metadata = {
  title: "Kaspar Knudsen – frilansjournalist i Bergen",
  description:
    "Frilansjournalist i Bergen. Mastergrad i undersøkende journalistikk. Leverer til Fiskeribladet, Intrafish og Kystens Næringsliv.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${sourceSerif.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <a href="#main" className="skip-to-content">
          Hopp til hovedinnhold
        </a>
        <ReadingProgress />
        <div className="noise" aria-hidden />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
