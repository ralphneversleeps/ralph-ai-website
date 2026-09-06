import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ralph AI — AI Agent Teams for Marketing Agencies",
  description:
    "Deploy a team of six AI agents tailored to your agency. Monitor campaigns 24/7, automate reporting, catch budget blowouts, and scale without hiring. ROI-positive in 30 days.",
  keywords: [
    "AI for marketing agencies",
    "AI agents",
    "campaign monitoring",
    "automated reporting",
    "marketing agency automation",
    "AI operations",
    "managed AI services",
    "marketing AI",
    "agency scaling",
    "ROAS optimization",
    "budget blowout detection",
    "creative fatigue detection",
  ],
  authors: [{ name: "Ralph AI" }],
  creator: "Ralph AI",
  metadataBase: new URL("https://ralph.ai"),
  openGraph: {
    title: "Ralph AI — Your Agency Doesn't Need More People. It Needs Better Intelligence.",
    description:
      "Deploy a team of six AI agents tailored to your agency. Monitor campaigns 24/7, automate reporting, catch budget blowouts, and scale without hiring.",
    type: "website",
    url: "https://ralph.ai",
    siteName: "Ralph AI",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ralph AI — AI Agent Teams for Marketing Agencies",
    description:
      "Deploy six AI agents tailored to your agency. Monitor ads 24/7, automate reports, catch budget blowouts. ROI-positive in 30 days.",
    creator: "@RalphBot101",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
