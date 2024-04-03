import { AddPlanetDialog } from "@/components/add-planet-dialog";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  containerClassName?: string;
  className?: string;
};

export function AddPlanetButton(props: Props) {
  const { containerClassName, className } = props;

  const [isOpenAddPlanetDialog, setIsOpenAddPlanetDialog] = useState(false);

  return (
    <>
      <HoverBorderGradient
        containerClassName={cn("rounded-lg", containerClassName)}
        className={cn("font-semibold bg-background", className)}
        as={Button}
        onClick={() => setIsOpenAddPlanetDialog(true)}
      >
        Add planet
      </HoverBorderGradient>
      <AddPlanetDialog
        isOpen={isOpenAddPlanetDialog}
        setIsOpen={setIsOpenAddPlanetDialog}
      />
    </>
  );
}
