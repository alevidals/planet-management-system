import { z } from "zod";

export const insertPlanetSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  diameter: z
    .string()
    .min(1, {
      message: "Diameter is required",
    })
    .refine((value) => !Number.isNaN(value) && Number(value) > 0, {
      message: "Diameter must be a number greater than 0",
    }),
  climates: z
    .array(
      z.object({
        climate: z.string().min(1, { message: "Climate is required" }),
      }),
    )
    .min(1, {
      message: "At least one climate is required",
    }),
  terrains: z
    .array(
      z.object({
        terrain: z.string().min(1, { message: "Terrain is required" }),
      }),
    )
    .min(1, {
      message: "At least one terrain is required",
    }),
  residents: z
    .array(
      z.object({
        resident: z.string().min(1, { message: "Name is required" }),
      }),
    )
    .optional()
    .nullable(),
});

export const updatePlanetSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  diameter: z
    .string()
    .min(1, {
      message: "Diameter is required",
    })
    .refine((value) => !Number.isNaN(value) && Number(value) > 0, {
      message: "Diameter must be a number greater than 0",
    }),
  climates: z
    .array(
      z.object({
        climate: z.string().min(1, { message: "Climate is required" }),
      }),
    )
    .min(1, {
      message: "At least one climate is required",
    }),
  terrains: z
    .array(
      z.object({
        terrain: z.string().min(1, { message: "Terrain is required" }),
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
