import { HeaderNav } from "@/components/header-nav";
import { Heading } from "@/components/heading";
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
      <SheetContent>
        <SheetHeader className="mb-4">
          <SheetTitle asChild>
            <Heading as="h2" className={cn(swFont.className, "text-primary")}>
              PMS
            </Heading>
          </SheetTitle>
        </SheetHeader>
        <HeaderNav />
        {/* <div className="flex flex-col">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "py-2 text-lg font-semibold",
                link.href === pathname ? "text-primary" : "text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div> */}
      </SheetContent>
    </Sheet>
  );
}
