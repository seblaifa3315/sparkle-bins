import type { Metadata } from "next";
import { Geist, Nunito } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sparkle Bins — Fresh, Clean Bins Every Time",
  description:
    "Neighborhood trash bin cleaning service. We make your bins sparkle so you don't have to. Just $10 per bin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${nunito.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
