"use client";

import { PlanetCard } from "@/components/planet-card";
import { planetsAtom } from "@/lib/atoms";
import { ITEMS_PER_PAGE, ORDER_FIELDS } from "@/lib/constants";
import type { Planet } from "@/lib/types";
import { Input, Pagination, Select, SelectItem } from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";
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

  filteredAndSortedPlanets = filteredAndSortedPlanets.slice(
    (Number(page) - 1) * ITEMS_PER_PAGE,
    Number(page) * ITEMS_PER_PAGE,
  );

  return planets.length > 0 ? (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <Input
          className="w-full lg:max-w-xs text-foreground"
          variant="faded"
          label="Search planets by name, climate or terrain"
          startContent={<IconSearch size={20} className="text-primary" />}
          value={search}
          onValueChange={(value) => {
            const params = new URLSearchParams(searchParams);
            params.set("search", value);

            router.replace(`${pathname}?${params.toString()}`);
          }}
        />
        <Select
          label="Select field to filter"
          variant="faded"
          className="text-foreground w-full lg:max-w-xs"
          selectedKeys={[orderBy]}
          onChange={(event) => {
            const params = new URLSearchParams(searchParams);
            params.set("orderBy", event.target.value);

            router.replace(`${pathname}?${params.toString()}`);
          }}
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
          isDisabled={!orderBy}
          disallowEmptySelection={true}
          selectedKeys={[order]}
          onChange={(event) => {
            const params = new URLSearchParams(searchParams);
            params.set("order", event.target.value);

            router.replace(`${pathname}?${params.toString()}`);
          }}
        >
          <SelectItem key="asc" value="asc" className="text-foreground">
            Asc
          </SelectItem>
          <SelectItem key="desc" value="desc" className="text-foreground">
            Desc
          </SelectItem>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {filteredAndSortedPlanets.map((planet) => (
          <PlanetCard planet={planet} key={planet.id} />
        ))}
      </div>
      {totalPages > 1 && filteredAndSortedPlanets.length > 0 ? (
        <Pagination
          total={totalPages}
          page={Number(page)}
          onChange={(page) => {
            const params = new URLSearchParams(searchParams);
            params.set("page", String(page));

            router.replace(`${pathname}?${params.toString()}`);
          }}
          className="w-fit mx-auto"
        />
      ) : null}
    </>
  ) : (
    <div className="flex items-center justify-center h-96">
      <p className="text-xl font-bold">Loading...</p>
    </div>
  );
}
