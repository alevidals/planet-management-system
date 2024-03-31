import type { Planet } from "@/lib/types";
import { atom } from "jotai";

export const planetsAtom = atom<Planet[]>([]);
