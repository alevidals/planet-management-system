"use client";

import { planetsAtom } from "@/lib/atoms";
import { updatePlanetSchema } from "@/lib/schemas";
import type { Planet, UpdatePlanet } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom, useStore } from "jotai";
import Link from "next/link";
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

  const formattedClimates = formatter.format(planet.climates);
  const formattedTerrains = formatter.format(planet.terrains);

  function handleDeletePlanet() {
    const newPlanets = planets.filter(
      (planet) => planet.id !== decodeURIComponent(params.id),
    );

    setPlanets(newPlanets);
    router.replace("/planets");
  }

  console.log(form.formState.errors);

  function handleOnSubmit(data: UpdatePlanet) {
    console.log(data);
    const newPlanets = planets.map((planet) => {
      if (planet.id === decodeURIComponent(params.id)) {
        const newPlanet: Planet = {
          ...planet,
          ...data,
          residents: data.residents.map((resident) => ({
            id: resident.id || Math.random().toString(),
            name: resident.name,
          })),
        };

        return newPlanet;
      }

      return planet;
    });

    setPlanets(newPlanets);
  }

  return (
    <main>
      <h1 className="text-primary">PMS</h1>
      <Link className="underline" href="/planets">
        Back to planets
      </Link>

      <button type="button" onClick={handleDeletePlanet}>
        Delete planet
      </button>

      <form
        className="p-3 m-3 text-black"
        onSubmit={form.handleSubmit(handleOnSubmit)}
      >
        <input {...form.register("name")} />
        <input {...form.register("diameter")} />
        {form.getValues("climates").map((climate, index) => (
          <input key={index} {...form.register(`climates.${index}`)} />
        ))}
        {form.getValues("terrains").map((terrain, index) => (
          <input key={index} {...form.register(`terrains.${index}`)} />
        ))}
        {form.getValues("residents").map((resident, index) => (
          <input key={index} {...form.register(`residents.${index}.name`)} />
        ))}
        <button type="submit" className="text-white">
          Submit
        </button>
      </form>

      <div className="flex flex-col gap-5">
        <div className="bg-zinc-900 rounded-lg p-4 w-64">
          <p>Name</p>
          <p>{planet.name}</p>
        </div>
        <div className="bg-zinc-900 rounded-lg p-4 w-64">
          <p>Diameter</p>
          <p>{planet.diameter}</p>
        </div>
        <div className="bg-zinc-900 rounded-lg p-4 w-64">
          <p>Climate</p>
          <p>{formattedClimates}</p>
        </div>
        <div className="bg-zinc-900 rounded-lg p-4 w-64">
          <p>Terrain</p>
          <p>{formattedTerrains}</p>
        </div>
        <div className="bg-zinc-900 rounded-lg p-4 w-64">
          <p>Residents</p>
          <ul>
            {planet.residents.map((resident) => (
              <li key={resident.id}>{resident.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
