import { PlanetsList } from "@/components/planets-list";
import { getPlanets } from "@/lib/planets";

export default async function PlanetsPage() {
  const planets = await getPlanets();

  return (
    <main className="container mx-auto">
      <PlanetsList planets={planets} />
    </main>
  );
}
