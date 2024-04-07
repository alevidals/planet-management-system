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
import { toast } from "@/components/ui/use-toast";
import { usePlanets } from "@/lib/store";
import type { Planet } from "@/lib/types";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  planet: Planet;
};

export function DeletePlanetDialog(props: Props) {
  const { isOpen, setIsOpen, planet } = props;

  const { removePlanet } = usePlanets();

  function handleDeletePlanet() {
    removePlanet(planet);
    toast({
      title: "Planet deleted successfully",
    });
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure to delete the planet{" "}
            <span className="text-primary font-bold break-all">
              {planet.name}
            </span>
            ?
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
  );
}
