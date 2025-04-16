
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./globals.css";
import Navbar from '../components/Navbar';
import BootstrapClient from '../components/BootstrapClient';



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "الشاويش للعطور",
  description: "تشكيلة عطور راقية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
       <head>
        <link href="https://fonts.googleapis.com/css2?family=Amiri&family=Cairo:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Cairo', 'Amiri', sans-serif" }}>
      <BootstrapClient />
      <Navbar />
        {children}
      </body>
    </html>
  );
}
