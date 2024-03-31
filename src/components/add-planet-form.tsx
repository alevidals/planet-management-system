"use client";

import { randomBytes } from "crypto";
import { planetsAtom } from "@/lib/atoms";
import { insertPlanetSchema } from "@/lib/schemas";
import type { InsertPlanet, Planet } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSetAtom, useStore } from "jotai";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function AddPlanetForm() {
  const setPlanets = useSetAtom(planetsAtom, {
    store: useStore(),
  });
  const form = useForm<InsertPlanet>({
    resolver: zodResolver(insertPlanetSchema),
    defaultValues: {
      name: "",
      diameter: 0,
      climates: [""],
      terrains: [""],
      residents: [""],
    },
  });

  const [numberOfClimateFields, setNumberOfClimateFields] = useState(1);
  const [numberOfTerrainFields, setNumberOfTerrainFields] = useState(1);
  const [numberOfResidentsFields, setNumberOfResidentsFields] = useState(0);

  function handleChangeField({
    type,
    action,
  }: {
    type: "climate" | "terrain" | "resident";
    action: "add" | "remove";
  }) {
    if (type === "climate") {
      if (action === "add") {
        setNumberOfClimateFields((prev) => prev + 1);
      } else if (numberOfClimateFields > 1) {
        setNumberOfClimateFields((prev) => prev - 1);
      }
    } else if (type === "terrain") {
      if (action === "add") {
        setNumberOfTerrainFields((prev) => prev + 1);
      } else if (numberOfTerrainFields > 1) {
        setNumberOfTerrainFields((prev) => prev - 1);
      }
    } else if (type === "resident") {
      if (action === "add") {
        setNumberOfResidentsFields((prev) => prev + 1);
      } else if (numberOfResidentsFields > 0) {
        setNumberOfResidentsFields((prev) => prev - 1);
      }
    }
  }

  function handleSubmit(data: InsertPlanet) {
    console.log(data);
    const planet: Planet = {
      id: randomBytes(12).toString("hex"),
      name: data.name,
      diameter: Number(data.diameter),
      climates: data.climates,
      terrains: data.terrains,
      residents: data.residents.map((resident) => ({
        id: Math.random().toString(),
        name: resident,
      })),
    };
    setPlanets((prev) => [...prev, planet]);
    form.reset();
  }

  return (
    <div className="m-5 p-5">
      <form
        className="flex flex-col gap-3 w-64"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <input
          className="text-black"
          placeholder="name"
          {...form.register("name")}
        />
        {form.formState.errors.name && (
          <span className="text-red-500">
            {form.formState.errors.name.message}
          </span>
        )}
        <input
          className="text-black"
          placeholder="diameter"
          type="number"
          {...form.register("diameter", {
            valueAsNumber: true,
          })}
        />
        <button
          type="button"
          onClick={() => handleChangeField({ type: "climate", action: "add" })}
        >
          +
        </button>
        <button
          disabled={numberOfClimateFields === 1}
          className="disabled:opacity-50"
          type="button"
          onClick={() =>
            handleChangeField({ type: "climate", action: "remove" })
          }
        >
          -
        </button>
        {Array.from({ length: numberOfClimateFields }).map((_, index) => (
          <input
            className="text-black"
            key={`climate-${index}`}
            placeholder="climate"
            {...form.register(`climates.${index}`)}
          />
        ))}
        <button
          type="button"
          onClick={() => handleChangeField({ type: "terrain", action: "add" })}
        >
          +
        </button>
        <button
          disabled={numberOfTerrainFields === 1}
          className="disabled:opacity-50"
          type="button"
          onClick={() =>
            handleChangeField({ type: "terrain", action: "remove" })
          }
        >
          -
        </button>
        {Array.from({ length: numberOfTerrainFields }).map((_, index) => (
          <input
            className="text-black"
            key={`terrain-${index}`}
            placeholder="terrain"
            {...form.register(`terrains.${index}`)}
          />
        ))}
        <button
          type="button"
          onClick={() => handleChangeField({ type: "resident", action: "add" })}
        >
          +
        </button>
        <button
          disabled={numberOfResidentsFields === 0}
          className="disabled:opacity-50 disabled:bg-red-400"
          type="button"
          onClick={() =>
            handleChangeField({ type: "resident", action: "remove" })
          }
        >
          -
        </button>
        {Array.from({ length: numberOfResidentsFields }).map((_, index) => (
          <input
            className="text-black"
            key={`resident-${index}`}
            placeholder="resident"
            {...form.register(`residents.${index}`)}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
