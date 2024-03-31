"use client";

import { planetsAtom } from "@/lib/atoms";
import { updatePlanetSchema } from "@/lib/schemas";
import type { UpdatePlanet } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useAtom, useStore } from "jotai";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type Props = {
  params: { id: string };
};

export default function PlanetsPage({ params }: Props) {
  const router = useRouter();
  const [planets, setPlanets] = useAtom(planetsAtom, {
    store: useStore(),
  });

  const planet = planets.find(
    (planet) => planet.id === decodeURIComponent(params.id),
  );

  if (!planet) {
    router.replace("/planets");
    return;
  }

  const form = useForm<UpdatePlanet>({
    resolver: zodResolver(updatePlanetSchema),
    defaultValues: {
      name: planet.name,
      diameter: planet.diameter,
      climates: planet.climates,
      terrains: planet.terrains,
      residents: planet.residents,
    },
  });

  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });

  const numberFormatter = new Intl.NumberFormat("en");

  const formattedDiameter = numberFormatter.format(planet.diameter);
  const formattedClimates = formatter.format(
    planet.climates.flatMap((climate) => climate.climate),
  );
  const formattedTerrains = formatter.format(
    planet.terrains.flatMap((terrain) => terrain.terrain),
  );

  return (
    <main className="min-h-screen container mx-auto text-foreground">
      <h1 className="text-3xl font-bold text-primary">{planet.name}</h1>

      <h2 className="text-xl font-bold text-primary mt-4">Diameter</h2>
      <p>{formattedDiameter} km</p>

      <h2 className="text-xl font-bold text-primary mt-4">Climates</h2>
      <p>{formattedClimates}</p>

      <h2 className="text-xl font-bold text-primary mt-4">Terrains</h2>
      <p>{formattedTerrains}</p>

      <h2 className="text-xl font-bold text-primary mt-4 mb-1">Resdients</h2>
      <Table
        aria-label={`Table about the planet ${planet.name}`}
        className="text-foreground"
      >
        <TableHeader aria-label={`Table of ${planet.name} residents`}>
          <TableColumn>ID</TableColumn>
          <TableColumn>NAME</TableColumn>
        </TableHeader>
        <TableBody>
          {planet.residents.map((resident) => (
            <TableRow key={resident.id}>
              <TableCell>{resident.id}</TableCell>
              <TableCell>{resident.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
