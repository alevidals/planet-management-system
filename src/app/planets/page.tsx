import { PlanetsList } from "@/components/planets-list";
import { PlanetsListsFilter } from "@/components/planets-lists-filter";
import { getPlanets } from "@/lib/planets";
import { Suspense } from "react";

export default async function PlanetsPage() {
  const planets = await getPlanets();

  return (
    <main>
      <Suspense>
        <PlanetsListsFilter />
        <PlanetsList planets={planets} />
      </Suspense>
    </main>
  );
}
