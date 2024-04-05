import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";

export function PageOutOfBound() {
  return (
    <>
      <div className="flex items-center justify-center h-96 mx-auto max-w-xl text-balance text-center">
        <div>
          <p className="text-lg">
            "Looks like you've traveled too far into the Unknown Regions of our
            search galaxy! Navigate back to familiar territories or use the
            Force to refine your search coordinates. Remember, even Jedi must
            stay within the boundaries of our search database." 🌌✨
          </p>
          <HoverBorderGradient
            containerClassName="rounded-lg mx-auto mt-4"
            as={Link}
            href="/planets"
          >
            Back to first page
          </HoverBorderGradient>
        </div>
      </div>
    </>
  );
}
