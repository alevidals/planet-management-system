import type { Planet } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type PlanetsStore = {
  planets: Planet[] | null;
  addPlanet: (planet: Planet) => void;
  addPlanets: (planets: Planet[]) => void;
  updatePlanet: (planet: Planet) => void;
  removePlanet: (planet: Planet) => void;
};

export const usePlanets = create<PlanetsStore>()(
  persist(
    (set) => ({
      planets: null,
      addPlanet: (planet: Planet) =>
        set((state) => ({ planets: [...(state.planets ?? []), planet] })),
      addPlanets: (planets: Planet[]) =>
        set((state) => ({ planets: [...(state.planets ?? []), ...planets] })),
      updatePlanet: (planet: Planet) =>
        set((state) => ({
          planets: (state.planets ?? []).map((p) =>
            p.id === planet.id ? planet : p,
          ),
        })),
      removePlanet: (planet: Planet) =>
        set((state) => ({
          planets: (state.planets ?? []).filter((p) => p.id !== planet.id),
        })),
    }),
    { name: "planets" },
  ),
);
