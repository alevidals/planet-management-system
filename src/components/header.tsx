"use client";

import { AddPlanetForm } from "@/components/add-planet-form";
import { HeaderDropdown } from "@/components/header-dropdown";
import { Button, useDisclosure } from "@nextui-org/react";
import { IconPlanet } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/planets", label: "Planets" },
];

export function Header() {
  const pathname = usePathname();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <header className="border border-default-200 bg-default-100 p-3 rounded-xl mb-4 flex items-center justify-between container mx-auto text-foreground">
      <Link className="flex items-center gap-x-2" href="/">
        <IconPlanet size={24} className="text-primary" />
        <h1 className="text-xl text-primary">PMS</h1>
      </Link>
      <div className="items-center gap-x-4 hidden md:flex">
        {links.map((link) => (
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
          className="bg-primary-400 text-background font-semibold"
          onPress={onOpen}
        >
          Add planet
        </Button>
      </div>
      <HeaderDropdown />
      <AddPlanetForm isOpen={isOpen} onOpenChange={onOpenChange} />
    </header>
  );
}
