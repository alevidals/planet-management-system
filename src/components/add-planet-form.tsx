"use client";

import { randomBytes } from "crypto";
import { planetsAtom } from "@/lib/atoms";
import { insertPlanetSchema } from "@/lib/schemas";
import type { InsertPlanet, Planet } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useSetAtom, useStore } from "jotai";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export function AddPlanetForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const setPlanets = useSetAtom(planetsAtom, {
    store: useStore(),
  });
  const form = useForm<InsertPlanet>({
    resolver: zodResolver(insertPlanetSchema),
    defaultValues: {
      name: "",
      diameter: 0,
      climates: [""],
      terrains: [""],
    },
  });

  const [numberOfClimateFields, setNumberOfClimateFields] = useState(1);
  const [numberOfTerrainFields, setNumberOfTerrainFields] = useState(1);
  const [numberOfResidentsFields, setNumberOfResidentsFields] = useState(0);

  function handleChangeField({
    type,
    action,
  }: {
    type: "climate" | "terrain" | "resident";
    action: "add" | "remove";
  }) {
    if (type === "climate") {
      if (action === "add") {
        setNumberOfClimateFields((prev) => prev + 1);
      } else if (numberOfClimateFields > 1) {
        setNumberOfClimateFields((prev) => prev - 1);
      }
    } else if (type === "terrain") {
      if (action === "add") {
        setNumberOfTerrainFields((prev) => prev + 1);
      } else if (numberOfTerrainFields > 1) {
        setNumberOfTerrainFields((prev) => prev - 1);
      }
    } else if (type === "resident") {
      if (action === "add") {
        setNumberOfResidentsFields((prev) => prev + 1);
      } else if (numberOfResidentsFields > 0) {
        setNumberOfResidentsFields((prev) => prev - 1);
      }
    }
  }

  function handleSubmit(data: InsertPlanet) {
    const planet: Planet = {
      id: randomBytes(12).toString("hex"),
      name: data.name,
      diameter: Number(data.diameter),
      climates: data.climates,
      terrains: data.terrains,
      residents:
        data.residents?.map((resident) => ({
          id: randomBytes(12).toString("hex"),
          name: resident,
        })) ?? [],
    };
    setPlanets((prev) => [...prev, planet]);
    form.reset();
    onOpenChange();
  }

  return (
    <div>
      <Button
        onPress={onOpen}
        className="bg-primary-400 text-background font-semibold"
        endContent={<IconPlus size="16" />}
      >
        Add Planet
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="max-h-[50rem] overflow-y-scroll scrollbar-hide"
      >
        <ModalContent className="text-white">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add planet
              </ModalHeader>
              <ModalBody as="form" onSubmit={form.handleSubmit(handleSubmit)}>
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <Input
                      label="Name"
                      isInvalid={!!form.formState.errors.name}
                      errorMessage={form.formState.errors.name?.message}
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="diameter"
                  control={form.control}
                  render={({ field }) => (
                    <Input
                      label="Diameter"
                      type="number"
                      isInvalid={!!form.formState.errors.diameter}
                      errorMessage={form.formState.errors.diameter?.message}
                      {...field}
                      onChange={(event) =>
                        field.onChange(Number(event.target.value))
                      }
                    />
                  )}
                />
                <div className="flex gap-x-2 items-center justify-between">
                  <p className="text-default-500 text-sm">
                    Add or remove climates
                  </p>
                  <div className="flex gap-x-2 items-center">
                    <Button
                      isIconOnly
                      color="primary"
                      size="sm"
                      className="text-background"
                      onClick={() =>
                        handleChangeField({ type: "climate", action: "add" })
                      }
                    >
                      <IconPlus />
                    </Button>
                    <Button
                      disabled={numberOfClimateFields === 1}
                      className="disabled:opacity-50 text-background"
                      isIconOnly
                      color="danger"
                      size="sm"
                      onClick={() =>
                        handleChangeField({ type: "climate", action: "remove" })
                      }
                    >
                      <IconMinus />
                    </Button>
                  </div>
                </div>
                {Array.from({ length: numberOfClimateFields }).map(
                  (_, index) => (
                    <Controller
                      key={`climate-${index}`}
                      control={form.control}
                      name={`climates.${index}`}
                      render={({ field }) => (
                        <Input
                          label="Climate"
                          isInvalid={!!form.formState.errors.climates?.[index]}
                          errorMessage={
                            form.formState.errors.climates?.[index]?.message
                          }
                          {...field}
                        />
                      )}
                    />
                  ),
                )}
                <div className="flex gap-x-2 items-center justify-between">
                  <p className="text-default-500 text-sm">
                    Add or remove terrains
                  </p>
                  <div className="flex gap-x-2 items-center">
                    <Button
                      isIconOnly
                      color="primary"
                      className="text-background"
                      size="sm"
                      onClick={() =>
                        handleChangeField({ type: "terrain", action: "add" })
                      }
                    >
                      <IconPlus />
                    </Button>
                    <Button
                      disabled={numberOfTerrainFields === 1}
                      className="disabled:opacity-50 text-background"
                      isIconOnly
                      color="danger"
                      size="sm"
                      onClick={() =>
                        handleChangeField({ type: "terrain", action: "remove" })
                      }
                    >
                      <IconMinus />
                    </Button>
                  </div>
                </div>
                {Array.from({ length: numberOfTerrainFields }).map(
                  (_, index) => (
                    <Controller
                      key={`terrain-${index}`}
                      control={form.control}
                      name={`terrains.${index}`}
                      render={({ field }) => (
                        <Input
                          label="Terrain"
                          isInvalid={!!form.formState.errors.terrains?.[index]}
                          errorMessage={
                            form.formState.errors.terrains?.[index]?.message
                          }
                          {...field}
                        />
                      )}
                    />
                  ),
                )}
                <div className="flex gap-x-2 items-center justify-between">
                  <p className="text-default-500 text-sm">
                    Add or remove residents
                  </p>
                  <div className="flex gap-x-2 items-center">
                    <Button
                      isIconOnly
                      color="primary"
                      size="sm"
                      className="text-background"
                      onClick={() =>
                        handleChangeField({ type: "resident", action: "add" })
                      }
                    >
                      <IconPlus />
                    </Button>
                    <Button
                      disabled={numberOfResidentsFields === 0}
                      className="disabled:opacity-50"
                      isIconOnly
                      color="danger"
                      size="sm"
                      onClick={() =>
                        handleChangeField({
                          type: "resident",
                          action: "remove",
                        })
                      }
                    >
                      <IconMinus />
                    </Button>
                  </div>
                </div>
                {Array.from({ length: numberOfResidentsFields }).map(
                  (_, index) => (
                    <Controller
                      key={`resident-${index}`}
                      control={form.control}
                      name={`residents.${index}`}
                      render={({ field }) => (
                        <Input
                          label="Resident"
                          isInvalid={!!form.formState.errors.residents?.[index]}
                          errorMessage={
                            form.formState.errors.residents?.[index]?.message
                          }
                          {...field}
                        />
                      )}
                    />
                  ),
                )}
                <ModalFooter className="px-0">
                  <Button
                    color="danger"
                    variant="light"
                    onPress={onClose}
                    type="button"
                  >
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    className="text-background"
                  >
                    Add Planet
                  </Button>
                </ModalFooter>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
