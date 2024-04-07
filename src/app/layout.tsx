import { Footer } from "@/components/footer";
import { Header } from "@/components/header/header";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

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
      <body className={`${roboto.className} dark`}>
        <div className="min-h-dvh flex flex-col pt-4 relative z-50">
          <div className="container flex-1">
            <Header />
            {children}
          </div>
          <Footer />
        </div>
        <div className="w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] fixed inset-0 flex items-center justify-center z-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
