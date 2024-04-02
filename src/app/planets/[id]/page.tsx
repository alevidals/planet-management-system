"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { planetsAtom } from "@/lib/atoms";
import {
  IconGenderFemale,
  IconGenderHermaphrodite,
  IconGenderMale,
  IconQuestionMark,
  IconRobot,
} from "@tabler/icons-react";
import { useAtomValue, useStore } from "jotai";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
  params: { id: string };
};

function getGenderInfo(gender: string | undefined) {
  if (!gender)
    return {
      name: "unknown",
      icon: <IconQuestionMark />,
    };

  if (["male", "female", "hermaphrodite"].includes(gender)) {
    let icon: ReactNode;

    if (gender === "male") {
      icon = <IconGenderMale />;
    } else if (gender === "female") {
      icon = <IconGenderFemale />;
    } else {
      icon = <IconGenderHermaphrodite />;
    }

    return {
      name: gender,
      icon,
    };
  }

  return {
    name: "droid",
    icon: <IconRobot />,
  };
}

export default function PlanetsPage({ params }: Props) {
  const planets = useAtomValue(planetsAtom, {
    store: useStore(),
  });

  const planet = planets.find(
    (planet) => planet.id === decodeURIComponent(params.id),
  );

  if (!planet) {
    notFound();
  }

  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });

  const numberFormatter = new Intl.NumberFormat("en");

  const formattedDiameter = numberFormatter.format(planet.diameter);
  const formattedClimates = formatter.format(
    planet.climates.flatMap((climate) => climate.climate),
  );
  const formattedTerrains = formatter.format(
    planet.terrains.flatMap((terrain) => terrain.terrain),
  );

  return (
    <main>
      <h1 className="text-3xl font-bold text-primary text-center">
        {planet.name}
      </h1>

      <div className="mb-4">
        <h2 className="text-xl font-bold text-primary">Diameter</h2>
        <p>{formattedDiameter} km</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold text-primary">Climates</h2>
        <p>{formattedClimates}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-primary">Terrains</h2>
        <p>{formattedTerrains}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold text-primary mb-1">Residents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {planet.residents.map((resident) => {
            const genderInfo = getGenderInfo(resident.gender);

            return (
              <Card key={resident.id}>
                <CardHeader className="flex flex-row items-center gap-x-4">
                  {genderInfo.icon}
                  <div>
                    <CardTitle>{resident.name}</CardTitle>
                    <CardDescription className="capitalize">
                      {genderInfo.name}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-x-2">
                    <p className="font-bold">Eye color:</p>
                    <p>{resident.eyeColor ?? "-"}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <p className="font-bold">Hair color:</p>
                    <p>{resident.hairColor ?? "-"}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <p className="font-bold">Skin color:</p>
                    <p>{resident.skinColor ?? "-"}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <p className="font-bold">Height:</p>
                    <p>{resident.height ?? "-"}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {/* <IconHaze size={24} className="text-primary" /> */}
                    <p className="font-bold">Mass:</p>
                    <p>{resident.mass ?? "-"}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {/* <IconHaze size={24} className="text-primary" /> */}
                    <p className="font-bold">Birth year</p>
                    <p>{resident.birthYear ?? "-"}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}
