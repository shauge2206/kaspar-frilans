import type { Metadata } from "next";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kaspar Knudsen – Frilansjournalist, Bergen",
    template: "%s – Kaspar Knudsen",
  },
  description:
    "Kaspar Knudsen er frilansjournalist i Bergen med spesialfelt innen graving, fiskeri, kystnæring og arbeidsliv. Kvalitetsjournalistikk fra felt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${serif.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="page-fade flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
