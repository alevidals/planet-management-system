import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Link from "next/link";

const swFont = localFont({
  src: "../../../../public/fonts/aurebesh.otf",
  display: "swap",
});

export default function NotFound() {
  return (
    <div className="min-h-dvh flex items-center justify-center">
      <div className="flex flex-col gap-y-3">
        <h2
          className={cn(
            "text-9xl text-primary font-extrabold text-center",
            swFont.className,
          )}
        >
          404
        </h2>
        <h3
          className={cn(
            swFont.className,
            "text-4xl font-extrabold text-center",
          )}
        >
          Not found
        </h3>
        <p className="text-center text-xl">
          In this galaxy far, far away... no planet is named like this one
        </p>
        <Link
          href="/planets"
          className={cn(
            buttonVariants(),
            "w-fit mx-auto font-bold uppercase mt-12 px-5 py-5",
          )}
        >
          Back to planets
        </Link>
      </div>
    </div>
  );
}
