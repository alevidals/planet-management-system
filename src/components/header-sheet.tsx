import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { IconMenu } from "@tabler/icons-react";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const swFont = localFont({
  src: "../../public/fonts/aurebesh.otf",
  display: "swap",
});

export function HeaderSheet() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <IconMenu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className={cn(swFont.className, "text-primary")}>
            PMS
          </SheetTitle>
        </SheetHeader>
        <div>
          <div className="flex flex-col">
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
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
