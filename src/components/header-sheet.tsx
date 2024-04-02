import { HeaderNav } from "@/components/header-nav";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
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
        <HoverBorderGradient
          containerClassName="rounded-lg mt-4 w-full"
          className="font-semibold md:hidden w-full bg-background"
          as={Button}
          onClick={() => console.log("// TODO")}
        >
          Add planet
        </HoverBorderGradient>
      </SheetContent>
    </Sheet>
  );
}
