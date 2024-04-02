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
        <h1
          className={cn(
            "text-9xl text-primary font-extrabold text-center",
            swFont.className,
          )}
        >
          Not found
        </h1>
        <h2 className="text-3xl font-extrabold text-center">
          In this galaxy far, far away... no planet is named like this one
        </h2>
        <Link
          href="/planets"
          className={cn(
            buttonVariants(),
            "w-fit mx-auto font-bold uppercase mt-12 px-10 py-7",
          )}
        >
          Back to planets
        </Link>
      </div>
    </div>
  );
}
