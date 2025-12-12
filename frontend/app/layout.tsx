import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// app/layout.tsx
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "TaoView",
  description: "Bittensor Network Explorer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <NavBar />
        <main className="pt-16"> {/* push content below navbar */}
          {children}
        </main>
      </body>
    </html>
  )};