import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";
import { DotPattern } from "@/components/dot-pattern";
import { ThemeProvider, themeBootScript } from "@/components/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kasparknudsen.no"),
  title: {
    default: "Kaspar Knudsen – Frilansjournalist",
    template: "%s – Kaspar Knudsen",
  },
  description:
    "Kaspar Knudsen – frilansjournalist på USF Verftet, Bergen. Kvalitetsjournalistikk og gravejournalistikk levert til Fiskeribladet, Intrafish og Kystens Næringsliv.",
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Kaspar Knudsen",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb" className={manrope.variable} suppressHydrationWarning>
      <head>
        <script
          // Sets data-theme from localStorage before paint to prevent FOUC.
          dangerouslySetInnerHTML={{ __html: themeBootScript }}
        />
      </head>
      <body className="relative min-h-screen flex flex-col bg-paper text-ink antialiased">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:inline-flex focus:items-center focus:gap-2 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper focus:shadow-lift focus:outline-none focus:ring-2 focus:ring-coral-400 focus:ring-offset-2 focus:ring-offset-paper"
          >
            Hopp til hovedinnhold
          </a>
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
            style={{
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            }}
          >
            <DotPattern />
          </div>
          <SiteHeader />
          <PageTransition>{children}</PageTransition>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
