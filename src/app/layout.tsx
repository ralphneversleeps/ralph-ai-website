import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ralph AI — AI Workforce for Marketing Agencies",
  description:
    "Deploy a tailored AI workforce that monitors campaigns 24/7, automates reporting, and scales your agency without hiring. Not a SaaS — a custom deployment built for your workflows.",
  keywords: [
    "AI for marketing agencies",
    "AI workforce",
    "campaign monitoring",
    "marketing automation",
    "AI consultancy",
    "ROAS optimization",
  ],
  openGraph: {
    title: "Ralph AI — AI Workforce for Marketing Agencies",
    description:
      "Deploy a tailored AI workforce that monitors campaigns 24/7, automates reporting, and scales your agency without hiring.",
    type: "website",
    url: "https://ralph-ai-website.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ralph AI — AI Workforce for Marketing Agencies",
    description:
      "Deploy a tailored AI workforce that monitors campaigns 24/7, automates reporting, and scales your agency without hiring.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
