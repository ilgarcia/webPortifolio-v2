import type { Metadata } from "next";
import { Inter, Fira_Code, Sriracha } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "l.garcia",
  description:
    "Hi, my name is Igor Lima Garcia i'm a software engineer specializing in building exceptional and practical digital experiences and this is my portfolio",
};

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter-font",
});

export const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--fira-font",
  preload: true,
});

export const sriracha = Sriracha({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--Sriracha-font",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${firaCode.variable} ${sriracha.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
