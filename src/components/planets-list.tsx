"use client";

import { PlanetCard } from "@/components/planet-card";
import { planetsAtom } from "@/lib/atoms";
import type { Planet } from "@/lib/types";
import { Input } from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";
import { useAtom, useStore } from "jotai";
import { useState } from "react";

type Props = {
  planets: Planet[];
};

export function PlanetsList({ planets: initialPlanets }: Props) {
  const store = useStore();
  const [planets, setPlanets] = useAtom(planetsAtom, {
    store,
  });
  const [search, setSearch] = useState("");

  if (!planets.length) {
    setPlanets(initialPlanets);
  }

  const filteredPlanets = planets.filter(
    (planet) =>
      planet.name.toLowerCase().includes(search.toLowerCase()) ||
      planet.climates.some(({ climate }) =>
        climate.toLocaleLowerCase().includes(search.toLowerCase()),
      ) ||
      planet.terrains.some(({ terrain }) =>
        terrain.toLocaleLowerCase().includes(search.toLowerCase()),
      ),
  );

  return (
    <>
      <Input
        size="lg"
        className="mb-4"
        placeholder="Search planets by name, climate or terrain"
        startContent={<IconSearch size={20} className="text-primary" />}
        value={search}
        onValueChange={(value) => setSearch(value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlanets.map((planet) => (
          <PlanetCard planet={planet} key={planet.id} />
        ))}
      </div>
    </>
  );
}
