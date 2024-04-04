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
import { useMediaQuery } from "@/hooks/use-media-query";
import { planetsAtom } from "@/lib/atoms";
import {
  IconGenderFemale,
  IconGenderHermaphrodite,
  IconGenderMale,
  IconQuestionMark,
  IconRobot,
} from "@tabler/icons-react";
import { useAtomValue, useStore } from "jotai";
import Image from "next/image";
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
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const planets = useAtomValue(planetsAtom, {
    store: useStore(),
  });

  if (!planets) {
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
    <main>
      <div className="relative flex flex-col md:flex-row items-center justify-center">
        <div className="order-2 md:order-1 w-full text-center">
          <Heading as="h3" className="text-xl md:text-2xl">
            Climates
          </Heading>
          <p className="break-all">{formattedClimates}</p>
        </div>
        <div className="h-96 md:w-[30rem] w-96 md:h-[30rem] relative group shrink-0 order-1 md:order-2 duration-300">
          <Image
            src="/planet.webp"
            alt="planet"
            width={isDesktop ? 480 : 384}
            height={isDesktop ? 480 : 384}
            priority
            className="opacity-50 group-hover:opacity-100 duration-500"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Heading
              as="h2"
              className="text-center text-2xl md:text-4xl break-all"
            >
              {planet.name}
            </Heading>
            <span className="block text-center">{formattedDiameter} km</span>
          </div>
        </div>
        <div className="order-3 my-4 md:my-0 w-full text-center">
          <Heading as="h3" className="text-xl md:text-2xl">
            Terrains
          </Heading>
          <p className="break-all">{formattedTerrains}</p>
        </div>
      </div>

      <div className="mb-4">
        <Heading as="h3" className="text-xl md:text-2xl text-center">
          Residents
        </Heading>
        {planet.residents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2">
            {planet.residents.map((resident) => {
              const genderInfo = getGenderInfo(resident.gender);

              return (
                <Card key={resident.id}>
                  <CardHeader className="flex flex-row items-center gap-x-4">
                    <div>{genderInfo.icon}</div>
                    <div className="break-all">
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
          <p className="text-center">There is no resident in this planet.</p>
        )}
      </div>
    </main>
  );
}
