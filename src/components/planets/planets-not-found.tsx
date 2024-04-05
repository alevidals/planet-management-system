import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";

export function PlanetsNotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-96 mx-auto max-w-xl text-balance text-center">
        <p className="text-lg">
          "Looks like the Force isn't strong with this search! Try altering your
          parameters or explore our galaxy of options. May the results be with
          you!" 🌟🚀
        </p>
        <HoverBorderGradient
          containerClassName="rounded-lg mx-auto mt-4"
          as={Link}
          href="/planets"
        >
          Clear filters
        </HoverBorderGradient>
      </div>
    </>
  );
}
