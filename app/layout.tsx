import type { Metadata } from "next";
import { Cormorant_Garamond, Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-hero",
  display: "swap",
  weight: ["500", "600", "700"]
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.payoff}`,
  description: siteConfig.description,
  metadataBase: new URL("https://beautybenessere.it"),
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.payoff}`,
    description: siteConfig.description,
    url: "https://beautybenessere.it",
    siteName: siteConfig.name,
    locale: "it_IT",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${fraunces.variable} ${cormorant.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
