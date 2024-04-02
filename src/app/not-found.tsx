import { Heading } from "@/components/heading";
import { buttonVariants } from "@/components/ui/button";
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
      <div className="flex flex-col gap-y-3">
        <Heading
          as="h2"
          className={cn(
            "text-primary font-extrabold text-center text-9xl",
            swFont.className,
          )}
        >
          404
        </Heading>
        <Heading
          as="h3"
          className={cn(
            swFont.className,
            "text-4xl font-extrabold text-center",
          )}
        >
          Not found
        </Heading>
        <Link
          href="/"
          className={cn(
            buttonVariants(),
            "w-fit mx-auto font-bold uppercase mt-12 px-5 py-5",
          )}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
