"use client";

import { AddPlanetForm } from "@/components/add-planet-form";
import { IconWorld } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/planets", label: "Planets" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border border-default-200 bg-content1 p-3 rounded-xl mb-4 flex items-center justify-between container mx-auto text-foreground">
      <Link className="flex items-center gap-x-2" href="/">
        <IconWorld size={24} className="text-primary" />
        <h1 className="text-xl text-primary">PMS</h1>
      </Link>
      <div className="flex items-center gap-x-4">
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
        <AddPlanetForm />
      </div>
    </header>
  );
}
