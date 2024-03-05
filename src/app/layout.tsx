import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Karam El-loh",
  description: "Karam El-loh's personal website",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <GoogleAnalytics gaId="GTM-PBFSWWGN"></GoogleAnalytics>
      <body className="text-sm md:text-md lg:text-lg font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
