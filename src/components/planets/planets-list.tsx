"use client";

import { Pagination } from "@/components/pagination";
import { EmptyPlanetsList } from "@/components/planets/empty-planets-list";
import { PageOutOfBound } from "@/components/planets/page-out-of-bound";
import { PlanetCard } from "@/components/planets/planet-card";
import { PlanetsNotFound } from "@/components/planets/planets-not-found";

import { usePlanets } from "@/lib/atoms";
import { ITEMS_PER_PAGE } from "@/lib/constants";
import type {
  Order,
  OrderByField,
  Planet,
  ZustandPlanetsStorage,
} from "@/lib/types";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Props = {
  planets: Planet[];
};

type FilterAndSortPlanetsArgs = {
  planets: Planet[];
  search: string;
  orderBy: OrderByField;
  order: Order;
  page: number;
};

function filterAndSortPlanets(args: FilterAndSortPlanetsArgs) {
  const { planets, search, orderBy, order, page } = args;

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

  const totalItems = filteredAndSortedPlanets.length;

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  filteredAndSortedPlanets = filteredAndSortedPlanets.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return {
    filteredAndSortedPlanets,
    totalItems,
    totalPages,
  };
}

export function PlanetsList({ planets: initialPlanets }: Props) {
  const searchParams = useSearchParams();

  const { planets, addPlanets } = usePlanets();

  useEffect(() => {
    const storageItem = localStorage.getItem("planets");
    const local = storageItem
      ? (JSON.parse(storageItem) as ZustandPlanetsStorage)
      : undefined;

    if (!local?.state.planets) {
      addPlanets(initialPlanets);
    }
  }, []);

  if (!planets) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    );
  }

  const search = searchParams.get("search") ?? "";
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const orderBy = (searchParams.get("orderBy") as OrderByField) ?? "";
  const order = (searchParams.get("order") as Order) ?? "asc";

  const { filteredAndSortedPlanets, totalItems, totalPages } =
    filterAndSortPlanets({
      planets,
      search,
      orderBy,
      order,
      page,
    });

  if (
    totalPages !== 0 &&
    (page > totalPages || filteredAndSortedPlanets.length === 0)
  ) {
    return <PageOutOfBound />;
  }

  if (filteredAndSortedPlanets.length > 0) {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {filteredAndSortedPlanets.map((planet) => (
            <PlanetCard planet={planet} key={planet.id} />
          ))}
        </div>
        {totalPages > 1 && filteredAndSortedPlanets.length > 0 && (
          <Pagination currentPage={Number(page)} totalItems={totalItems} />
        )}
      </>
    );
  }

  if (planets.length === 0) {
    return <EmptyPlanetsList />;
  }

  return <PlanetsNotFound />;
}
