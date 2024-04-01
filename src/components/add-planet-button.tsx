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
import { IconPlus } from "@tabler/icons-react";
import { useSetAtom, useStore } from "jotai";
import { Controller, useFieldArray, useForm } from "react-hook-form";

export function AddPlanetButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const setPlanets = useSetAtom(planetsAtom, {
    store: useStore(),
  });
  const form = useForm<InsertPlanet>({
    resolver: zodResolver(insertPlanetSchema),
    defaultValues: {
      name: "",
      diameter: 0,
      climates: [
        {
          climate: "",
        },
      ],
      terrains: [
        {
          terrain: "",
        },
      ],
      residents: [],
    },
  });

  const {
    fields: climatesFields,
    append: appendClimate,
    remove: removeClimate,
  } = useFieldArray({
    control: form.control,
    name: "climates",
  });
  const {
    fields: terrainsFields,
    append: appendTerrain,
    remove: removeTerrain,
  } = useFieldArray({
    control: form.control,
    name: "terrains",
  });
  const {
    fields: residentsFields,
    append: appendResident,
    remove: removeResident,
  } = useFieldArray({
    control: form.control,
    name: "residents",
  });

  function handleSubmit(data: InsertPlanet) {
    const planet: Planet = {
      id: randomBytes(12).toString("hex"),
      name: data.name,
      diameter: Number(data.diameter),
      climates: data.climates,
      terrains: data.terrains,
      residents:
        data.residents?.map(({ resident }) => ({
          id: randomBytes(12).toString("hex"),
          name: resident,
        })) ?? [],
    };
    setPlanets((prev) => [...prev, planet]);
    form.reset();
    onOpenChange();
  }

  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-primary-400 text-background font-semibold"
      >
        Add Planet
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="max-h-[50rem] overflow-y-scroll scrollbar-hide border border-default-200"
      >
        <ModalContent className="text-foreground">
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
                  <p className="text-default-500 text-sm">Add climates</p>
                  <div className="flex gap-x-2 items-center">
                    <Button
                      isIconOnly
                      color="primary"
                      size="sm"
                      className="text-background"
                      onClick={() => appendClimate({ climate: "" })}
                    >
                      <IconPlus />
                    </Button>
                  </div>
                </div>
                {climatesFields.map((field, index) => (
                  <Controller
                    key={field.id}
                    control={form.control}
                    name={`climates.${index}.climate`}
                    render={({ field }) => (
                      <Input
                        label={`Climate ${index + 1}`}
                        isInvalid={!!form.formState.errors.climates?.[index]}
                        errorMessage={
                          form.formState.errors.climates?.[index]?.message
                        }
                        isClearable
                        onClear={() => removeClimate(index)}
                        {...field}
                      />
                    )}
                  />
                ))}
                <div className="flex gap-x-2 items-center justify-between">
                  <p className="text-default-500 text-sm">Add terrains</p>
                  <div className="flex gap-x-2 items-center">
                    <Button
                      isIconOnly
                      color="primary"
                      size="sm"
                      className="text-background"
                      onClick={() => appendTerrain({ terrain: "" })}
                    >
                      <IconPlus />
                    </Button>
                  </div>
                </div>
                {terrainsFields.map((field, index) => (
                  <Controller
                    key={field.id}
                    control={form.control}
                    name={`terrains.${index}.terrain`}
                    render={({ field }) => (
                      <Input
                        label={`Terrain ${index + 1}`}
                        isInvalid={!!form.formState.errors.terrains?.[index]}
                        errorMessage={
                          form.formState.errors.terrains?.[index]?.message
                        }
                        isClearable
                        onClear={() => removeTerrain(index)}
                        {...field}
                      />
                    )}
                  />
                ))}
                <div className="flex gap-x-2 items-center justify-between">
                  <p className="text-default-500 text-sm">Add residents</p>
                  <div className="flex gap-x-2 items-center">
                    <Button
                      isIconOnly
                      color="primary"
                      size="sm"
                      className="text-background"
                      onClick={() =>
                        appendResident({
                          resident: "",
                        })
                      }
                    >
                      <IconPlus />
                    </Button>
                  </div>
                </div>
                {residentsFields.map((field, index) => (
                  <Controller
                    key={field.id}
                    control={form.control}
                    name={`residents.${index}.resident`}
                    render={({ field }) => (
                      <Input
                        label={`Resident ${index + 1}`}
                        isClearable
                        onClear={() => removeResident(index)}
                        {...field}
                        onChange={(event) => field.onChange(event.target.value)}
                      />
                    )}
                  />
                ))}

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
    </>
  );
}
