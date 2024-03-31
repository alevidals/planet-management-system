"use client";

import { PlanetCard } from "@/components/planet-card";
import { planetsAtom } from "@/lib/atoms";
import type { Planet } from "@/lib/types";
import { useAtom, useStore } from "jotai";

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

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {planets.map((planet) => (
        <PlanetCard planet={planet} key={planet.id} />
      ))}
    </div>
  );
}
