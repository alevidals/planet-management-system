import { HeaderNav } from "@/components/header-nav";
import { Heading } from "@/components/heading";
import { AddPlanetButton } from "@/components/ui/add-planet-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { IconMenu } from "@tabler/icons-react";
import localFont from "next/font/local";
import { useState } from "react";

const swFont = localFont({
  src: "../../public/fonts/aurebesh.otf",
  display: "swap",
});

export function HeaderSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <IconMenu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="mb-4">
          <SheetTitle asChild>
            <Heading as="h2" className={cn(swFont.className, "text-primary")}>
              PMS
            </Heading>
          </SheetTitle>
        </SheetHeader>

        <div className="grow">
          <HeaderNav onClick={() => setIsOpen(false)} />
        </div>
        <AddPlanetButton
          containerClassName="w-full"
          className="w-full md:hidden"
        />
      </SheetContent>
    </Sheet>
  );
}
