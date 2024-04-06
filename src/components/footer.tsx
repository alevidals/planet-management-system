import { cn, swFont } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center w-full h-12 border-t mt-12">
      <p className="text-sm text-center text-muted-foreground">
        &copy; {year}{" "}
        <span className={cn(swFont.className, "text-primary font-bold")}>
          PMS
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
}
