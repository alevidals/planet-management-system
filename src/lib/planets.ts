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
              residents: {
                id: true,
                name: true,
                birthYear: true,
                eyeColor: true,
                hairColor: true,
                skinColor: true,
                height: true,
                mass: true,
                gender: true,
              },
            },
          },
        },
      })
      .then(({ allPlanets }) =>
        allPlanets?.planets?.map((planet) => ({
          id: planet?.id as string,
          name: planet?.name ?? "-",
          diameter: planet?.diameter ?? 0,
          climates:
            planet?.climates?.map((climate) => ({
              climate: climate as string,
            })) ?? [],
          terrains:
            planet?.terrains?.map((terrain) => ({
              terrain: terrain as string,
            })) ?? [],
          residents:
            planet?.residentConnection?.residents?.map((resident) => ({
              id: resident?.id,
              name: resident?.name ?? "-",
              birthYear: resident?.birthYear ?? undefined,
              eyeColor: resident?.eyeColor ?? undefined,
              hairColor: resident?.hairColor ?? undefined,
              skinColor: resident?.skinColor ?? undefined,
              height: resident?.height ?? undefined,
              mass: resident?.mass ?? undefined,
              gender: resident?.gender ?? undefined,
            })) ?? [],
        })),
      )) ?? [];

  return planets;
}
