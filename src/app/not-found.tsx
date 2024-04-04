import { Heading } from "@/components/heading";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LampContainer } from "@/components/ui/lamp";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Link from "next/link";

const swFont = localFont({
  src: "../../public/fonts/aurebesh.otf",
  display: "swap",
});

export default function NotFound() {
  return (
    <div className="min-h-dvh flex items-center justify-center">
      <LampContainer>
        <div className="flex flex-col gap-y-3">
          <Heading
            as="h2"
            className={cn(
              "bg-clip-text text-transparent bg-gradient-to-t from-neutral-50 to-primary font-extrabold text-center text-9xl",
              swFont.className,
            )}
          >
            404
          </Heading>
          <Heading
            as="h3"
            className={cn(
              swFont.className,
              "text-4xl font-extrabold text-center ",
            )}
          >
            Not found
          </Heading>
          <HoverBorderGradient
            containerClassName="rounded-lg mx-auto mt-12"
            className="font-semibold bg-background"
            as={Link}
            href="/"
          >
            Back to home
          </HoverBorderGradient>
        </div>
      </LampContainer>
    </div>
  );
}
