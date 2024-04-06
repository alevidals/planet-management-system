import { Planet } from "@/components/planets/planet";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PMS",
  description: "Planet Management System",
};

type Props = {
  params: { id: string };
};

export default function PlanetsPage({ params }: Props) {
  return <Planet id={params.id} />;
}
