import type { Metadata } from "next";
import { Poppins, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
  preload: true,
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source-sans-3",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
  preload: true,
});

export const metadata: Metadata = {
  title: "VersCredit: Global & Indian Financial News at a Glance",
  description:
    "Latest finance, market, and economic news delivered clearly and accurately.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth no-scrollbar">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9959637639836790"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${sourceSans3.variable} ${poppins.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
