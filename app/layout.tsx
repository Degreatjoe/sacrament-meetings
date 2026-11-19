import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavLinks from "@/components/NavLinks";
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
  title: "Oakridge 2nd Ward Sacrament Meetings",
  description: "Sacrament meeting agendas for Oakridge 2nd Ward",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        <Header />
        <Suspense
          fallback={
            <nav className="flex min-h-12 justify-center gap-8 bg-ward-green text-white" aria-label="Main navigation">
              <span className="grid place-items-center px-2 text-sm">Home</span>
              <span className="grid place-items-center px-2 text-sm">All Meetings</span>
              <span className="grid place-items-center px-2 text-sm">Current Sunday</span>
            </nav>
          }
        >
          <NavLinks />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
