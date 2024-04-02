"use client";

import { randomBytes } from "crypto";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { planetsAtom } from "@/lib/atoms";
import { insertPlanetSchema } from "@/lib/schemas";
import type { InsertPlanet, Planet } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { useSetAtom, useStore } from "jotai";
import type { Dispatch, SetStateAction } from "react";
import { useFieldArray, useForm } from "react-hook-form";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export function AddPlanetDialog(props: Props) {
  const { isOpen, setIsOpen } = props;

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
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-h-[50rem] overflow-y-scroll scrollbar-hide">
        <DialogHeader>
          <DialogTitle>Add planet</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col gap-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
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
                  onClick={() => appendResident({ resident: "" })}
                >
                  <IconPlus size="16" />
                </Button>
              </div>
              <div className="flex flex-col gap-y-2">
                {residentFields.map((field, index) => (
                  <div key={field.id} className="flex ">
                    <FormField
                      control={form.control}
                      name={`residents.${index}.resident`}
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
  );
}
