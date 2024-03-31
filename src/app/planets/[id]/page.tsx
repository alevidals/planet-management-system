"use client";

import { planetsAtom } from "@/lib/atoms";
import { useAtomValue, useStore } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  params: { id: string };
};

export default function PlanetsPage({ params }: Props) {
  const router = useRouter();
  const planets = useAtomValue(planetsAtom, {
    store: useStore(),
  });

  const planet = planets.find(
    (planet) => planet.id === decodeURIComponent(params.id),
  );

  if (!planet) {
    router.push("/");
    return;
  }

  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });

  const formattedClimates = formatter.format(planet.climates);
  const formattedTerrains = formatter.format(planet.terrains);

  return (
    <main>
      <h1 className="text-primary">PMS</h1>
      <Link className="underline" href="/planets">
        Back to planets
      </Link>
      <div className="flex flex-col gap-5">
        <div className="bg-zinc-900 rounded-lg p-4 w-64">
          <p>Name</p>
          <p>{planet.name}</p>
        </div>
        <div className="bg-zinc-900 rounded-lg p-4 w-64">
          <p>Diameter</p>
          <p>{planet.diameter}</p>
        </div>
        <div className="bg-zinc-900 rounded-lg p-4 w-64">
          <p>Climate</p>
          <p>{formattedClimates}</p>
        </div>
        <div className="bg-zinc-900 rounded-lg p-4 w-64">
          <p>Terrain</p>
          <p>{formattedTerrains}</p>
        </div>
        <div className="bg-zinc-900 rounded-lg p-4 w-64">
          <p>Residents</p>
          <ul>
            {planet.residents.map((resident) => (
              <li key={resident.id}>{resident.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
