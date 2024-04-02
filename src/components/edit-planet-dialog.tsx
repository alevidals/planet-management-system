import { EditPlanetForm } from "@/components/edit-planet-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Planet } from "@/lib/types";

type Props = {
  planet: Planet;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export function EditPlanetDialog(props: Props) {
  const { planet, isOpen, setIsOpen } = props;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-h-[50rem] overflow-y-scroll scrollbar-hide">
        <DialogHeader>
          <DialogTitle title={planet.name}>
            Editing planet{" "}
            <span className="text-primary font-bold break-all">
              {planet.name}
            </span>
          </DialogTitle>
        </DialogHeader>
        <EditPlanetForm planet={planet} setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
