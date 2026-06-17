import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The AI Agent Factory — Quiz",
  description: "515 MCQs across 18 parts covering the Orientation, Thesis, Operating Layer, Quick Start, AI Prompting, Markdown/HTML, and Skills & Connectors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#0f172a]">
        <div className="flex-1 flex flex-col">{children}</div>
        <footer className="py-5 text-center border-t border-slate-700/50 bg-slate-900/50">
          <p className="text-sm text-slate-400">
            Designed by <span className="text-indigo-400 font-semibold">Azmat Ali</span>
          </p>
        </footer>
      </body>
    </html>
  );
}
