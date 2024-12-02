import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import styles from "./layout.module.css";

import "@/styles/index.css";

const geistChakraPetch = localFont({
  src: "./fonts/ChakraPetch.ttf",
  variable: "--font-geist-ChakraPetch",
  weight: "100 900",
});
const geistProtestRevolution = localFont({
  src: "./fonts/ProtestRevolution.ttf",
  variable: "--font-geist-ProtestRevolution",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistChakraPetch.variable} ${geistProtestRevolution.variable} ${styles.container}`}
      >
        <Header />
        <div className={styles.content}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
