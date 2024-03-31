"use client";

import { planetsAtom } from "@/lib/atoms";
import type { Planet } from "@/lib/types";
import { useAtomValue, useStore } from "jotai";
import Link from "next/link";
import { useRef } from "react";

type Props = {
  planets: Planet[];
};

export function PlanetsList({ planets: initialPlanets }: Props) {
  const store = useStore();
  const loaded = useRef(false);

  if (!loaded.current) {
    loaded.current = true;
    store.set(planetsAtom, initialPlanets);
  }

  const planets = useAtomValue(planetsAtom, {
    store,
  });

  return (
    <div>
      <ul className="grid grid-cols-3 gap-4">
        {planets.map((planet) => (
          <li className="bg-zinc-900 p-4 rounded-lg" key={planet.id}>
            <Link href={`/planets/${planet.id}`}>
              <p>{planet.name}</p>
              <p>{planet.diameter}</p>
              <p>{planet.climates.join(",")}</p>
              <p>{planet.terrains.join(",")}</p>
              <p>{planet.residents.length}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
