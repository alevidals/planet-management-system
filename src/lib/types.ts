import type { getPlanets } from "@/lib/planets";

export type Planet = Awaited<ReturnType<typeof getPlanets>>[number];
