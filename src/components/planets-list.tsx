"use client";

import { planetsAtom } from "@/lib/atoms";
import type { Planet } from "@/lib/types";
import { useAtom, useStore } from "jotai";
import Link from "next/link";

type Props = {
  planets: Planet[];
};

export function PlanetsList({ planets: initialPlanets }: Props) {
  const store = useStore();
  const [planets, setPlanets] = useAtom(planetsAtom, {
    store,
  });

  if (!planets.length) {
    setPlanets(initialPlanets);
  }

  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });

  return (
    <div>
      <ul className="grid grid-cols-3 gap-4">
        {planets.map((planet) => (
          <li className="bg-zinc-900 p-4 rounded-lg" key={planet.id}>
            <Link href={`/planets/${planet.id}`}>
              <p>{planet.name}</p>
              <p>{planet.diameter}</p>
              <p>{formatter.format(planet.climates)}</p>
              <p>{formatter.format(planet.terrains)}</p>
              <p>{planet.residents.length}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
