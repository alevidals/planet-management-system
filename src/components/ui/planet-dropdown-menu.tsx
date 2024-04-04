import { DeletePlanetDialog } from "@/components/delete-planet-dialog";
import { EditPlanetDialog } from "@/components/edit-planet-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Planet } from "@/lib/types";
import { IconDots, IconEdit, IconTrash } from "@tabler/icons-react";
import { useState } from "react";

type Props = {
  planet: Planet;
};

export function PlanetDropdownMenu(props: Props) {
  const { planet } = props;

  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
  const [isOpenEditDialog, setIsOpenEditDialog] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="shrink-0">
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
              <span className="text-xs text-muted-foreground">Edit planet</span>
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
      <DeletePlanetDialog
        isOpen={isOpenDeleteDialog}
        planet={planet}
        setIsOpen={setIsOpenDeleteDialog}
      />
      <EditPlanetDialog
        isOpen={isOpenEditDialog}
        setIsOpen={setIsOpenEditDialog}
        planet={planet}
      />
    </>
  );
}
