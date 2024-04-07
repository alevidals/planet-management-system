import { Planet } from "@/components/planets/planet";
import { capitalize } from "@/lib/utils";
import type { Metadata } from "next";
type Props = {
  params: { name: string };
};

export async function generateMetadata({
  params: { name },
}: Props): Promise<Metadata> {
  const formattedName = capitalize(decodeURIComponent(name));

  return {
    title: `PMS - ${formattedName}`,
    description: "Planet Management System",
  };
}

export default function PlanetsPage({ params }: Props) {
  return <Planet name={params.name} />;
}
