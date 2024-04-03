import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Meteors } from "@/components/ui/meteors";
import { PlanetDropdownMenu } from "@/components/ui/planet-dropdown-menu";
import { Separator } from "@/components/ui/separator";
import type { Planet } from "@/lib/types";
import { IconBackground, IconFriends, IconHaze } from "@tabler/icons-react";
import Link from "next/link";

type Props = {
  planet: Planet;
};

export function PlanetCard({ planet }: Props) {
  const listFormatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });
  const numberFormatter = new Intl.NumberFormat("en");

  return (
    <Card className="hover:border-primary overflow-hidden relative">
      <CardHeader className="flex flex-row justify-between items-center space-y-0 gap-x-4">
        <Link href={`/planets/${planet.id}`}>
          <CardTitle className="mb-1 break-all">{planet.name}</CardTitle>
          <CardDescription>
            {numberFormatter.format(planet.diameter)} km
          </CardDescription>
        </Link>
        <PlanetDropdownMenu planet={planet} />
      </CardHeader>
      <Separator />
      <Link href={`/planets/${planet.id}`}>
        <CardContent className="flex flex-col gap-y-2 p-6">
          <div className="flex gap-x-4 items-center">
            <div>
              <IconHaze size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-sm">Climates</p>
              <p className="text-md line-clamp-1 break-all">
                {listFormatter.format(
                  planet.climates.flatMap((climate) => climate.climate),
                )}
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 items-center jus">
            <div>
              <IconBackground size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-sm">Terrains</p>
              <p className="text-md line-clamp-1 break-all">
                {listFormatter.format(
                  planet.terrains.flatMap((terrain) => terrain.terrain),
                )}
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 items-center">
            <IconFriends size={24} className="text-primary" />
            <div>
              <p className="text-sm">Residents</p>
              <p className="text-md">
                {numberFormatter.format(planet.residents.length)}
              </p>
            </div>
          </div>
        </CardContent>
      </Link>
      <Meteors number={3} />
    </Card>
  );
}
