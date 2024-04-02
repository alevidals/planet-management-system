"use client";

import { AddPlanetDialog } from "@/components/add-planet-dialog";
import { HeaderSheet } from "@/components/header-sheet";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { IconPlanet } from "@tabler/icons-react";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const swFont = localFont({
  src: "../../public/fonts/aurebesh.otf",
  display: "swap",
});

export function Header() {
  const [isOpenAddPlanetDialog, setIsOpenAddPlanetDialog] = useState(false);

  const pathname = usePathname();

  return (
    <header className="border bg-default-100 p-3 rounded-xl mb-4 flex items-center justify-between text-foreground h-16">
      <div className="flex items-center gap-x-3">
        <Link className="bg-primary p-2 rounded-full" href="/">
          <IconPlanet size={24} className="text-black rounded-full" />
        </Link>
        <h1 className={cn(swFont.className, "text-primary")}>
          <span className="hidden md:inline">Planet Management System</span>
          <span className="md:hidden">PMS</span>
        </h1>
      </div>
      <div className="items-center gap-x-4 hidden md:flex">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              link.href === pathname
                ? "underline text-primary font-semibold"
                : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Button
          className="font-semibold"
          onClick={() => setIsOpenAddPlanetDialog(true)}
        >
          Add planet
        </Button>
      </div>
      <HeaderSheet />
      <AddPlanetDialog
        isOpen={isOpenAddPlanetDialog}
        setIsOpen={setIsOpenAddPlanetDialog}
      />
    </header>
  );
}
