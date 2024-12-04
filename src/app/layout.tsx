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

const geistAnton = localFont({
  src: "./fonts/Anton-Regular.ttf",
  variable: "--font-geist-Anton",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ElkTop: Unlock Exclusive Offers",
  description:
    "Explore the best discounts with ElkTop. Use our plugin to quickly claim exclusive coupons and shop smarter. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="verify-admitad" content="5af0702a27" />
      <body
        className={`${geistChakraPetch.variable} ${geistProtestRevolution.variable} ${geistAnton.variable} ${styles.container}`}
      >
        <Header />
        <div className={styles.content}>
          <div className={styles.sliding}>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
