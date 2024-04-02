import { DeletePlanetDialog } from "@/components/delete-planet-dialog";
import { EditPlanetDialog } from "@/components/edit-planet-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Meteors } from "@/components/ui/meteors";
import { Separator } from "@/components/ui/separator";
import { planetsAtom } from "@/lib/atoms";
import type { Planet } from "@/lib/types";
import {
  IconBackground,
  IconDots,
  IconEdit,
  IconFriends,
  IconHaze,
  IconTrash,
} from "@tabler/icons-react";
import { useSetAtom, useStore } from "jotai";
import Link from "next/link";
import { useState } from "react";

type Props = {
  planet: Planet;
};

export function PlanetCard({ planet }: Props) {
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
  const [isOpenEditDialog, setIsOpenEditDialog] = useState(false);

  const setPlanets = useSetAtom(planetsAtom, {
    store: useStore(),
  });

  const listFormatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });
  const numberFormatter = new Intl.NumberFormat("en");

  function handleDeletePlanet() {
    setPlanets((prev) => prev?.filter((p) => p.id !== planet.id) ?? []);
  }

  return (
    <>
      <Card className="hover:border-primary overflow-hidden relative">
        <CardHeader className="flex flex-row justify-between items-center space-y-0 gap-x-4">
          <Link href={`/planets/${planet.id}`}>
            <CardTitle className="mb-1 break-all">{planet.name}</CardTitle>
            <CardDescription>
              {numberFormatter.format(planet.diameter)} km
            </CardDescription>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="shrink-0">
              <Button size="icon" variant="outline">
                <IconDots />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => setIsOpenEditDialog(true)}
                className="flex items-center gap-x-2"
              >
                <IconEdit size={20} />
                <div className="flex flex-col">
                  <span className="text-base">Edit</span>
                  <span className="text-xs text-muted-foreground">
                    Edit planet
                  </span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setIsOpenDeleteDialog(true)}
                className="flex items-center gap-x-2"
              >
                <IconTrash size={20} className="text-red-500" />
                <div className="flex flex-col">
                  <span className="text-base text-red-500">Delete</span>
                  <span className="text-xs text-muted-foreground">
                    Delete the planet permanently
                  </span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
      <DeletePlanetDialog
        handleDeletePlanet={handleDeletePlanet}
        isOpen={isOpenDeleteDialog}
        planetName={planet.name}
        setIsOpen={setIsOpenDeleteDialog}
      />
      <EditPlanetDialog
        isOpen={isOpenEditDialog}
        setIsOpen={setIsOpenEditDialog}
        planet={planet}
      />
    </>
  );
}
