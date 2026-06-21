import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: true,
    port: Number(process.env.PORT) || 1234,
    // strictPort: true,
    allowedHosts: true,
    watch: {
      usePolling: true,
    },
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 1234,
    allowedHosts: true,
  },
}));
