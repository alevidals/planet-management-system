import { AddPlanetForm } from "@/components/add-planet-form";
import { PlanetsList } from "@/components/planets-list";
import { getPlanets } from "@/lib/planets";
import Link from "next/link";

export default async function PlanetsPage() {
  const planets = await getPlanets();

  return (
    <main className="min-h-screen container mx-auto">
      <h1 className="text-primary">PMS</h1>
      <h2>Planets Page</h2>
      <Link className="underline" href="/">
        Go to home
      </Link>

      <AddPlanetForm />
      <PlanetsList planets={planets} />
    </main>
  );
}
