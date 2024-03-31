import type { getPlanets } from "@/lib/planets";

type Props = {
  planets: Awaited<ReturnType<typeof getPlanets>>;
};

export function PlanetsList({ planets }: Props) {
  return (
    <div>
      <ul>
        {planets.map((planet) => (
          <li key={planet.id}>{planet.name}</li>
        ))}
      </ul>
    </div>
  );
}
