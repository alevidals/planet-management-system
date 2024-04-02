import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { planetsAtom } from "@/lib/atoms";
import { updatePlanetSchema } from "@/lib/schemas";
import type { Planet, UpdatePlanet } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IconBackground,
  IconDots,
  IconEdit,
  IconFriends,
  IconHaze,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import { useAtom, useStore } from "jotai";
import Link from "next/link";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

type Props = {
  planet: Planet;
};

export function PlanetCard({ planet }: Props) {
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
  const [isOpenEditDialog, setIsOpenEditDialog] = useState(false);
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
              birthYear: undefined,
              eyeColor: undefined,
              hairColor: undefined,
              skinColor: undefined,
              height: undefined,
              mass: undefined,
              gender: undefined,
            })),
          }
        : p,
    );

    setPlanets(newPlanets);
    setIsOpenEditDialog(false);
  }

  return (
    <>
      <Card className="hover:border-primary">
        <CardHeader className="flex flex-row justify-between items-center">
          <Link href={`/planets/${planet.id}`}>
            <CardTitle>{planet.name}</CardTitle>
            <CardDescription>
              {numberFormatter.format(planet.diameter)} km
            </CardDescription>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
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
              <IconHaze size={24} className="text-primary" />
              <div>
                <p className="text-sm">Climates</p>
                <p className="text-md">
                  {listFormatter.format(
                    planet.climates.flatMap((climate) => climate.climate),
                  )}
                </p>
              </div>
            </div>
            <div className="flex gap-x-4 items-center jus">
              <IconBackground size={24} className="text-primary" />
              <div>
                <p className="text-sm">Terrains</p>
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
                <p className="text-sm">Residents</p>
                <p className="text-md">
                  {numberFormatter.format(planet.residents.length)}
                </p>
              </div>
            </div>
          </CardContent>
        </Link>
      </Card>
      <AlertDialog
        open={isOpenDeleteDialog}
        onOpenChange={setIsOpenDeleteDialog}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure to delete the planet{" "}
              <span className="text-primary font-bold">{planet.name}</span>?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              planet.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeletePlanet}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog open={isOpenEditDialog} onOpenChange={setIsOpenEditDialog}>
        <DialogContent className="max-h-[50rem] overflow-y-scroll scrollbar-hide">
          <DialogHeader>
            <DialogTitle>
              Editing planet{" "}
              <span className="text-primary font-bold">{planet.name}</span>
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              className="flex flex-col gap-y-4"
              onSubmit={form.handleSubmit(handleEditPlanet)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="diameter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Diameter</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(event) =>
                          field.onChange(Number(event.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium leading-none">
                    Climates
                  </span>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => appendClimate({ climate: "" })}
                  >
                    <IconPlus size="16" />
                  </Button>
                </div>
                <div className="flex flex-col gap-y-2">
                  {climatesFields.map((field, index) => (
                    <div key={field.id} className="flex ">
                      <FormField
                        control={form.control}
                        name={`climates.${index}.climate`}
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-destructive"
                        onClick={() => removeClimate(index)}
                      >
                        <IconTrash size="20" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium leading-none">
                    Terrains
                  </span>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => appendTerrain({ terrain: "" })}
                  >
                    <IconPlus size="16" />
                  </Button>
                </div>
                <div className="flex flex-col gap-y-2">
                  {terrainFields.map((field, index) => (
                    <div key={field.id} className="flex ">
                      <FormField
                        control={form.control}
                        name={`terrains.${index}.terrain`}
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-destructive"
                        onClick={() => removeTerrain(index)}
                      >
                        <IconTrash size="20" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium leading-none">
                    Residents
                  </span>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => appendResident({ name: "" })}
                  >
                    <IconPlus size="16" />
                  </Button>
                </div>
                <div className="flex flex-col gap-y-2">
                  {residentFields.map((field, index) => (
                    <div key={field.id} className="flex ">
                      <FormField
                        control={form.control}
                        name={`residents.${index}.name`}
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-destructive"
                        onClick={() => removeResident(index)}
                      >
                        <IconTrash size="20" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
