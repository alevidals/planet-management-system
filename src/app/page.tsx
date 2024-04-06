import { Heading } from "@/components/heading";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Spotlight } from "@/components/ui/spotlight";
import { cn, swFont } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="h-[30rem] w-full rounded-md flex md:items-center md:justify-center antialiased relative">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10 w-full">
          <Heading
            as="h1"
            className={cn(
              swFont.className,
              "text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-primary bg-opacity-50",
            )}
          >
            Planet <br /> Management System
          </Heading>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-xl text-center mx-auto text-balance">
            "Welcome to the Planet Management System (
            <span className={cn(swFont.className, "text-primary font-bold")}>
              PMS
            </span>
            )! Here, you're the master of your cosmic realm. Easily add, edit,
            or delete planets as you see fit. Dive into detailed insights on
            each celestial body. Rule your galaxy with ease and precision!" 🌟🌌
          </p>
        </div>
      </div>
      <HoverBorderGradient
        containerClassName="rounded-lg mx-auto"
        className=" py-6 px-6 bg-background font-bold"
        as={Link}
        href="/planets"
      >
        <span>View planets</span>
      </HoverBorderGradient>
    </main>
  );
}
