"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { metadata } from "./layout.metadata";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticlesBackground";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a0f] text-white`}>
        <ParticleBackground />
        <div className="relative z-10">
          <Navbar />
          <main className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
