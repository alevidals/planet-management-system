import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { planetsAtom } from "@/lib/atoms";
import { updatePlanetSchema } from "@/lib/schemas";
import type { Planet, UpdatePlanet } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { useAtom } from "jotai";
import { useFieldArray, useForm } from "react-hook-form";

type Props = {
  planet: Planet;
  setIsOpen: (isOpen: boolean) => void;
};

export function EditPlanetForm(props: Props) {
  const { planet, setIsOpen } = props;
  const { toast } = useToast();

  const [planets, setPlanets] = useAtom(planetsAtom);

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

  function handleEditPlanet(data: UpdatePlanet) {
    const newPlanets = planets?.map((p) =>
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

    setPlanets(newPlanets ?? []);
    setIsOpen(false);
    toast({
      title: "Planet updated successfully",
    });
  }

  return (
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
            <span className="text-sm font-medium leading-none">Climates</span>
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
                  disabled={climatesFields.length === 1}
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
            <span className="text-sm font-medium leading-none">Terrains</span>
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
                  disabled={terrainFields.length === 1}
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
            <span className="text-sm font-medium leading-none">Residents</span>
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
  );
}
