import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
  description: "A portofolio website of Mochamad Syahrial Alzaidan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/yalz.png" />
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
