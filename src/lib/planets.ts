import { client } from "@/lib/genql";

export async function getPlanets() {
  const planets =
    (await client
      .query({
        allPlanets: {
          planets: {
            id: true,
            name: true,
            diameter: true,
            climates: true,
            terrains: true,
            residentConnection: {
              totalCount: true,
            },
          },
        },
      })
      .then(({ allPlanets }) =>
        allPlanets?.planets?.map((planet) => ({
          id: planet?.id,
          name: planet?.name,
          diameter: planet?.diameter,
          climates: planet?.climates?.map((climate) => climate as string) ?? [],
          terrains: planet?.terrains?.map((terrain) => terrain as string) ?? [],
          numberOfResidents: planet?.residentConnection?.totalCount,
        })),
      )) ?? [];

  return planets;
}
