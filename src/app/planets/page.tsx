import { client } from "@/lib/genql";
import Link from "next/link";

export default async function PlanetsPage() {
  const planets = await client.query({
    allPlanets: {
      planets: {
        id: true,
        name: true,
      },
    },
  });

  console.log(planets);

  return (
    <main className="bg-zinc-900 min-h-screen container mx-auto">
      <h1 className="text-primary">PMS</h1>
      <h2>Planets Page</h2>
      <Link className="underline" href="/">
        Go to home
      </Link>
    </main>
  );
}
