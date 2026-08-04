import { z } from "zod";

export const envSchema = z.object({
  VITE_FORMSPREE_ENDPOINT: z
    .string()
    .url("VITE_FORMSPREE_ENDPOINT must be a valid URL"),
  VITE_PORT: z.string().transform(Number).optional().default("5173"),
  VITE_GITHUB_USERNAME: z.string().optional().default("cloudcodes-uk"),
  VITE_GITHUB_TOKEN: z.string().optional().default(""),
});
