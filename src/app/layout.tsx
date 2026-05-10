import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/TopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { CommandPaletteProvider } from "@/components/CommandPalette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kasparknudsen.no"),
  title: {
    default: "Kaspar Knudsen — Frilansjournalist",
    template: "%s · Kaspar Knudsen",
  },
  description:
    "Frilansjournalist i Bergen. Gravesaker, reportasje og feature — med fokus på kyst, fiskeri og samfunn.",
  applicationName: "Kaspar Knudsen",
  authors: [{ name: "Kaspar Knudsen" }],
  openGraph: {
    title: "Kaspar Knudsen — Frilansjournalist",
    description:
      "Frilansjournalist i Bergen. Gravesaker, reportasje og feature.",
    locale: "nb_NO",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <CommandPaletteProvider>
          <TopNav />
          <main id="main" className="flex-1 flex flex-col">
            {children}
          </main>
          <SiteFooter />
        </CommandPaletteProvider>
      </body>
    </html>
  );
}
