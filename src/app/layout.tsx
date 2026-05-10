import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Masthead } from "@/components/masthead";
import { SiteFooter } from "@/components/site-footer";

const serif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaspar.no"),
  title: {
    default: "Kaspar — Frilansjournalist i Bergen",
    template: "%s · Kaspar",
  },
  description:
    "Kvalitetsjournalistikk fra felt. Reportasje, feature og graving fra Bergen og kysten — av Kaspar, frilansjournalist med kontor på USF Verftet.",
  openGraph: {
    title: "Kaspar — Frilansjournalist i Bergen",
    description:
      "Reportasje, feature og graving fra kysten. Kontor på USF Verftet, Nordnes.",
    type: "website",
    locale: "nb_NO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${serif.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink paper-grain">
        <Masthead />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
