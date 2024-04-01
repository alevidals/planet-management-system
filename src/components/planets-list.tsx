"use client";

import { PlanetCard } from "@/components/planet-card";
import { planetsAtom } from "@/lib/atoms";
import { ORDER_FIELDS } from "@/lib/constants";
import type { Planet } from "@/lib/types";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";
import { useAtom, useStore } from "jotai";
import { useState } from "react";

type Props = {
  planets: Planet[];
};

type OrderByField =
  | ""
  | "name"
  | "diameter"
  | "climates"
  | "terrains"
  | "residents";

type Order = "asc" | "desc";

export function PlanetsList({ planets: initialPlanets }: Props) {
  const store = useStore();
  const [planets, setPlanets] = useAtom(planetsAtom, {
    store,
  });
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState<OrderByField>("");
  const [order, setOrder] = useState<Order>("asc");

  let filteredAndSortedPlanets = [...planets];

  if (!planets.length) {
    setPlanets(initialPlanets);
  }

  if (search) {
    filteredAndSortedPlanets = planets.filter(
      (planet) =>
        planet.name.toLowerCase().includes(search.toLowerCase()) ||
        planet.climates.some(({ climate }) =>
          climate.toLocaleLowerCase().includes(search.toLowerCase()),
        ) ||
        planet.terrains.some(({ terrain }) =>
          terrain.toLocaleLowerCase().includes(search.toLowerCase()),
        ),
    );
  }

  if (orderBy) {
    filteredAndSortedPlanets = filteredAndSortedPlanets.sort((a, b) => {
      if (orderBy === "name") {
        return a.name.localeCompare(b.name);
      }

      if (orderBy === "diameter") {
        return a.diameter - b.diameter;
      }

      if (orderBy === "climates") {
        return a.climates.join().localeCompare(b.climates.join());
      }

      if (orderBy === "terrains") {
        return a.terrains.join().localeCompare(b.terrains.join());
      }

      if (orderBy === "residents") {
        return a.residents.length - b.residents.length;
      }

      return 0;
    });

    if (order === "desc") {
      filteredAndSortedPlanets = filteredAndSortedPlanets.reverse();
    }
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <Input
          className="w-full lg:max-w-xs text-foreground"
          variant="faded"
          label="Search planets by name, climate or terrain"
          startContent={<IconSearch size={20} className="text-primary" />}
          value={search}
          onValueChange={(value) => setSearch(value)}
        />
        <Select
          label="Select field to filter"
          variant="faded"
          className="text-foreground w-full lg:max-w-xs"
          selectedKeys={[orderBy]}
          onChange={(event) => setOrderBy(event.target.value as OrderByField)}
        >
          {ORDER_FIELDS.map((field) => (
            <SelectItem
              key={field.value}
              value={field.value}
              className="text-foreground"
            >
              {field.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Select order"
          variant="faded"
          className="text-foreground w-full lg:max-w-xs"
          selectedKeys={[order]}
          onChange={(event) => setOrder(event.target.value as Order)}
          isDisabled={!orderBy}
          disallowEmptySelection={true}
        >
          <SelectItem key="asc" value="asc" className="text-foreground">
            Asc
          </SelectItem>
          <SelectItem key="desc" value="desc" className="text-foreground">
            Desc
          </SelectItem>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAndSortedPlanets.map((planet) => (
          <PlanetCard planet={planet} key={planet.id} />
        ))}
      </div>
    </>
  );
}
