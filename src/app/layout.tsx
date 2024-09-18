import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mochamad Syahrial Alzaidan",
  description: "A portfolio website of Mochamad Syahrial Alzaidan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Mochamad Syahrial Alzaidan</title>
        <link rel="icon" href="/yalz.png" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
