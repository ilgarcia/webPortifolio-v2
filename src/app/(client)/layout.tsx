import type { Metadata } from "next";
import { Source_Sans_3, Fira_Code, Sriracha } from "next/font/google";

import Header from "../../components/Header/Header";

import "../globals.css";

export const metadata: Metadata = {
  title: "ilgarcia",
  description:
    "Hi, my name is Igor Lima Garcia i'm a software engineer specializing in building exceptional and practical digital experiences and this is my portfolio",
  keywords:
    "ilgarcia, portfolio, web developer, front-end, back-end, fullstack, devops, JavaScript, HTML, CSS",
  creator: "Igor Lima Garcia",
  authors: {
    name: "Igor Lima Garcia",
    url: "https://www.linkedin.com/in/ilgarcia/",
  },
  robots: "index, follow",
};

export const source = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--source-font",
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
      className={`${source.className} ${firaCode.variable} ${sriracha.variable}`}
    >
      <body className="relative">
        <div className="absolute top-0 -left-2 w-full h-full bg-[linear-gradient(to_right,_#34d39908_1px,_transparent_1px),linear-gradient(#34d39908_1px,_transparent_1px)] -z-50 bg-[length:100px_100px]" />
        <Header />
        {children}
      </body>
    </html>
  );
}
