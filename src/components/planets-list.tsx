"use client";

import { Pagination } from "@/components/pagination";
import { PlanetCard } from "@/components/planet-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { planetsAtom } from "@/lib/atoms";
import { ITEMS_PER_PAGE, ORDER_FIELDS } from "@/lib/constants";
import type { Planet } from "@/lib/types";
import { IconEraser } from "@tabler/icons-react";
import { useAtom, useStore } from "jotai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [planets, setPlanets] = useAtom(planetsAtom, {
    store: useStore(),
  });

  const search = searchParams.get("search") ?? "";
  const page = searchParams.get("page") ?? 1;
  const orderBy = (searchParams.get("orderBy") as OrderByField) ?? "";
  const order = (searchParams.get("order") as Order) ?? "asc";

  if (!planets.length) {
    setPlanets(initialPlanets);
  }

  let filteredAndSortedPlanets = [...planets];

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

  const totalPages = Math.ceil(
    filteredAndSortedPlanets.length / ITEMS_PER_PAGE,
  );

  const totalItems = filteredAndSortedPlanets.length;

  filteredAndSortedPlanets = filteredAndSortedPlanets.slice(
    (Number(page) - 1) * ITEMS_PER_PAGE,
    Number(page) * ITEMS_PER_PAGE,
  );

  return planets.length > 0 ? (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <Input
          size={30}
          className="h-12"
          placeholder="Search planets"
          value={search}
          onChange={(event) => {
            const params = new URLSearchParams(searchParams);
            params.set("search", event.target.value);

            router.replace(`${pathname}?${params.toString()}`);
          }}
        />
        <Select
          value={orderBy}
          onValueChange={(key) => {
            const params = new URLSearchParams(searchParams);
            params.set("orderBy", key);

            router.replace(`${pathname}?${params.toString()}`);
          }}
        >
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {ORDER_FIELDS.map((field) => (
              <SelectItem value={field.value} key={field.value}>
                {field.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={order}
          disabled={!orderBy}
          onValueChange={(key) => {
            const params = new URLSearchParams(searchParams);
            params.set("order", key);

            router.replace(`${pathname}?${params.toString()}`);
          }}
        >
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Ascending</SelectItem>
            <SelectItem value="desc">Descending</SelectItem>
          </SelectContent>
        </Select>
        <Button
          size="icon"
          variant="destructive"
          className="shrink-0 h-12 w-12"
          onClick={() => {
            const params = new URLSearchParams(searchParams);
            params.delete("search");
            params.delete("orderBy");
            params.delete("order");

            router.replace(`${pathname}?${params.toString()}`);
          }}
        >
          <IconEraser />
        </Button>
      </div>
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
      <p className="text-xl font-bold">Loading...</p>
    </div>
  );
}
