import type { getPlanets } from "@/lib/planets";
import type { insertPlanetSchema, updatePlanetSchema } from "@/lib/schemas";
import type { z } from "zod";

export type Planet = Awaited<ReturnType<typeof getPlanets>>[number];

export type Resident = Planet["residents"][number];

export type OrderByField =
  | ""
  | "name"
  | "diameter"
  | "climates"
  | "terrains"
  | "residents";

export type Order = "asc" | "desc";

export type ZustandPlanetsStorage = {
  state: {
    planets: Planet[] | null;
    firstLoadDone: boolean | null;
  };
  version: number;
} | null;

export type InsertPlanet = z.infer<typeof insertPlanetSchema>;
export type UpdatePlanet = z.infer<typeof updatePlanetSchema>;
