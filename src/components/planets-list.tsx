"use client";

import { Pagination } from "@/components/pagination";
import { PlanetCard } from "@/components/planet-card";
import { PlanetsListsFilter } from "@/components/planets-lists-filter";
import { buttonVariants } from "@/components/ui/button";

import { planetsAtom } from "@/lib/atoms";
import { ITEMS_PER_PAGE } from "@/lib/constants";
import type { Order, OrderByField, Planet } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useAtom, useStore } from "jotai";
import Link from "next/link";
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
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
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

  const totalItems = filteredAndSortedPlanets.length;

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  filteredAndSortedPlanets = filteredAndSortedPlanets.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
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
      ) : page > totalPages && totalPages !== 0 ? (
        <div className="flex items-center justify-center h-96 mx-auto max-w-xl text-balance text-center">
          <div>
            <p className="text-lg text-primary">
              "Looks like you've traveled too far into the Unknown Regions of
              our search galaxy! Navigate back to familiar territories or use
              the Force to refine your search coordinates. Remember, even Jedi
              must stay within the boundaries of our search database." 🌌✨
            </p>
            <Link
              href="/planets"
              className={cn(buttonVariants({ variant: "outline" }), "mt-4")}
            >
              Back to first page
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-96 mx-auto max-w-xl text-balance text-center">
          <div>
            <p className="text-lg text-primary">
              "Looks like the Force isn't strong with this search! Try altering
              your parameters or explore our galaxy of options. May the results
              be with you!" 🌟🚀
            </p>
          </div>
        </div>
      )}
    </>
  );
}
