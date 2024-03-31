import { planetsAtom } from "@/lib/atoms";
import { updatePlanetSchema } from "@/lib/schemas";
import type { Planet, UpdatePlanet } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import {
  IconBackground,
  IconDots,
  IconFriends,
  IconHaze,
  IconPlus,
} from "@tabler/icons-react";
import { useAtom, useStore } from "jotai";
import Link from "next/link";
import type { Key } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

type Props = {
  planet: Planet;
};

export function PlanetCard({ planet }: Props) {
  const { isOpen: isOpenDeleteModal, onOpenChange: onOpenDeleteModalChange } =
    useDisclosure();
  const { isOpen: isOpenEditModal, onOpenChange: onOpenEditModalChange } =
    useDisclosure();
  const [planets, setPlanets] = useAtom(planetsAtom, {
    store: useStore(),
  });
  const form = useForm<UpdatePlanet>({
    resolver: zodResolver(updatePlanetSchema),
    defaultValues: {
      name: planet.name,
      diameter: planet.diameter,
      climates: planet.climates,
      terrains: planet.terrains,
      residents: planet.residents,
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
    fields: terrainFields,
    append: appendTerrain,
    remove: removeTerrain,
  } = useFieldArray({
    control: form.control,
    name: "terrains",
  });
  const {
    fields: residentFields,
    append: appendResident,
    remove: removeResident,
  } = useFieldArray({
    control: form.control,
    name: "residents",
  });

  const listFormatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });
  const numberFormatter = new Intl.NumberFormat("en");

  function handleDeletePlanet() {
    setPlanets((prev) => prev.filter((p) => p.id !== planet.id));
    onOpenDeleteModalChange();
  }

  function handleEditPlanet(data: UpdatePlanet) {
    const newPlanets = planets.map((p) =>
      p.id === planet.id
        ? {
            ...planet,
            ...data,
            residents: data.residents.map((resident) => ({
              id: resident.id || Math.random().toString(),
              name: resident.name,
            })),
          }
        : p,
    );

    setPlanets(newPlanets);
    onOpenEditModalChange();
  }

  function handleDropdownAction(key: Key) {
    switch (key) {
      case "edit":
        onOpenEditModalChange();
        break;
      case "delete":
        onOpenDeleteModalChange();
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Card>
        <CardHeader className="flex gap-3">
          <div className="flex items-center justify-between w-full">
            <Link href={`/planets/${planet.id}`}>
              <div className="flex flex-col">
                <p>{planet.name}</p>
                <p>{planet.id}</p>
                <p className="text-small text-default-500">
                  {numberFormatter.format(planet.diameter)} Km
                </p>
              </div>
            </Link>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" isIconOnly>
                  <IconDots />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Action event example"
                onAction={handleDropdownAction}
              >
                <DropdownItem key="edit" className="text-foreground">
                  Edit file
                </DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardHeader>
        <Divider />
        <Link href={`/planets/${planet.id}`}>
          <CardBody className="flex flex-col gap-y-2">
            <div className="flex gap-x-4 items-center">
              <IconHaze size={24} className="text-primary" />
              <div>
                <p className="text-sm text-default-500">Climates</p>
                <p className="text-md">
                  {listFormatter.format(
                    planet.climates.flatMap((climate) => climate.climate),
                  )}
                </p>
              </div>
            </div>
            <div className="flex gap-x-4 items-center">
              <IconBackground size={24} className="text-primary" />
              <div>
                <p className="text-sm text-default-500">Terrains</p>
                <p className="text-md line-clamp-1">
                  {listFormatter.format(
                    planet.terrains.flatMap((terrain) => terrain.terrain),
                  )}
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
        </Link>
      </Card>
      <Modal
        isOpen={isOpenDeleteModal}
        onOpenChange={onOpenDeleteModalChange}
        className="max-h-[50rem] overflow-y-scroll scrollbar-hide text-foreground"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="block">
                Are you sure you want to eliminate the planet{" "}
                <span className="text-primary font-bold">{planet.name}</span>?
              </ModalHeader>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={handleDeletePlanet}
                  className="text-background"
                >
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isOpenEditModal}
        onOpenChange={onOpenEditModalChange}
        className="max-h-[50rem] overflow-y-scroll scrollbar-hide text-foreground"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="block">
                Editing planet{" "}
                <span className="text-primary font-bold">{planet.name}</span>
              </ModalHeader>
              <ModalBody
                as="form"
                onSubmit={form.handleSubmit(handleEditPlanet)}
              >
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
                {terrainFields.map((field, index) => (
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
                      onClick={() => appendResident({ name: "" })}
                    >
                      <IconPlus />
                    </Button>
                  </div>
                </div>
                {residentFields.map((field, index) => (
                  <Controller
                    key={field.id}
                    control={form.control}
                    name={`residents.${index}.name`}
                    render={({ field }) => (
                      <Input
                        label={`Resident ${index + 1}`}
                        isInvalid={!!form.formState.errors.residents?.[index]}
                        errorMessage={
                          form.formState.errors.residents?.[index]?.message
                        }
                        isClearable
                        onClear={() => removeResident(index)}
                        {...field}
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
                    Save changes
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
