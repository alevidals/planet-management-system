import { PlanetsList } from "@/components/planets/planets-list";
import { PlanetsListsFilter } from "@/components/planets/planets-lists-filter";
import { getPlanets } from "@/lib/planets";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "PMS - Planets",
  description: "Planet Management System",
};

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
