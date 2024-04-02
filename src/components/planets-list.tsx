"use client";

import { Pagination } from "@/components/pagination";
import { PlanetCard } from "@/components/planet-card";
import { PlanetsListsFilter } from "@/components/planets-lists-filter";

import { planetsAtom } from "@/lib/atoms";
import { ITEMS_PER_PAGE } from "@/lib/constants";
import type { Order, OrderByField, Planet } from "@/lib/types";
import { useAtom, useStore } from "jotai";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Props = {
  planets: Planet[];
};

export function PlanetsList({ planets: initialPlanets }: Props) {
  const searchParams = useSearchParams();

  const [planets, setPlanets] = useAtom(planetsAtom, {
    store: useStore(),
  });

  useEffect(() => {
    if (localStorage.getItem("planets") === null) {
      setPlanets(initialPlanets);
    }
  }, []);

  const search = searchParams.get("search") ?? "";
  const page = searchParams.get("page") ?? 1;
  const orderBy = (searchParams.get("orderBy") as OrderByField) ?? "";
  const order = (searchParams.get("order") as Order) ?? "asc";

  if (!planets) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    );
  }

  let filteredAndSortedPlanets = [...(planets ?? [])];

  if (search) {
    filteredAndSortedPlanets = planets?.filter(
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

  const totalPages = Math.ceil(
    filteredAndSortedPlanets.length / ITEMS_PER_PAGE,
  );

  const totalItems = filteredAndSortedPlanets.length;

  filteredAndSortedPlanets = filteredAndSortedPlanets.slice(
    (Number(page) - 1) * ITEMS_PER_PAGE,
    Number(page) * ITEMS_PER_PAGE,
  );

  return (
    <>
      <PlanetsListsFilter />
      {filteredAndSortedPlanets.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {filteredAndSortedPlanets.map((planet) => (
              <PlanetCard planet={planet} key={planet.id} />
            ))}
          </div>
          {totalPages > 1 && filteredAndSortedPlanets.length > 0 ? (
            <Pagination currentPage={Number(page)} totalItems={totalItems} />
          ) : null}
        </>
      ) : (
        <div className="flex items-center justify-center h-96">
          <p className="text-xl font-bold">No planets found</p>
        </div>
      )}
    </>
  );
}
