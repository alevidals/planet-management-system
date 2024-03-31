import { client } from "@/lib/genql";

export async function getPlanets() {
  const planets =
    (await client
      .query({
        allPlanets: {
          __args: {
            first: 5,
          },
          planets: {
            id: true,
            name: true,
            diameter: true,
            climates: true,
            terrains: true,
            residentConnection: {
              residents: {
                id: true,
                name: true,
              },
            },
          },
        },
      })
      .then(({ allPlanets }) =>
        allPlanets?.planets?.map((planet) => ({
          id: planet?.id,
          name: planet?.name ?? "-",
          diameter: planet?.diameter ?? 0,
          climates: planet?.climates?.map((climate) => climate as string) ?? [],
          terrains: planet?.terrains?.map((terrain) => terrain as string) ?? [],
          residents:
            planet?.residentConnection?.residents?.map((resident) => ({
              id: resident?.id,
              name: resident?.name ?? "-",
            })) ?? [],
        })),
      )) ?? [];

  return planets;
}
