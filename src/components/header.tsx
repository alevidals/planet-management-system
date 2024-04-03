"use client";

import { HeaderNav } from "@/components/header-nav";
import { HeaderSheet } from "@/components/header-sheet";
import { Heading } from "@/components/heading";
import { AddPlanetButton } from "@/components/ui/add-planet-button";
import { cn } from "@/lib/utils";
import { IconPlanet } from "@tabler/icons-react";
import localFont from "next/font/local";
import Link from "next/link";

const swFont = localFont({
  src: "../../public/fonts/aurebesh.otf",
  display: "swap",
});

export function Header() {
  return (
    <header className="border bg-default-100 p-3 rounded-xl mb-4 flex items-center justify-between text-foreground h-16">
      <Link href="/" className="flex items-center gap-x-3">
        <div className="p-2 rounded-full bg-primary">
          <IconPlanet size={24} className="text-black rounded-full" />
        </div>
        <Heading
          as="h1"
          className={cn(swFont.className, "text-primary text-base")}
        >
          <span className="hidden md:inline">Planet Management System</span>
          <span className="md:hidden">PMS</span>
        </Heading>
      </Link>
      <div className="flex items-center gap-x-6">
        <div className="hidden md:block">
          <HeaderNav />
        </div>
        <AddPlanetButton className="hidden md:inline-block" />
      </div>
      <HeaderSheet />
    </header>
  );
}
