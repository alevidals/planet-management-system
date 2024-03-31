import type { Planet } from "@/lib/types";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { IconBackground, IconFriends, IconHaze } from "@tabler/icons-react";

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
    <Card>
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p>{planet.name}</p>
          <p className="text-small text-default-500">
            {numberFormatter.format(planet.diameter)} Km
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-y-2">
        <div className="flex gap-x-4 items-center">
          <IconHaze size={24} className="text-primary" />
          <div>
            <p className="text-sm text-default-500">Climates</p>
            <p className="text-md">{listFormatter.format(planet.climates)}</p>
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <IconBackground size={24} className="text-primary" />
          <div>
            <p className="text-sm text-default-500">Terrains</p>
            <p className="text-md line-clamp-1">
              {listFormatter.format(planet.terrains)}
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <IconFriends size={24} className="text-primary" />
          <div>
            <p className="text-sm text-default-500">Residents</p>
            <p className="text-md">
              {numberFormatter.format(planet.residents.length)}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
