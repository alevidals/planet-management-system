import { z } from "zod";

export const insertPlanetSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  diameter: z.number().min(1, {
    message: "Diameter is required",
  }),
  climates: z
    .array(z.string().min(1, { message: "Climate is required" }))
    .min(1, {
      message: "At least one climate is required",
    }),
  terrains: z
    .array(
      z.string().min(1, {
        message: "Terrain is required",
      }),
    )
    .min(1, {
      message: "At least one terrain is required",
    }),
  residents: z.array(z.string().min(1, { message: "Name is required" })),
});

export const updatePlanetSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  diameter: z.number().min(1, {
    message: "Diameter is required",
  }),
  climates: z
    .array(z.string().min(1, { message: "Climate is required" }))
    .min(1, {
      message: "At least one climate is required",
    }),
  terrains: z
    .array(
      z.string().min(1, {
        message: "Terrain is required",
      }),
    )
    .min(1, {
      message: "At least one terrain is required",
    }),
  residents: z.array(
    z.object({
      id: z.string().optional(),
      name: z.string().min(1, { message: "Name is required" }),
    }),
  ),
});
