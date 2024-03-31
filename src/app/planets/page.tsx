import Link from "next/link";

export default function PlanetsPage() {
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
