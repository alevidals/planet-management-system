"use client";

import { Header } from "@/components/header";
import { Heading } from "@/components/heading";
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

  if (planets?.length === 0) {
    return (
      <main className="py-4">
        <Header />
        <div className="flex items-center justify-center h-96">
          <p className="text-xl font-bold">Loading...</p>
        </div>
      </main>
    );
  }

  const planet = planets?.find(
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
    planet.climates.flatMap(({ climate }, index) => {
      if (index === 0) {
        return climate.charAt(0).toUpperCase() + climate.slice(1);
      }

      return climate;
    }),
  );
  const formattedTerrains = formatter.format(
    planet.terrains.flatMap(({ terrain }, index) => {
      if (index === 0) {
        return terrain.charAt(0).toUpperCase() + terrain.slice(1);
      }

      return terrain;
    }),
  );

  return (
    <main className="py-4">
      <Header />
      <Heading as="h2" className="text-primary text-center">
        {planet.name}
      </Heading>

      <div className="mb-4">
        <Heading as="h3" className="text-primary">
          Diameter
        </Heading>
        <p>{formattedDiameter} km</p>
      </div>

      <div className="mb-4">
        <Heading as="h3" className="text-primary">
          Climates
        </Heading>
        <p>{formattedClimates}</p>
      </div>
      <div className="mb-4">
        <Heading as="h3" className="text-primary">
          Terrains
        </Heading>
        <p>{formattedTerrains}</p>
      </div>

      <div className="mb-4">
        <Heading as="h3" className="text-primary mb-1">
          Residents
        </Heading>
        {planet.residents.length > 0 ? (
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
                      <p className="font-bold">Mass:</p>
                      <p>{resident.mass ?? "-"}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <p className="font-bold">Birth year</p>
                      <p>{resident.birthYear ?? "-"}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <p>There is no resident in this planet.</p>
        )}
      </div>
    </main>
  );
}
