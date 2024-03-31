import type { getPlanets } from "@/lib/planets";
import Link from "next/link";

type Props = {
  planets: Awaited<ReturnType<typeof getPlanets>>;
};

export function PlanetsList({ planets }: Props) {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-4">
        {planets.map((planet) => (
          <li className="bg-zinc-950 p-4 rounded-lg" key={planet.id}>
            <Link href={`/planets/${planet.id}`}>
              <p>{planet.name}</p>
              <p>{planet.diameter}</p>
              <p>{planet.climates.join(",")}</p>
              <p>{planet.terrains.join(",")}</p>
              <p>{planet.numberOfResidents}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
