import { createClient } from "@/generated";

export const client = createClient({
  url: process.env.API_URL,
});
