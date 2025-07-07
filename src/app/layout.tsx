import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import MobileBrandHeader from "@/components/MobileMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kimmie Rokahr Design | Kitchen & Bath Designer Charlotte, NC",
  description: "Renowned kitchen and bath designer in Charlotte, NC. 15 years of experience creating functional, elegant kitchens blending modern aesthetics with timeless design principles.",
  icons: {
    icon: "/images/KR_logo.png",
    shortcut: "/images/KR_logo.png",
    apple: "/images/KR_logo.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        <MobileBrandHeader />
        {children}
      </body>
    </html>
  );
}
