import type { Planet } from "@/lib/types";
import { atomWithStorage } from "jotai/utils";

export const planetsAtom = atomWithStorage<Planet[] | null>("planets", null);
