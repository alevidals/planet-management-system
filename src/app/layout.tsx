import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
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
      <body
        className={`${inter.className} dark bg-background p-4 min-h-screen flex flex-col`}
      >
        <Providers className="flex-1">
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
