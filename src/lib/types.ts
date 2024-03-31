import type { getPlanets } from "@/lib/planets";
import type { insertPlanetSchema, updatePlanetSchema } from "@/lib/schemas";
import type { z } from "zod";

export type Planet = Awaited<ReturnType<typeof getPlanets>>[number];

export type InsertPlanet = z.infer<typeof insertPlanetSchema>;
export type UpdatePlanet = z.infer<typeof updatePlanetSchema>;
