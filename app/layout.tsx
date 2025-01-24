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
          <main className="container mx-auto px-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
