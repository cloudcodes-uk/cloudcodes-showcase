import { z } from "zod";
import { envSchema } from "./env.schema";

let parsedEnv: z.infer<typeof envSchema>;

try {
  parsedEnv = envSchema.parse({
    VITE_FORMSPREE_ENDPOINT: import.meta.env.VITE_FORMSPREE_ENDPOINT,
    VITE_PORT: import.meta.env.VITE_PORT,
    VITE_GITHUB_USERNAME: import.meta.env.VITE_GITHUB_USERNAME,
    VITE_GITHUB_TOKEN: import.meta.env.VITE_GITHUB_TOKEN,
  });
} catch (error) {
  if (error instanceof z.ZodError) {
    const errorMessages = error.errors.map((e) => e.message).join(", ");
    throw new Error(
      `Environment configuration error: ${errorMessages}. The app cannot start.`,
    );
  }
  throw error;
}

export const env = parsedEnv;
