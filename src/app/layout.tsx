import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PMS",
  description: "Planet Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <div className="relative z-50 container py-4 flex flex-col min-h-dvh">
          <Header />
          <div className="flex-1">{children}</div>
        </div>
        <div className="w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] fixed inset-0 flex items-center justify-center z-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
