import "./globals.css";

import { JetBrains_Mono, Outfit } from "next/font/google";

import Provider from "@/components/provider";
import { ThemeProvider } from "@/components/theme-provider";

import type { Metadata } from "next";
const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TreSense",
    template: "%s | TreSense",
  },
  description:
    "Automatic Social Media Sentiment Analysis & Response System for Digital Engagement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <Provider>
        <body
          className={`${outfitSans.variable} ${jetbrainsMono.variable} antialiased`}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </Provider>
    </html>
  );
}
