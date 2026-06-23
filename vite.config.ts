import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = Number(process.env.PORT || env.PORT) || 1234;

  return {
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
      port: port,
      // strictPort: true,
      allowedHosts: true,
      watch: {
        usePolling: true,
      },
    },
    preview: {
      host: true,
      port: port,
      allowedHosts: true,
    },
  };
});
