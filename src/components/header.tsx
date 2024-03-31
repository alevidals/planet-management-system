import { AddPlanetForm } from "@/components/add-planet-form";
import { IconWorld } from "@tabler/icons-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-content1 p-3 rounded-xl mb-4 flex items-center justify-between container mx-auto">
      <Link className="flex items-center gap-x-2" href="/">
        <IconWorld size={24} className="text-primary" />
        <h1 className="text-xl text-primary">PMS</h1>
      </Link>
      <AddPlanetForm />
    </header>
  );
}
