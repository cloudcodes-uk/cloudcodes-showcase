import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 1234,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: "log-server-port",
      configureServer(server) {
        server.httpServer?.once("listening", () => {
          const address = server.httpServer?.address();
          const port = typeof address === "object" && address ? address.port : server.config.server.port;
          console.log(`[Dokploy Log] Server is listening on port: ${port}`);
        });
      },
      configurePreviewServer(server) {
        server.httpServer?.once("listening", () => {
          const address = server.httpServer?.address();
          const port = typeof address === "object" && address ? address.port : server.config.preview.port;
          console.log(`[Dokploy Log] Preview server is listening on port: ${port}`);
        });
      },
    },
  ].filter(
    Boolean,
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
